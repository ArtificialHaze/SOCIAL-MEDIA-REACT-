import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const REACT_APP_SANITY_PROJECT_ID = "";
const REACT_APP_SANITY_TOKEN = "";

export const client = createClient({
  projectId: REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2023-06-02",
  useCdn: true,
  token: REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
