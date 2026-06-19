import Razorpay from 'razorpay'
import crypto from 'crypto'

export function getRazorpayInstance() {
  const keyId = process.env.RAZORPAY_KEY_ID
  const keySecret = process.env.RAZORPAY_KEY_SECRET

  if (!keyId || !keySecret) {
    throw new Error('RAZORPAY_NOT_CONFIGURED')
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  })
}

export function getWorksimAmountPaise(): number {
  const fromEnv = Number(process.env.WORKSIM_REGISTRATION_AMOUNT_PAISE)
  if (!Number.isNaN(fromEnv) && fromEnv > 0) {
    return fromEnv
  }
  return 50000
}

export function verifyRazorpaySignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const secret = process.env.RAZORPAY_KEY_SECRET
  if (!secret) return false

  const expected = crypto
    .createHmac('sha256', secret)
    .update(`${orderId}|${paymentId}`)
    .digest('hex')

  return expected === signature
}
