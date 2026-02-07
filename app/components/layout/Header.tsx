import React from "react";
import Logo from "../ui/Logo";
import {NAV_LINKS} from "@/app/constants/navigation";
import Button from "../ui/Button";

export default function Header() {
 return (
  <header className="w-full pt-8.75">
   <div className="container-custom flex justify-between items-center">
    <Logo />
    <nav className="flex gap-10">
     {NAV_LINKS.map((link) => (
      <a
       key={link.name}
       href={link.href}
       className="nav-link transition-colors duration-300 hover:font-semibold hover:text-dark"
      >
       {link.name}
      </a>
     ))}
    </nav>
    <Button variant="secondary">Explore Our Services</Button>
   </div>
  </header>
 );
}
