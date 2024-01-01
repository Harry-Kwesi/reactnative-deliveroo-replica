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

export async function getFeaturedRestaurant() {
  const restaurants = await client.fetch(`
    *[_type == 'featured' ]  {
        ...
      } 
    `);
  return restaurants;
}

export async function getFeatured(id) {
  try {
    let myId = "eb8fea5e-2190-47d9-ab1d-dec21d0bbd98";
    const featuredRow = await client.fetch(
      `
      *[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type -> {
            name
          }
        }
      }[0]`,
      { id: id }
    );
    return featuredRow;
  } catch (error) {
    console.error("Error in getFeatured:", error);
    throw error;
  }
}
