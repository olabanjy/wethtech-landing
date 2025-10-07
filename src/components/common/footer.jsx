import React from "react";
import Image from "./image";
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: "Product",
      links: [
        {
          title: "How it works",
          href: "/",
        },
        {
          title: "Pricing",
          href: "/",
        },
        {
          title: "Integrations",
          href: "/",
        },
        {
          title: "Integrations",
          href: "/",
        },
      ],
    },
    {
      title: "Use Cases",
      links: [
        {
          title: "Business VPN",
          href: "/",
        },
        {
          title: "Remote Access",
          href: "/",
        },
        {
          title: "Site-to-Site Networking",
          href: "/",
        },
        {
          title: "Homelab",
          href: "/",
        },
        {
          title: "Enterprise",
          href: "/",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          title: "Blog",
          href: "/",
        },
        {
          title: "Events & Webinars",
          href: "/",
        },
        {
          title: "Partnerships",
          href: "/",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          title: "About Us",
          href: "/",
        },
        {
          title: "Press",
          href: "/",
        },
        {
          title: "Careers",
          href: "/",
        },
      ],
    },
    {
      title: "Help & Support",
      links: [
        {
          title: "Support",
          href: "/",
        },
        {
          title: "Sales",
          href: "/",
        },
        {
          title: "Security",
          href: "/",
        },
        {
          title: "Legal",
          href: "/",
        },
        {
          title: "Open Source",
          href: "/",
        },
        {
          title: "Changelog",
          href: "/",
        },
      ],
    },
    {
      title: "Learn",
      links: [
        {
          title: "SSH Keys",
          href: "/",
        },
        {
          title: "Docker SSH",
          href: "/",
        },
        {
          title: "DevSecOps",
          href: "/",
        },
        {
          title: "Multicloud",
          href: "/",
        },
        {
          title: "NAT Traversal",
          href: "/",
        },
        {
          title: "MagicDNS",
          href: "/",
        },
        {
          title: "PAM",
          href: "/",
        },
        {
          title: "All Articles",
          href: "/",
        },
      ],
    },
  ];

  const moreLinks = [
    {
      title: "Terms of Service",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
    {
      title: "California Notice",
      href: "/",
    },
    {
      title: "Cookie Notice",
      href: "/",
    },
    {
      title: "Your Privacy Choices",
      href: "/",
    },
  ];

  const socials = [
    {
      icon: "/in.svg",
      href: "/",
    },
    {
      icon: "/x.svg",
      href: "/",
    },
    {
      icon: "/mail.svg",
      href: "/",
    },
  ];

  return (
    <footer className="bg-gray-800 pt-12 px-5 lg:pt-[7.5rem] pb-16">
      <div className="max-w-[69rem] mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-[5rem]">
          {footerLinks.map((footerLink, index) => (
            <div key={index}>
              <h4 className="text-white text-lg font-medium mb-6">
                {footerLink.title}
              </h4>
              <ul className="space-y-3">
                {footerLink.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-100 hover:text-gray-200 transition-colors duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 border-t border-gray-600 pt-14 flex flex-col lg:flex-row gap-6 items-center lg:items-start justify-between">
          <Image src="/logo-white.svg" alt="" className="w-[14.625rem] h-7" />
          <ul className="flex flex-col items-center lg:items-start gap-6">
            {moreLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-gray-100 hover:text-gray-200 transition-colors duration-300"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            {socials.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="w-7 h-7 bg-white flex items-center justify-center rounded-full"
              >
                <Image
                  src={item.icon}
                  alt=""
                  className="w-3 h-3"
                />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-gray-100 mt-20 text-center lg:text-left">
          &copy; {new Date().getFullYear()} Wethtechnologies Inc All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
