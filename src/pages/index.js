import Page from "@/components/home/header-layout";
import HomeHeader from "@/components/home/header";
import HomeService from "@/components/home/service";
import React from "react";
import ManagePayments from "@/components/home/manage-payments";
import FileTax from "@/components/home/file-tax";
import FAQ from "@/components/home/faq";
import Footer from "@/components/common/footer";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      <HomeService />
      <ManagePayments />
      <FileTax />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Home;
