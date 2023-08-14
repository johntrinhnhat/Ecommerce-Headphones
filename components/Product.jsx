import { urlFor } from "@/sanity-headphone/sanity.client";
import Link from "next/link";
import React from "react";

const Product = ({ product: { image, name, price, slug } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])
              .width(250)
              .height(250)
              .url()}
            className="product-image"
          />
        </div>
        <p className="product-name">{name}</p>
        <p className="product-price">${price}</p>
      </Link>
    </>
  );
};

export default Product;
