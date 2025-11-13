import BlogsPage from '@/features/blogs';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/blogs/')({
  component: BlogsPage
});

