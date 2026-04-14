import React from "react";
import { MainBanner } from "../components/Banner/MainBanner";
import { Categories } from "../components/categories/Categories";
import { BestSellers } from "../components/sellers/BestSellers";
import { BottomBanner } from "../components/Banner/BottomBanner";
import { Newsletter } from "../components/newsletter/Newsletter";

export const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSellers />
      <BottomBanner />
      <Newsletter />
    </div>
  );
};
