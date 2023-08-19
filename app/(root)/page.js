import React from "react";
import { HeroBanner, FooterBanner, Product } from "@/components/index";
import { client } from "@/sanity-headphone/sanity.client";

const Home = async () => {
  const bannerData = await client.fetch(`*[ _type == 'banner']`);
  const productData = await client.fetch(
    `*[ _type == 'product' && details == "The best avenger beats on the market"]`
  );
  console.log(bannerData);
  return (
    <div className="product-detail-container">
      <main className="main-container">
        <HeroBanner herobanner={bannerData.length && bannerData[0]} />
        <div className="products-heading">
          <h2>Best Selling Products</h2>
        </div>
        {/* <div className="products-container track">
          {productData?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div> */}
        <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
      </main>
    </div>
  );
};

export default Home;
