import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

const Image = ({ src, alt, className, imgClassName }) => {
  return (
    <div className={cn("relative", className)}>
      <NextImage
        src={src}
        alt={alt}
        fill
        className={cn("object-cover lg:object-none", imgClassName)}
      />
    </div>
  );
};

export default Image;
