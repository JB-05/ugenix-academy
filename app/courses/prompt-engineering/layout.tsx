import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prompt Engineering Course',
  description:
    'Master prompt engineering with Ugenix Academy. Learn to craft precise prompts, understand AI behavior, and use AI tools for content, coding, and research. Taught by industry practitioners.',
  keywords: ['prompt engineering', 'AI course', 'ChatGPT', 'AI communication', 'prompt design'],
  openGraph: {
    title: 'Prompt Engineering Course | Ugenix Academy',
    description: 'Master the art of communicating with AI. Practical, project-based prompt engineering training.',
    url: '/courses/prompt-engineering',
  },
}

export default function PromptEngineeringLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
