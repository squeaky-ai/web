import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const getBlogPosts = async <T>(cookie: string, category: string | null, tags: string[]): Promise<T> => {
  try {
    const query = `
      {
        blogPosts(
          category: ${category ? `"${category}"` : 'null'},
          tags: [${tags.map(tag => `"${tag}"`).join(', ') || ''}]
        ) {
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
            createdAt
            updatedAt
          }
        }
      }
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
        'Cookie': cookie || '',
      }
    });

    return data.data.blogPosts;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const getBlogPost = async <T>(cookie: string, slug: string): Promise<T> => {
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
          createdAt
          updatedAt
        }
        blogPosts {
          posts {
            id
            slug
            title
            metaImage
            createdAt
          }
        }
      }
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
        'Cookie': cookie || '',
      }
    });

    return data.data;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};
