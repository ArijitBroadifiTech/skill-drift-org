import React from 'react';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { Outlet } from '@tanstack/react-router';

function AuthenticatedLayout({ children }: { children?: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children ? children : <Outlet />}
      </main>
    </SidebarProvider>
  );
}

export default AuthenticatedLayout;
