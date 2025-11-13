import {
  IconLayoutDashboard,
  IconUsers,
  IconUserQuestion,
} from "@tabler/icons-react";

import { Command, Image, MessageCircle  } from "lucide-react";
import type { SidebarData } from "../layout/types";

export const sidebarData: SidebarData = {
  user: {
    name: "satnaing",
    email: "satnaingdev@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Admin Pannel",
      logo: Command,
      plan: "Skill Drift",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: IconLayoutDashboard,
        },
        {
          title: "Users",
          url: "/users",
          icon: IconUsers,
        },
        {
          title: 'Blogs',
          url: '/blogs',
          icon: Image,
        },
        {
          title: 'Chats',
          url: '/chats',
          icon: MessageCircle,
        },
        {
          title: 'FAQ',
          url: '/faq',
          icon: IconUserQuestion,
        },
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
};
