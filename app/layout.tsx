import type { Metadata } from "next";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import AppContainer from "./components/containers/AppContainer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "devlinks",
  description: "Link-sharing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={inter.className}>
          <AppContainer>{children}</AppContainer>
        </body>
      </UserProvider>
    </html>
  );
}
