import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "",
  dataset: "production",
  apiVersion: "2023-12-29",
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export async function getRestaurants() {
  const restaurants = await client.fetch(`
    *[_type == 'restaurant' ]  {
        ...
      } 
    `);
  return restaurants;
}

export async function getFeatured() {
  const featuredRow = await client.fetch(
    `
        *[_type == 'featured' ]  {
            ...,
          restaurant[]->{
             ...,
             dishes[]->
          }  
          } 
        `
  );
  return featuredRow;
}
