import axios from 'axios';
import getConfig from 'next/config';
import { USER_QUERY } from 'data/users/queries';
import { getGqlString } from 'lib/api/graphql';

type LoginInput = {
  email: string;
  password: string;
}

interface Response<T> {
  body?: T,
  error?: any;
}

const { publicRuntimeConfig } = getConfig();

export const session = async <T>(cookie: string): Promise<T> => {
  try {
    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query: getGqlString(USER_QUERY) }, {
      headers: {
        'Accept': 'application/json',
        'Cookie': cookie
      }
    });

    return data.data.user;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const signout = async (): Promise<void> => {
  try {
    await axios.delete('/api/auth/sign_out.json');
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const login = async (input: LoginInput): Promise<Response<any>> => {
  try {
    const response = await axios.post('/api/auth/sign_in.json', { user: input });
    return { body: response.data };
  } catch(error: any) {
    console.error(error.code, error.response);
    return { error: error.response.data };
  }
};

export const getPartnerName = async <T>(slug: string): Promise<T> => {
  try {
    const query = `
      query GetPartner {
        partner(slug: "${slug}")
      }
    `;

    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/api/graphql`, { query }, {
      headers: {
        'Accept': 'application/json',
      }
    });

    return data.data.partner;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};
