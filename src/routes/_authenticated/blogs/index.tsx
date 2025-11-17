import { createFileRoute } from '@tanstack/react-router'
import BlogsPage from '@/features/blogs'

export const Route = createFileRoute('/_authenticated/blogs/')({
  component: BlogsPage,
})
