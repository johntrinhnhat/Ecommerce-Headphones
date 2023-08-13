import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { getBanner } from "@/sanity-headphone/sanity.utils";

const Home = async () => {
  const bannerData = await getBanner();
  console.log(bannerData);
  return (
    <>
      <HeroBanner herobanner={bannerData.length && bannerData[0]} />
    </>
  );
};

export default Home;
