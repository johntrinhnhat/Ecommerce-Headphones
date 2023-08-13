import HeroBanner from "@/components/HeroBanner";
import React from "react";
import { getProduct, getBanner } from "@/sanity-headphone/sanity.utils";
import Product from "@/components/Product";

const Home = async () => {
  const bannerData = await getBanner();
  const productData = await getProduct();
  return (
    <>
      <main className="main-container">
        <HeroBanner herobanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
        </div>
        <div className="products-container">
          {productData?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
