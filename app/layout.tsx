import {Montserrat, Playfair_Display} from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
 subsets: ["latin"],
 variable: "--font-montserrat",
 weight: ["400", "500"],
});

const playfair = Playfair_Display({
 subsets: ["latin"],
 variable: "--font-playfair",
 style: ["italic"],
 weight: ["400"],
});

export default function RootLayout({children}: {children: React.ReactNode}) {
 return (
  <html
   lang="en"
   className={`${montserrat.variable} ${playfair.variable}`}
  >
   <body>{children}</body>
  </html>
 );
}
