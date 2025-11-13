import Faq from '@/features/faq'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticated/faq/')({
  component: Faq,
})
