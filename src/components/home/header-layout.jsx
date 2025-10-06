import React from "react";
import Navbar from "../common/navbar";

const HeaderLayout = ({ children }) => {
  return (
    <header className="bg-[url('/hero-bg.png')] bg-no-repeat bg-[100%] bg-cover">
      <section className="max-w-[80rem] mx-auto">
        <Navbar />
        {children}
      </section>
    </header>
  );
};

export default HeaderLayout;
