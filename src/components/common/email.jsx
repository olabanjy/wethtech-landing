import { cn } from "@/lib/utils";
import React from "react";

const Email = () => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <div
      className={cn(
        "h-16 p-2 border border-gray-200 rounded-2xl flex items-center justify-between transition-all duration-300 ease-in-out",
        { "border-gray-900": isFocused }
      )}
    >
      <input
        type="email"
        placeholder="Email"
        className="w-full p-4 border-none outline-none h-full"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <button className="px-4 border-none h-full bg-gray-900 text-white max-w-[8.315rem] rounded-lg cursor-pointer">
        Get&nbsp;Started
      </button>
    </div>
  );
};

export default Email;
