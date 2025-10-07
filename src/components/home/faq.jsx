import { cn } from "@/lib/utils";
import React from "react";

const FAQ = () => {
  const [active, setActive] = React.useState(null);

  const faqs = [
    {
      question: "Is Wethtechnologies only for large corporations?",
      answer:
        "Wethtechnologies is a purpose-built finance management platform - bringing customer-like speed, choice and convenience to the world of business.",
    },
    {
      question: "Can I have all my payment integrations on Wethtechnologies?",
      answer:
        "Wethtechnologies is a purpose-built finance management platform - bringing customer-like speed, choice and convenience to the world of business.",
    },
    {
      question: "How does payment work on Wethtechnologies?",
      answer:
        "Wethtechnologies is a purpose-built finance management platform - bringing customer-like speed, choice and convenience to the world of business.",
    },
    {
      question:
        "Do I have to Purchase Every Product in the Wethtechnologies Ecosystem?",
      answer:
        "Wethtechnologies is a purpose-built finance management platform - bringing customer-like speed, choice and convenience to the world of business.",
    },
  ];

  return (
    <section className="py-16 px-8 lg:py-[7.625rem] bg-gray-100">
      <div className="text-center mb-14">
        <p className="mb-4 text-sm lg:text-base">Frequently Asked Questions</p>
        <h4 className="text-2xl lg:text-3xl max-w-[27.5rem] mx-auto">
          No beer without its owner, <br className="hidden md:block" /> no
          question without an answer
        </h4>
      </div>
      <div className="max-w-[51.625rem] mx-auto">
        <div className="grid grid-cols-1 gap-6">
          {faqs.map((faq, index) => (
            <div key={index} className={cn("pb-4 lg:pb-6 border-gray-600", { "border-b": index !== faqs.length - 1 })}>
              <div
                onClick={() => setActive(active === index ? null : index)}
                className="flex items-center justify-between cursor-pointer"
              >
                <h4 className="lg:text-lg mb-2">{faq.question}</h4>
                <span className="rotate-180">^</span>
              </div>
              {active === index && (
                <p className="text-gray-600 mt-6">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
