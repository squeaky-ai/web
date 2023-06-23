import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export const getChangelogPosts = async <T>(cookie: string): Promise<T> => {
  try {
    const query = `
      {
        changelogPosts {
          id
          title
          body
          author {
            name
            image
          }
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
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
        'Cookie': cookie || '',
      }
    });

    return data.data.changelogPosts;
  } catch(error: any) {
    console.error(error.code, error.response);
    return [] as T;
  }
};

export const getChangelogPost = async <T>(cookie: string, slug: string): Promise<T> => {
  try {
    const query = `
      {
        changelogPost(slug: "${slug}") {
          id
          title
          author {
            name
            image
          }
          draft
          metaImage
          metaDescription
          slug
          body
          createdAt {
            iso8601
          }
          updatedAt {
            iso8601
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

    return data.data.changelogPost;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};
