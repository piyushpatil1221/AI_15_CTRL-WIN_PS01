import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Ensure the correct relative path
import { ThemeProvider } from "../components/theme-provider"; 
import { AvatarProvider } from "../components/avatar-provider"; 
import { Toaster } from "../components/toaster";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AI Avatar Assistant",
  description: "An intelligent AI assistant with avatar capabilities",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<html lang="en">
<body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AvatarProvider>
            {children}
            <Toaster />
          </AvatarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}