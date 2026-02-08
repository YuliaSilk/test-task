import {Montserrat, Playfair_Display, Inter} from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import ContactWidget from "./components/layout/ContactWidget";

const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-montserrat",
 weight: ["400", "500"],
});

const playfair = Playfair_Display({
 subsets: ["latin"],
 variable: "--font-playfair",
 weight: ["400", "500", "600", "700"],
 style: ["normal", "italic"],
});

const inter = Inter({
 subsets: ["latin"],
 variable: "--font-inter",
 weight: ["600"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
 return (
  <html
   lang="en"
   className={`${montserrat.variable} ${playfair.variable} ${inter.variable}`}
  >
   <body
    className="antialiased"
    suppressHydrationWarning
   >
    <Header />
    <main>{children}</main>
    <ContactWidget />
   </body>
  </html>
 );
}
