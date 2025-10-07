import React from "react";
import Email from "../common/email";
import HeaderBanner from "./banner";
import HeaderLayout from "./header-layout";

const HomeHeader = () => {
  return (
    <HeaderLayout>
      <section className="px-6 pt-14 lg:pt-[4.7rem]">
        <h3 className="max-w-[50.56rem] mx-auto mb-5 font-semibold text-4xl lg:text-[3.25rem] leading-10 lg:leading-16 text-center text-gray-800">
          Scale your business with <br className="md:block hidden" /> smart
          finance & tax compliance technologies
        </h3>
        <p className="max-w-[26rem] mx-auto text-center text-gray-600 mb-4 lg:mb-16">
          Stay ahead of your finance management with smart and intuitive
          e-invoicing, payment and tax compliance infrastructure
        </p>
        <div className="max-w-[26rem] mx-auto mb-14 lg:mb-16">
          <Email />
        </div>
        <HeaderBanner />
      </section>
    </HeaderLayout>
  );
};

export default HomeHeader;
