import Link from "next/link";
import Image from "../common/image";
import { cn } from "@/lib/utils";

const HomeService = () => {
  const services = [
    {
      title: "Tax Compliance",
      description: "Compliance for every tax situaiton",
      icon: "/tax-compliance.svg",
    },
    {
      title: "E-Invoicing",
      description: "Electronic invoicing and invoice management.",
      icon: "/e-invoicing.svg",
    },
    {
      title: "Payments",
      description: "Payment processing and management.",
      icon: "/payments.svg",
    },
  ];

  return (
    <section className="py-16 lg:py-32 mx-auto max-w-[58rem] px-2.5">
      <div className="text-center mb-10 max-w-[23.4rem] lg:max-w-full mx-auto">
        <h4 className="text-gray-900 text-3xl lg:text-[2.75rem] mb-7 lg:mb-4">
          Holistic platform for all finance management
        </h4>
        <p className="font-gray-700 lg:text-lg">
          From vertical SaaS to payments platforms, wethtechnologies provides
          smart solutions for individuals and businesses. Solutions that cut
          across tax, e-invoice and payments.
        </p>
      </div>
      <div className="w-full overflow-hidden overflow-x-auto">
        <div className="grid grid-cols-3 gap-6 min-w-[54rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col py-8 px-6 rounded-xl",
                index === 1 ? "bg-gray-700 text-white" : "bg-gray-100"
              )}
            >
              <div className="size-16 p-3 bg-gray-800 rounded-lg">
                <Image
                  src={service.icon}
                  alt={service.title}
                  className="size-full"
                />
              </div>
              <h4
                className={cn(
                  "text-xl font-medium mt-4 mb-2",
                  index === 1 ? "text-white" : "text-gray-900"
                )}
              >
                {service.title}
              </h4>
              <p
                className={cn(
                  "font-gray-600 mb-7",
                  index === 1 ? "text-gray-100" : "text-gray-600"
                )}
              >
                {service.description}
              </p>
              <Link href="/">Know more</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
