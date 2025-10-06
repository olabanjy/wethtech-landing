import React from "react";
import Image from "../common/image";
import Link from "next/link";

const ManagePayments = () => {
  const payments = [
    {
      title: "Marketplaces",
      description: "Orchestrate money movement between buyers and suppliers.",
      icon: "/payment-summary.png",
    },
    {
      title: "SaaS Platforms",
      description:
        "Take your product to the next level with instant payment features.",
      icon: "/finance.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-[46.625rem] mx-auto mb-10">
        <div className="text-center mx-auto max-w-[41.5rem]">
          <h4 className="text-4xl font-mediumm mb-4">
            Manage payments effortlessly
          </h4>
          <p className="text-gray-600 text-lg">
            Wethtechnologies is a purpose-built finance management platform -
            bringing customer-like speed, choice and convenience to the world of
            business.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10">
          {payments.map((payment, index) => (
            <div key={index}>
              <Image
                src={payment.icon}
                alt={payment.title}
                className="h-[18.75rem]"
              />
              <h4 className="mt-8 text-xl mb-3 font-medium text-gray-900">
                {payment.title}
              </h4>
              <p className="text-gray-600 max-w-[18rem] mb-7">
                {payment.description}
              </p>
              <Link href="/" className="text-green-700 flex items-center gap-3">
                <span className="flex items-center justify-center size-5 rounded-full bg-green-700 text-white leading-0">
                  &gt;
                </span>
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagePayments;
