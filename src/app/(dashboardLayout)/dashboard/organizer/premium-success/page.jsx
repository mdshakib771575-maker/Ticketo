// import PaymentSuccessPage from '@/boilerplates/PaymentSuccess'
import PremiumSuccessPage from '@/components/PremiumSuccess'
import { baseUrl } from '@/lib/api/baseUrl'
import { stripe } from '@/lib/stripe'
// import { success } from 'better-auth'
// import { redirect } from 'next/navigation'

export default async function PremiumSuccess({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const session = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })
  // console.log(session.customer_email);
  const paymentData = {
    userEmail: session?.customer_email,
    transactionId: session?.subscription,
    paymentStatus: session?.payment_status,
    paymentType: "subscription",
    amount: session?.amount_total / 100
  }

  const res = await fetch(`${baseUrl}/api/users/update-premium/${session?.customer_email}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(paymentData)
  })

  const data = await res.json();
  console.log(data);



  return (
    <PremiumSuccessPage customer_email={session.customer_email} quantity={session?.metadata?.quantity} ></PremiumSuccessPage>
  )
}
