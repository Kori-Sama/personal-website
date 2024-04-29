import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/provider/theme-provider";
import Header from "./header";
import { cookies } from "next/headers";
import { decrypt } from "@/lib/jwt";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "KoriのWebsite",
  description: "KoriのWebsite",
  icons: ["alice.png"],
  authors: [{ name: "Kori" }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = cookies().get("session")?.value as string;
  let userInfo = null;
  if (token) {
    const { id, username } = await decrypt(token);
    userInfo = { id, username };
  }
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header userInfo={userInfo} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
