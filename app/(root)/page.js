import HeroBanner from "@/components/HeroBanner";
import React from "react";
import {
  getAvengerHeadphones,
  getBanner,
} from "@/sanity-headphone/sanity.utils";
import Product from "@/components/Product";
import FooterBanner from "@/components/FooterBanner";

const Home = async () => {
  const bannerData = await getBanner();
  const productData = await getAvengerHeadphones();
  console.log(productData);
  return (
    <div>
      <main className="main-container">
        <HeroBanner herobanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
        </div>
        <div className="products-container track">
          {productData?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
        <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
      </main>
    </div>
  );
};

export default Home;
