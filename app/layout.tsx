import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PMA Lead- & Marketingplattform | Whitelabel-Lösung für Berater',
  description: 'All-in-One Lead- & Marketingplattform für PMA-Berater. Vollständig whitelabel-basierte Komplettlösung zur eigenständigen Leadgenerierung, -qualifizierung und strukturierten Übergabe.',
  keywords: 'PMA, Lead Management, Marketing Platform, Whitelabel, Berater, CRM, Leadgenerierung',
  authors: [{ name: 'PMA Platform' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
        </div>
      </body>
    </html>
  )
} 