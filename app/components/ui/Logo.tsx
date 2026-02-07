import Image from "next/image";
import Link from "next/link";

export default function Logo() {
 return (
  <Link
   href="/"
   className="flex items-center gap-3 group"
  >
   <Image
    src="/logo.svg"
    alt="Advocium Logo"
    width={52}
    height={40}
    priority
   />
   <span className="font-inter font-semibold text-[32px] leading-10 text-primary">Advocium</span>
  </Link>
 );
}
