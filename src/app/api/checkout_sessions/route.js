import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import getUser from '@/lib/api/session'

export async function POST() {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const user = await getUser()
  console.log(user);
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email:user.email,
      line_items: [
        {
          // Provide the exact Price ID (for example, price_1234) of the product you want to sell
          price:'price_1UFQ4G6FTYOHFXJXkYjzl1bS',
          quantity: 1,
        },
      ],
      mode:'subscription',
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
      success_url:`${origin}/dashboard/organizer/premium-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel?session_id={CHECKOUT_SESSION_ID}`,
      // integration_identifier: '{{INTEGRATION_ID}}',
    });
    // console.log(session);
    return NextResponse.json({url:session.url})
  } catch (err) {
    // console.log(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}