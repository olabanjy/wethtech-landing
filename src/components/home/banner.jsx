import React from "react";
import Image from "../common/image";

const HeaderBanner = () => {
  return (
    <section>
      <div className="relative h-fit max-w-[48.6rem] mx-auto w-full">
        <div className="overflow-hidden h-[36rem] rounded-tl-xl rounded-tr-xl">
          <Image src="/cheerful-woman.png" alt="Banner" className="size-full" />
        </div>
        <Image
          src="/invoice-success.png"
          alt="Banner"
          className="absolute top-8 left-0 md:-left-16 w-[13.7rem] h-14"
        />
        <Image
          src="/invoice.png"
          alt="Banner"
          className="absolute bottom-12 right-0 md:-right-24 w-[21.25rem] h-[13rem]"
        />
      </div>
    </section>
  );
};

export default HeaderBanner;
