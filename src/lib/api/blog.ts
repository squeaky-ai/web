import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const getBlogPosts = async <T>(category?: string): Promise<T> => {
  try {
    const query = `
      {
        blogPosts(category: ${category ? `"${category}"` : 'null'}) {
          categories
          tags
          posts {
            title
            tags
            author {
              name
              image
            }
            category
            draft
            metaImage
            metaDescription
            slug
            createdAt {
              iso8601
            }
            updatedAt {
              iso8601
            }
          }
        }
      }
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return data.data.blogPosts;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const getBlogPost = async <T>(slug: string): Promise<T> => {
  try {
    const query = `
      {
        blogPost(slug: "${slug}") {
          title
          tags
          author {
            name
            image
          }
          category
          draft
          metaImage
          metaDescription
          slug
          body
          scripts
          coveringEnabled
          createdAt {
            iso8601
          }
          updatedAt {
            iso8601
          }
        }
        blogPosts {
          posts {
            id
            slug
            title
            metaImage
            createdAt {
              iso8601
            }
          }
        }
      }
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return data.data;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};
