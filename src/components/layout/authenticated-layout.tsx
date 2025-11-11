import React from 'react';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from './app-sidebar';
import Test from '@/modules/Test';

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children ? children : <Test />}
      </main>
    </SidebarProvider>
  );
}

export default AuthenticatedLayout;
