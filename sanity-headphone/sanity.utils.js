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

export async function getProduct() {
  return client.fetch(groq`*[ _type == 'product']{
    'image': image[].asset->url,
    name,
    'slug': slug.current, 
    price,
    details,
  }`)
}
