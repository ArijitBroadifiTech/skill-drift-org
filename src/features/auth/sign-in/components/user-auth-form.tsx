import type { HTMLAttributes } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useMutation } from '@tanstack/react-query'
// import { useRouter } from '@tanstack/react-router'
// import { toast } from 'sonner'
// import { authApi } from '@/api/services/auth-service'
// import { useAuthStore } from '@/stores/authStore'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PasswordInput } from '@/components/password-input'

type UserAuthFormProps = HTMLAttributes<HTMLFormElement>

const formSchema = z.object({
  email: z.email({
    error: (iss) => (iss.input === '' ? 'Please enter your email' : undefined),
  }),
  password: z
    .string()
    .min(1, 'Please enter your password')
    .min(6, 'Password must be at least 6 characters long'),
})

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  //   const { setAccessToken, setUser } = useAuthStore((state) => state.auth)
  //   const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  //   const loginMutation = useMutation({
  //     mutationFn: authApi.login,
  //     onSuccess: (response) => {
  //       if (response.status) {
  //         setAccessToken(response.data.token)
  //         setUser({
  //           name: response.data.admin.name,
  //           email: response.data.admin.email,
  //         })
  //         toast.success('Login successful', { duration: 2000 })
  //         router.navigate({ to: '/' })
  //       } else {
  //         toast.error('Login failed. Please try again.', { duration: 3000 })
  //       }
  //     },
  //     onError: (error) => {
  //       // eslint-disable-next-line no-console
  //       console.log('Error occured during login', error)
  //       toast.error('Login failed. Please try again.', { duration: 3000 })
  //     },
  //   })

  //   async function onSubmit(data: z.infer<typeof formSchema>) {
  //     loginMutation.mutate(data)
  //   }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        className={cn('grid gap-3', className)}
        {...props}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='name@example.com'
                  {...field}
                  className='relative z-10'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem className='relative'>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput
                  placeholder='********'
                  {...field}
                  className='relative z-10'
                />
              </FormControl>
              <FormMessage />
              {/* <Link
                to='/forgot-password'
                className='text-muted-foreground absolute -top-0.5 right-0 text-sm font-medium hover:opacity-75'
              >
                Forgot password?
              </Link> */}
            </FormItem>
          )}
        />
        <Button className='mt-2'>Login</Button>
      </form>
    </Form>
  )
}
