import { client, urlFor } from "@/sanity-headphone/sanity.client";
import React from "react";
import { Product } from "@/components";
import { getHeadphones, getData } from "@/sanity-headphone/sanity.utils";
import ProductDetails from "@/components/ProductDetails";

const Page = async ({ params: { slug } }) => {
  const productData = await getHeadphones();
  const productSlug = await getData(slug);
  const { name, image, details, price, _id } = productSlug;
  console.log(productSlug);
  // async function getData() {
  //   const data = await client.fetch(
  //     `*[ _type == 'product' && slug.current == '${slug}'][0]`
  //   );
  //   return data;
  // }
  // const productSlug = await getData();
  // const { name, image, details, price, _id } = productSlug;

  return (
    <div>
      <div className="product-detail-container">
        <ProductDetails
          id={_id}
          name={name}
          image={image}
          details={details}
          price={price}
        />
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {productData?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
