import Page from "@/components/home/header-layout";
import HomeHeader from "@/components/home/header";
import HomeService from "@/components/home/service";
import React from "react";
import ManagePayments from "@/components/home/manage-payments";

const Home = () => {
  return (
    <main>
      <HomeHeader />
      <HomeService />
      <ManagePayments />
    </main>
  );
};

export default Home;
