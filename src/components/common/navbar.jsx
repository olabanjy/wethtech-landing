import React, { useState } from "react";
import Image from "./image";
import Link from "next/link";
import Dropdown from "./dropdown";
import Router from "next/router";
import Caret from "./caret";

const links = [
  {
    href: "/",
    label: "e-Invoice App",
  },
  {
    href: "https://wethtax.com/",
    label: "Products",
    subLinks: [{ label: "Wethax", value: "https://wethtax.com/" }],
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
  const [open, setOpen] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);

  return (
    <nav className="px-6 md:px-3 py-7 border-b border-gray-100 flex justify-between items-center">
      <Image
        src="/logo.svg"
        alt="Logo"
        className="w-[13.3125rem] h-7 lg:w-[14.625rem] lg:h-[1.875rem]"
        imgClassName="object-contain"
      />
      <div className="hidden lg:flex gap-7">
        {links.map((link) =>
          link.subLinks?.length > 0 ? (
            <Dropdown
              isLink
              className="w-auto"
              placeholder="Products"
              items={link?.subLinks ?? []}
              triggerClassName="bg-transparent border-none rounded-none h-fit py-0 shadow-none text-gray-700 w-fit"
            />
          ) : (
            <Link key={link.label} href={link.href} className="text-gray-700">
              {link.label}
            </Link>
          )
        )}
      </div>
      {/* <div className="hidden lg:flex">
        <Link href="/" className="text-sm px-6 py-2">
          Login
        </Link>
        <Link
          href="/"
          className="text-sm px-6 py-2 bg-gray-900 text-white rounded-lg"
        >
          Get Started
        </Link>
      </div> */}
      <button onClick={() => setOpen(!open)} className="lg:hidden">
        <Image src="/menu.svg" alt="Menu" className="w-7 h-7" />
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed top-0 left-0 right-0 z-50 h-screen bg-black/25 lg:hidden">
          <div className="h-full max-w-[23.4rem] bg-white p-8">
            <div className="flex justify-end">
              <button onClick={() => setOpen(false)} className="p-1.5">
                <Image src="/close.svg" alt="Close" className="w-3.5 h-3.5" />
              </button>
            </div>
            <Image
              src="/logo.svg"
              alt="Logo"
              className="w-[13.3125rem] h-7 lg:w-[14.625rem] lg:h-[1.875rem] mt-5 mb-10"
              imgClassName="object-contain"
            />
            <div className="flex flex-col">
              {links.map((link) =>
                link.subLinks?.length > 0 ? (
                  <div>
                    <p
                      className="text-gray-700 flex items-center gap-2 text-lg py-2.5 px-2"
                      onClick={() => setOpenProducts(!openProducts)}
                    >
                      {link.label} <Caret open={openProducts} />
                    </p>
                    {openProducts && (
                      <ul className="px-6 py-3">
                        {link.subLinks.map((subLink) => (
                          <li key={subLink.label}>
                            <Link href={subLink.href} className="py-1.5">
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-700 text-lg py-2.5 px-2"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
            {/* <div className="flex gap-2 mt-12">
              <Link
                href="/"
                className="text-sm px-6 py-2 border border-gray-900 rounded-lg"
              >
                Login
              </Link>
              <Link
                href="/"
                className="text-sm px-6 py-2 bg-gray-900 text-white rounded-lg"
              >
                Get Started
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
