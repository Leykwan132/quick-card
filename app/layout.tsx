import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import Navigation from "@/components/Navigation";
// authentication
import { ClerkProvider } from "@clerk/nextjs";
import { FaLinkedin } from "react-icons/fa";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quickcard",
  description: "Your phone is your new wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{}}>
      <AntdRegistry>
        <html lang="en">
          <body className={poppins.className}>
            <Providers>
              <Navigation />
              {children}
              <div className="flex flex-row items-center justify-between p-4 text-black bg-white dark:text-white dark:bg-slate-950">
                <div>© Quickcard Technologies Inc. 2023</div>
                <FaLinkedin size={28} />
              </div>
            </Providers>
          </body>
        </html>
      </AntdRegistry>
    </ClerkProvider>
  );
}
