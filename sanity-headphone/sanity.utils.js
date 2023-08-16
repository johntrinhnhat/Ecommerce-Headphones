import {groq} from 'next-sanity'
import {client} from './sanity.client'

export async function getBanner() {
  return client.fetch(groq`*[ _type == 'banner']{
    'image': image.asset->url,
    buttonText,
    product, 
    desc,
    smallText,
    midText,
    largeText1,
    largeText2,
    discount,
    saleTime,
  }`)
}

export async function getAiHeadphones() {
  return client.fetch(groq`*[ _type == 'product' && details == "AI Beats on the market"]{
    'image': image[].asset->url,
    name,
    'slug': slug.current, 
    price,
    details,
  }`)
}

export async function getHeadphones() {
  return client.fetch(groq`*[ _type == 'product']{
    'image': image[].asset->url,
    name,
    'slug': slug.current, 
    price,
    details,
  }`)
}

export async function getProductSlug() {
  return client.fetch(groq`*[ _type == 'product' && details == "AI Beats on the market"]{
    'slug': slug.current, 
  }`)
}
