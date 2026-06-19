import { NextRequest, NextResponse } from 'next/server'
import { getRazorpayInstance, getWorksimAmountPaise } from '@/lib/razorpay'

export async function POST(request: NextRequest) {
  try {
    let body: { program?: string } = {}
    try {
      body = await request.json()
    } catch {
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 })
    }

    if (body.program !== 'worksim') {
      return NextResponse.json({ error: 'Invalid program' }, { status: 400 })
    }

    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID
    if (!keyId) {
      return NextResponse.json(
        { error: 'Payment is temporarily unavailable. Please try again later.' },
        { status: 503 }
      )
    }

    const razorpay = getRazorpayInstance()
    const amount = getWorksimAmountPaise()

    const order = await razorpay.orders.create({
      amount,
      currency: 'INR',
      receipt: `worksim_${Date.now()}`,
      notes: {
        program: 'worksim',
      },
    })

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      keyId,
    })
  } catch (error: unknown) {
    console.error('Razorpay create order error:', error)
    const message =
      error instanceof Error && error.message === 'RAZORPAY_NOT_CONFIGURED'
        ? 'Payment is temporarily unavailable. Please try again later.'
        : 'Failed to create payment order'

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
