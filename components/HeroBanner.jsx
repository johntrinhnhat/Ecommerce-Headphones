import { urlFor } from "@/sanity-headphone/sanity.client";
import Link from "next/link";

const HeroBanner = ({
  herobanner: { image, smallText, midText, largeText1, buttonText, desc },
}) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img
          src={urlFor(image).url()}
          alt="headphones"
          className="hero-banner-image"
        ></img>
      </div>
      <div>
        <Link href="/product/ID">
          <button type="button">{buttonText}</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
