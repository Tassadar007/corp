import './globals.css'
import {ADLaM_Display} from 'next/font/google'
import React from "react";


const adlam = ADLaM_Display({
  subsets:["latin"],
  display:"swap",
  weight:"400",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={adlam.className}>
        {children}
      </body>
    </html>
  );
}
