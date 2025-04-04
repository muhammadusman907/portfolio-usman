// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { Toaster } from "@/components/ui/sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//          <Toaster position="top-right" richColors />
//         {children}
//       </body>
//     </html>
//   );
// }

import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/app/components/theme-provider"
// import { Toaster } from "@/components/ui/toaster"
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dancing-script'
})

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A professional portfolio website built with Next.js, ShadCN, Tailwind CSS, and Framer Motion",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={inter.className}> */}
      <body className={`${inter.className} ${dancingScript.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster position="top-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}


