"use client";
import React from "react";
import { useState } from "react";
import { urlFor } from "@/sanity-headphone/sanity.client";

import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";

const ProductDetails = ({ image, name, details, price, _id }) => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="image-container">
        <img
          src={urlFor(image && image[index]).url()}
          className="product-detail-image"
        />
        <div className="small-images-container mt-8">
          {image.map((item, i) => (
            <img
              key={i}
              src={urlFor(item)}
              className={
                i === index ? "small-image selected-image" : "small-image"
              }
              onMouseEnter={() => setIndex(i)}
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
            <span className="minus">
              <AiOutlineMinus />
            </span>
            <span className="num">0</span>
            <span className="plus">
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart">
            Add to Cart
          </button>
          <button type="button" className="buy-now">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
