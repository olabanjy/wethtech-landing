import { cn } from "@/lib/utils";
import React from "react";
import Image from "../common/image";
import Link from "next/link";

const FileTax = () => {
  const tax = [
    {
      title: "Smartest way to file & pay taxes online",
      description:
        "Whether you are a company, individual, consultant, institution - wethtechnologies offers hassle-free tax compliance solution for all tax situations.",
      icon: "/man-lady.png",
    },
    {
      title: "Embed invoice financing with just a few lines of code",
      description:
        "Acquire and retain high-value suppliers with embedded invoice financing. We offer instant payment loans for every payable invoice, finance up to 100%, handle collection and take on all risks.",
      icon: "/e-invoice.png",
    },
  ];
  return (
    <section className="py-16 px-5 lg:pt-[8.434rem] lg:pb-[7.625rem] flex flex-col gap-9 lg:gap-36">
      {tax.map((item, index) => (
        <div
          className={cn(
            "max-w-[65rem] mx-auto flex w-full gap-10 lg:gap-12 items-center flex-col",
            index % 2 !== 0 ? "md:flex-row" : "md:flex-row-reverse"
          )}
          key={index}
        >
          <Image
            src={item.icon}
            alt={item.title}
            className="w-full h-[19.75rem] lg:h-[29rem]"
          />
          <div className="max-w-[26.375rem] w-full flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-3xl lg:text-4xl font-medium mb-6 text-gray-900">
              {item.title}
            </h4>
            <p className="text-gray-600 lg:text-lg mb-5 lg:mb-6">{item.description}</p>
            <Link href="/" className="text-green-700 flex items-center gap-3">
              <span className="flex items-center justify-center size-5 rounded-full bg-green-700 text-white leading-0">
                &gt;
              </span>
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FileTax;
