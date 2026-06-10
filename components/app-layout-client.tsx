'use client'

import { ReactNode, useEffect } from 'react'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

import { SidebarProvider } from '@/components/ui/sidebar'

import AppSidebar from '@/components/app-sidebar'
import ArtifactRoot from '@/components/artifact/artifact-root'
import Header from '@/components/header'
import { KeyboardShortcutHandler } from '@/components/keyboard-shortcut-handler'

interface AppLayoutClientProps {
  children: ReactNode
  userId: string | null
  user: any
}

export function AppLayoutClient({ children, userId, user }: AppLayoutClientProps) {
  const pathname = usePathname()
  const isLandingPage = pathname === '/'

  // Manage body element styles on client-side to ensure smooth scroll / fixed toggle
  useEffect(() => {
    const body = document.body
    if (isLandingPage) {
      body.className = 'min-h-screen bg-background font-sans antialiased overflow-y-auto overflow-x-hidden scroll-smooth'
    } else {
      body.className = 'fixed inset-0 flex flex-col font-sans antialiased overflow-hidden'
    }
  }, [isLandingPage])

  return (
    <SidebarProvider defaultOpen={false}>
      <ArtifactRoot>
        {isLandingPage ? (
          <div className="flex flex-col min-h-screen w-full relative">
            {children}
          </div>
        ) : (
          <div className="flex flex-row flex-1 min-w-0 h-full w-full overflow-hidden">
            {userId && <AppSidebar />}
            <KeyboardShortcutHandler />
            <div className="flex flex-col flex-1 min-w-0 h-full">
              <Header user={user} />
              <main className="flex flex-1 min-h-0 min-w-0 overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        )}
      </ArtifactRoot>
    </SidebarProvider>
  )
}
