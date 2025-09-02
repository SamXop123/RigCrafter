import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth-context";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import type React from "react";
import { BackToTopButton } from "@/components/back-to-top-button";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RigCrafter - Custom Gaming PC Builder",
  description:
    "Build your dream gaming PC with our interactive component selector",
  generator: "SamXop123",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${spaceGrotesk.className} bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <AuthProvider>
            {children}
            <Toaster richColors position="top-center" />
            <ToastContainer
              position="top-center"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              toastClassName="text-sm"
            />
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
        <BackToTopButton />
      </body>
    </html>
  );
}
