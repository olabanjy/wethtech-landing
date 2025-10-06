import React from "react";
import NextImage from "next/image";
import { cn } from "@/lib/utils";

const Image = ({ src, alt, className }) => {
  return (
    <div className={cn("relative", className)}>
      <NextImage src={src} alt={alt} fill />
    </div>
  );
};

export default Image;
