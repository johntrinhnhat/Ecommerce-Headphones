"use client";

import { client, urlFor } from "@/sanity-headphone/sanity.client";
import React from "react";
import { Product } from "@/components";
import { getHeadphones } from "@/sanity-headphone/sanity.utils";
import { useState } from "react";

import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductDetails = async ({ params: { slug } }) => {
  const [index, setIndex] = useState(0);

  function onMouseEnter(i) {
    setIndex(i);
  }
  const getProductSlug = async () => {
    return client.fetch(
      `*[ _type == 'product' && slug.current == '${slug}'][0]`
    );
  };
  const productSlug = await getProductSlug();
  const { name, image, details, price } = productSlug;
  const productData = await getHeadphones();
  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <img
            src={urlFor(image && image[index]).url()}
            className="product-detail-image"
          />
          <div className="small-images-container mt-8">
            {image.map((item, i) => (
              <img
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={onMouseEnter}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick="">
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                0
              </span>
              <span className="plus" onClick="">
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart" onClick="">
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick="">
              Buy Now
            </button>
          </div>
        </div>
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

export default ProductDetails;
