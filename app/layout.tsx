import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { Analytics } from '@vercel/analytics/next'

import { getCurrentUserId } from '@/lib/auth/get-current-user'
import { UserProvider } from '@/lib/contexts/user-context'
import { hasSupabasePublicConfig } from '@/lib/supabase/keys'
import { createClient } from '@/lib/supabase/server'
import { cn } from '@/lib/utils'

import { Toaster } from '@/components/ui/sonner'

import { AppLayoutClient } from '@/components/app-layout-client'
import { PostHogProvider } from '@/components/posthog-provider'
import { ThemeProvider } from '@/components/theme-provider'

import './globals.css'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'VortexLogic'
const description = 'A sleek AI answers and creative media generation engine.'

export const metadata: Metadata = {
  metadataBase: new URL('https://vortexlogic.vercel.app'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  let user = null

  if (hasSupabasePublicConfig()) {
    const supabase = await createClient()
    const {
      data: { user: supabaseUser }
    } = await supabase.auth.getUser()
    user = supabaseUser
  }

  const userId = user?.id ?? (await getCurrentUserId())

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased bg-background text-foreground', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <PostHogProvider userId={user?.id ?? null}>
            <UserProvider hasUser={!!userId}>
              <AppLayoutClient userId={userId ?? null} user={user}>
                {children}
              </AppLayoutClient>
            </UserProvider>
          </PostHogProvider>
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
