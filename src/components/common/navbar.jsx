import React from "react";
import Image from "./image";
import Link from "next/link";

const links = [
  {
    href: "/",
    label: "e-Invoice App",
  },
  {
    href: "/",
    label: "Products",
  },
  {
    href: "/",
    label: "Solutions",
  },
  {
    href: "/",
    label: "Prices",
  },
  {
    href: "/",
    label: "Resources",
  },
];

const Navbar = () => {
  return (
    <nav className="px-6 md:px-3 py-7 border-b border-gray-100 flex justify-between items-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        className="w-[14.625rem] h-[1.875rem]"
      />
      <div className="flex gap-7">
        {links.map((link) => (
          <Link key={link.label} href={link.href} className="text-gray-700">
            {link.label}
          </Link>
        ))}
      </div>
      <div className="flex">
        <Link href="/" className="text-sm px-6 py-2">
          Login
        </Link>
        <Link href="/" className="text-sm px-6 py-2 bg-gray-900 text-white rounded-lg">
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
