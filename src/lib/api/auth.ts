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
    const { data } = await axios.post(`${publicRuntimeConfig.apiHost}/graphql`, { query: getGqlString(USER_QUERY) }, {
      headers: {
        'Accept': 'application/json',
        'Cookie': cookie
      },
      withCredentials: true,
    });

    return data.data.user;
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const signout = async (): Promise<void> => {
  try {
    await axios.delete(`${publicRuntimeConfig.apiHost}/auth/sign_out.json`, {
      withCredentials: true,
    });
  } catch(error: any) {
    console.error(error.code, error.response);
    return null;
  }
};

export const login = async (input: LoginInput): Promise<Response<any>> => {
  try {
    const response = await axios.post(`${publicRuntimeConfig.apiHost}/auth/sign_in.json`, { user: input }, {
      withCredentials: true,
    });
    return { body: response.data };
  } catch(error: any) {
    console.error(error.code, error.response);
    return { error: error.response.data };
  }
};
