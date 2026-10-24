// import PaymentSuccessPage from '@/boilerplates/PaymentSuccess'

// import { baseUrl } from '@/lib/api/baseUrl'
import { stripe } from '@/lib/stripe'

import PaymentSuccessClient from './payment-success-client'
import { baseUrl } from '@/lib/api/baseUrl'
// import { redirect } from 'next/navigation'

export default async function PaymentSuccess({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const session = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })
    // console.log(session);

    if (session.payment_status !== "paid") {
        throw new Error("Payment not completed");
    }
    const paymentData = {
        amount: session?.metadata?.amount,
        eventId: session.metadata.eventId,
        eventTitle: session.metadata.eventTitle,
        quantity: session.metadata.quantity,
        email: session.metadata.email,
        paymentType: session.metadata.paymentType,
        transactionId: session.payment_intent.id,
        paymentStatus: session.payment_status
    }
    // console.log(paymentData);
    const res = await fetch(`${baseUrl}/api/events/booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(paymentData)
    })

    const data = await res.json();
    console.log(data);

    return (
        <PaymentSuccessClient customer_email={session?.customer_email} amount={Number(session?.metadata?.amount)} id={session?.payment_intent?.id} quantity={session?.metadata?.quantity} ></PaymentSuccessClient>
    )
}
