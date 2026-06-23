import { redirect } from 'next/navigation'
import { ACADEMY_REGISTRATION_URL } from '@/lib/constants'

export default function RegisterPage() {
  redirect(ACADEMY_REGISTRATION_URL)
}
