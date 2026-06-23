import nodemailer from 'nodemailer'

export type CourseInquiryPayload = {
  formType: 'courses'
  submissionId: string
  timestamp: string
  name: string
  email: string
  phone: string
  message: string
}

export type PartnershipInquiryPayload = {
  formType: 'partnerships'
  submissionId: string
  timestamp: string
  name: string
  workEmail: string
  organization: string
  role: string
  partnershipType: string
  website: string
  description: string
}

export type ContactInquiryPayload = CourseInquiryPayload | PartnershipInquiryPayload

const BRAND = {
  orange: '#E4572E',
  orangeLight: '#EB6844',
  gold: '#C6A75E',
  bg: '#050505',
  card: '#0a0a0a',
  border: 'rgba(255,255,255,0.08)',
  text: '#fafafa',
  muted: '#a1a1aa',
  subtle: '#71717a',
}

const DEFAULT_CC = ['hr@ugenix.in', 'academy.ugenix@gmail.com']
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://academy.ugenix.in'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function formatTimestamp(iso: string) {
  try {
    return new Intl.DateTimeFormat('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function getSmtpConfig() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT || '465')
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  const to = process.env.CONTACT_NOTIFICATION_EMAIL

  if (!host || !user || !pass || !to) {
    throw new Error('EMAIL_NOT_CONFIGURED')
  }

  const ccFromEnv = process.env.CONTACT_CC_EMAILS
  const cc = ccFromEnv
    ? ccFromEnv.split(',').map((email) => email.trim()).filter(Boolean)
    : DEFAULT_CC

  return {
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    to,
    cc,
    from: process.env.CONTACT_FROM_EMAIL || user,
    fromName: process.env.CONTACT_FROM_NAME || 'Ugenix Academy',
  }
}

function createTransporter(smtp: ReturnType<typeof getSmtpConfig>) {
  return nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.secure,
    auth: smtp.auth,
  })
}

type EmailField = { label: string; value: string; multiline?: boolean }

function renderFieldRows(fields: EmailField[]) {
  return fields
    .map((field) => {
      const value = field.value || '—'
      const cellValue = field.multiline
        ? escapeHtml(value).replaceAll('\n', '<br/>')
        : escapeHtml(value)

      return `
        <tr>
          <td style="padding:14px 16px;border-bottom:1px solid ${BRAND.border};color:${BRAND.muted};font-size:13px;font-weight:600;width:38%;vertical-align:top;">
            ${escapeHtml(field.label)}
          </td>
          <td style="padding:14px 16px;border-bottom:1px solid ${BRAND.border};color:${BRAND.text};font-size:14px;line-height:1.6;vertical-align:top;">
            ${cellValue}
          </td>
        </tr>
      `
    })
    .join('')
}

function wrapEmailTemplate(options: {
  preheader: string
  eyebrow: string
  title: string
  intro: string
  bodyHtml: string
  footerNote?: string
}) {
  const { preheader, eyebrow, title, intro, bodyHtml, footerNote } = options

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.bg};font-family:Arial,Helvetica,sans-serif;-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">
    ${escapeHtml(preheader)}
  </div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BRAND.bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;">
          <tr>
            <td style="padding-bottom:24px;text-align:center;">
              <div style="display:inline-block;padding:10px 18px;border-radius:999px;border:1px solid ${BRAND.border};background:${BRAND.card};">
                <span style="font-size:18px;font-weight:700;letter-spacing:0.04em;color:${BRAND.text};">UGENIX</span>
                <span style="font-size:18px;font-weight:700;letter-spacing:0.04em;color:${BRAND.orange};"> ACADEMY</span>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:${BRAND.card};border:1px solid ${BRAND.border};border-radius:18px;overflow:hidden;">
              <div style="height:4px;background:linear-gradient(90deg,${BRAND.orange},${BRAND.gold});"></div>
              <div style="padding:32px 28px 28px;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.orange};">
                  ${escapeHtml(eyebrow)}
                </p>
                <h1 style="margin:0 0 14px;font-size:24px;line-height:1.3;font-weight:700;color:${BRAND.text};">
                  ${escapeHtml(title)}
                </h1>
                <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:${BRAND.muted};">
                  ${intro}
                </p>
                ${bodyHtml}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 8px 0;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.6;color:${BRAND.subtle};">
                ${footerNote || 'Ugenix Academy — practical AI education for builders.'}
              </p>
              <p style="margin:0;font-size:12px;line-height:1.6;color:${BRAND.subtle};">
                <a href="${SITE_URL}" style="color:${BRAND.orangeLight};text-decoration:none;">academy.ugenix.in</a>
                &nbsp;·&nbsp;
                <a href="mailto:academy.ugenix@gmail.com" style="color:${BRAND.orangeLight};text-decoration:none;">academy.ugenix@gmail.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

function renderDetailsCard(fields: EmailField[]) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border};border-radius:14px;overflow:hidden;background:#111111;">
      ${renderFieldRows(fields)}
    </table>
  `
}

function renderMetaPills(submissionId: string, timestamp: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-bottom:20px;">
      <tr>
        <td style="padding-right:8px;">
          <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(228,87,46,0.12);border:1px solid rgba(228,87,46,0.25);font-size:12px;font-weight:600;color:${BRAND.orangeLight};">
            ${escapeHtml(submissionId)}
          </span>
        </td>
        <td>
          <span style="display:inline-block;padding:6px 12px;border-radius:999px;background:rgba(255,255,255,0.04);border:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">
            ${escapeHtml(formatTimestamp(timestamp))}
          </span>
        </td>
      </tr>
    </table>
  `
}

function getSubmitterEmail(payload: ContactInquiryPayload) {
  return payload.formType === 'courses' ? payload.email : payload.workEmail
}

function getSubmitterName(payload: ContactInquiryPayload) {
  return payload.name
}

function buildTeamNotification(payload: ContactInquiryPayload) {
  const isCourse = payload.formType === 'courses'

  const fields: EmailField[] = isCourse
    ? [
        { label: 'Name', value: payload.name },
        { label: 'Email', value: payload.email },
        { label: 'Phone', value: payload.phone },
        { label: 'Message', value: payload.message, multiline: true },
      ]
    : [
        { label: 'Name', value: payload.name },
        { label: 'Work email', value: payload.workEmail },
        { label: 'Organization', value: payload.organization },
        { label: 'Role', value: payload.role },
        { label: 'Partnership type', value: payload.partnershipType },
        { label: 'Website / LinkedIn', value: payload.website },
        { label: 'Description', value: payload.description, multiline: true },
      ]

  const formLabel = isCourse ? 'Course inquiry' : 'Partnership inquiry'
  const subjectName = isCourse ? payload.name : payload.organization

  const text = [
    `New ${formLabel.toLowerCase()}`,
    `Submission ID: ${payload.submissionId}`,
    `Submitted: ${formatTimestamp(payload.timestamp)}`,
    ...fields.map((f) => `${f.label}: ${f.value || '—'}`),
  ].join('\n')

  const html = wrapEmailTemplate({
    preheader: `New ${formLabel.toLowerCase()} from ${subjectName}`,
    eyebrow: formLabel,
    title: `New submission received`,
    intro: `A visitor submitted the <strong style="color:${BRAND.text};">${formLabel.toLowerCase()}</strong> form on the contact page. Reply directly to this email to respond to them.`,
    bodyHtml: `
      ${renderMetaPills(payload.submissionId, payload.timestamp)}
      ${renderDetailsCard(fields)}
    `,
    footerNote: 'Internal notification — Ugenix Academy contact form.',
  })

  return {
    subject: `[Contact] ${formLabel} — ${subjectName}`,
    text,
    html,
    replyTo: getSubmitterEmail(payload),
  }
}

function buildUserConfirmation(payload: ContactInquiryPayload) {
  const isCourse = payload.formType === 'courses'
  const name = getSubmitterName(payload)
  const formLabel = isCourse ? 'course inquiry' : 'partnership inquiry'

  const summaryFields: EmailField[] = isCourse
    ? [
        { label: 'Inquiry type', value: 'Courses & programs' },
        { label: 'Email', value: payload.email },
        ...(payload.phone ? [{ label: 'Phone', value: payload.phone }] : []),
        ...(payload.message ? [{ label: 'Your message', value: payload.message, multiline: true }] : []),
      ]
    : [
        { label: 'Inquiry type', value: 'Partnerships' },
        { label: 'Organization', value: payload.organization },
        { label: 'Partnership type', value: payload.partnershipType },
      ]

  const text = [
    `Hi ${name},`,
    '',
    `Thank you for reaching out to Ugenix Academy. We've received your ${formLabel}.`,
    '',
    `Reference: ${payload.submissionId}`,
    `Submitted: ${formatTimestamp(payload.timestamp)}`,
    '',
    'Our team typically responds within 1–2 business days.',
    '',
    '— Ugenix Academy',
    'academy.ugenix@gmail.com',
  ].join('\n')

  const html = wrapEmailTemplate({
    preheader: `We received your ${formLabel}. Reference ${payload.submissionId}.`,
    eyebrow: 'Thank you',
    title: `We got your message, ${escapeHtml(name.split(' ')[0] || name)}`,
    intro: `Thanks for contacting <strong style="color:${BRAND.text};">Ugenix Academy</strong>. Your ${formLabel} has been received and shared with our team. We'll get back to you within <strong style="color:${BRAND.text};">1–2 business days</strong>.`,
    bodyHtml: `
      ${renderMetaPills(payload.submissionId, payload.timestamp)}
      ${renderDetailsCard(summaryFields)}
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
        <tr>
          <td style="padding:18px 20px;border-radius:14px;background:rgba(228,87,46,0.08);border:1px solid rgba(228,87,46,0.2);">
            <p style="margin:0;font-size:14px;line-height:1.7;color:${BRAND.muted};">
              Need to add more details? Simply reply to this email — your message will reach our team.
            </p>
          </td>
        </tr>
      </table>
    `,
    footerNote: 'You received this because you submitted a form on academy.ugenix.in.',
  })

  return {
    subject: `We received your inquiry — Ugenix Academy`,
    text,
    html,
  }
}

export async function sendContactNotificationEmail(payload: ContactInquiryPayload) {
  const smtp = getSmtpConfig()
  const transporter = createTransporter(smtp)
  const submitterEmail = getSubmitterEmail(payload)

  const teamEmail = buildTeamNotification(payload)
  const userEmail = buildUserConfirmation(payload)

  await Promise.all([
    transporter.sendMail({
      from: `"${smtp.fromName}" <${smtp.from}>`,
      to: smtp.to,
      cc: smtp.cc,
      replyTo: teamEmail.replyTo,
      subject: teamEmail.subject,
      text: teamEmail.text,
      html: teamEmail.html,
    }),
    transporter.sendMail({
      from: `"${smtp.fromName}" <${smtp.from}>`,
      to: submitterEmail,
      replyTo: smtp.to,
      subject: userEmail.subject,
      text: userEmail.text,
      html: userEmail.html,
    }),
  ])
}
