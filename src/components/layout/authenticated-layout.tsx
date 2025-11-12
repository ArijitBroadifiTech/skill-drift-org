import React from 'react';
import { SidebarProvider } from '../ui/sidebar';
import { AppSidebar } from './app-sidebar';
import { Outlet } from '@tanstack/react-router';
import { cn } from '@/lib/utils';
import { Header } from './header';
import { Search } from '../search';
import { ThemeSwitch } from '../theme-switch';
import { SearchProvider } from '@/context/search-context';

function AuthenticatedLayout({ children }: { children?: React.ReactNode }) {
  return (
    <SearchProvider>
    <SidebarProvider>
      <AppSidebar />
      {/* <SidebarTrigger /> */}
      {/* <main>
        <SidebarTrigger />
        {children ? children : <Outlet />}
      </main> */}

      <div
          id='content'
          className={cn(
            'ml-auto w-full max-w-full',
            'peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon)-1rem)]',
            'peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]',
            'sm:transition-[width] sm:duration-200 sm:ease-linear',
            'flex h-svh flex-col',
            'group-data-[scroll-locked=1]/body:h-full',
            'has-[main.fixed-main]:group-data-[scroll-locked=1]/body:h-svh'
          )}
        >
          <Header fixed>
            <Search />
            <div className='ml-auto flex items-center space-x-4'>
              <ThemeSwitch />
            </div>
          </Header>
          {children ? children : <Outlet />}
        </div>

    </SidebarProvider>
    </SearchProvider>
  );
}

export default AuthenticatedLayout;
