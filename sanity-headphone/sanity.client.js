import {createClient} from 'next-sanity'

import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'tdf3mj40',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
