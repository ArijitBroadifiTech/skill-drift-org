import {
  IconLayoutDashboard,
  IconUsers,
  IconUserQuestion,
} from '@tabler/icons-react'

import { Command, Image, UserCog } from 'lucide-react'
import type { SidebarData } from '../layout/types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Admin Pannel',
      logo: Command,
      plan: 'Skill Drift',
    },
  ],
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Users',
          url: '/users',
          icon: IconUsers,
        },
        {
          title: 'User Activity',
          url: '/users',
          icon: IconUsers,
        },
        // {
        //   title: 'Plans',
        //   icon: IconMoneybag,
        //   items: [
        //     {
        //       title: 'View Plans',
        //       url: '/plans',
        //       icon: IconCurrencyDollar,
        //     },
        //     // {
        //     //   title: 'Create Plan',
        //     //   url: '/plans/create',
        //     //   icon: IconMoneybagPlus,
        //     // },
        //     {
        //       title: 'Module Cost',
        //       url: '/plans/module-cost',
        //       icon: IconCreditCard,
        //     },
        //   ],
        // },
        {
          title: 'User Actions',
          url: '/users',
          icon: UserCog,
        },
        {
          title: 'Blogs',
          url: '/blogs',
          icon: Image,
        },

        {
          title: 'FAQ',
          url: '/faq',
          icon: IconUserQuestion,
        },
        // {
        //   title: 'Secured by Clerk',
        //   icon: ClerkLogo,
        //   items: [
        //     {
        //       title: 'Sign In',
        //       url: '/clerk/sign-in',
        //     },
        //     {
        //       title: 'Sign Up',
        //       url: '/clerk/sign-up',
        //     },
        //     {
        //       title: 'User Management',
        //       url: '/clerk/user-management',
        //     },
        //   ],
        // },
      ],
    },

    // {
    //   title: 'Other',
    //   items: [
    //     {
    //       title: 'Settings',
    //       icon: IconSettings,
    //       items: [
          
    //         {
    //           title: 'Security',
    //           icon: IconLock,
    //           url: '/settings/security',
    //         },
    //       ],
    //     },
      
    //   ],
    // },
  ],
}
