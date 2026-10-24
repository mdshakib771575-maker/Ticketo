import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

import { stripe } from '../../../lib/stripe'
import getUser from '@/lib/api/session'
import { email } from 'better-auth'

export async function POST(req) {
  try {
    const headersList = await headers()
    const origin = headersList.get('origin')
    const body = await req.json()
    const { type } = body
    console.log(body);
    NextResponse.json({});

    //  type: "booking",
    //     totalAmount,
    //     eventId,
    //     eventTitle,
    //     quentity,

    const user = await getUser()

    let lineObj;
    let metaObj;
    if (type === "subscription") {
      lineObj = {
        // Provide the exact Price ID (for example, price_1234) of the product you want to sell
        price: 'price_1UFQ4G6FTYOHFXJXkYjzl1bS',
        quantity: 1,
      }

    } else {
      lineObj = {
        price_data: {
          currency: "usd",
         unit_amount: Math.round(Number(body?.ticketPrice) * 100),
          product_data: {
            name: body?.eventTitle
          }
        },
        quantity: Number(body?.quantity)
      };

      metaObj = {
        email: user?.email || "",
        userId: user?.id || "",
        eventId: body?.eventId || "",
        paymentType: type,
        eventTitle: body?.eventTitle || "",
        amount: Number(body?.ticketPrice) * Number(body?.quantity),
        quantity: Number(body?.quantity)

      }
    }

    const successUrl = type == "subscription" ? `${origin}/dashboard/organizer/premium-success?session_id={CHECKOUT_SESSION_ID}` : `${origin}/payment-success?session_id={CHECKOUT_SESSION_ID}
`
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user.email,
      line_items: [lineObj],
      metadata: metaObj,
      mode: type === "subscription" ? "subscription" : "payment",
      // Provide a name (for example, hosted_web_0001) to label this Checkout integration and measure its conversion independently
      success_url: successUrl,
      cancel_url: `${origin}/cancel?session_id={CHECKOUT_SESSION_ID}`,
      // integration_identifier: '{{INTEGRATION_ID}}',
    });
    // console.log(session);
    return NextResponse.json({ url: session.url })
  } catch (err) {
    // console.log(err);
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 }
    )
  }
}