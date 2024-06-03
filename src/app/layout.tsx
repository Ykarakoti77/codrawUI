'use client'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Sidebar } from '../components/Sidebar/SideBar'
import { colors, theme } from '@/Theme/theme'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              height: '100vh',
              width: '100vw',
              overflow: 'auto',
            }}
          >
            <Box>
              <Sidebar />
            </Box>
            <Box
              flexGrow={1}
              sx={{
                backgroundColor: colors.greyAccent[100],
                overflowY: 'auto', // Enable vertical scrolling when content overflows
              }}
            >
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
