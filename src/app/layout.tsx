import type { Metadata } from "next";
import { Inter, Bebas_Neue, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const bebas_neue_init = Bebas_Neue({
  subsets: ['latin-ext'],
  weight: "400",
  variable: '--font-bebas_neue'
})

const dancing_script_init = Dancing_Script({
  subsets: ['latin'],
  weight: "700",
  variable: '--font-dancing_script'
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${bebas_neue_init.variable} ${dancing_script_init.variable}`}>{children}</body>
    </html>
  );
}
