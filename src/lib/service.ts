import { fetchAPI } from "./base";

export async function getPosts(first = 3) {
  const data = await fetchAPI(
    `query FetchPosts($first: Int = 10) {
        posts(first: $first) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
          }
        }
      }`,
    {
      variables: {
        first,
      },
    },
  );

  return data?.posts?.nodes;
}
