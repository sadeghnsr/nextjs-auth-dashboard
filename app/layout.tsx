import type React from "react"
import type { Metadata } from "next"
import { AuthProvider } from "@/contexts/AuthContext"
import "./globals.scss"

export const metadata: Metadata = {
  title: "Authentication System",
  description: "Simple authentication system with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
