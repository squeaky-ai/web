import axios from 'axios';

export async function createUser(email: string, password: string) {
  const { data } = await axios.post('http://localhost:4000/api/test/user', {}, {
    params: {
      email,
      password,
    }
  });

  return data;
}

export async function deleteUser(email: string): Promise<void> {
  await axios.delete('http://localhost:4000/api/test/user', {
    params: {
      email,
    }
  });
}

export function randomId() {
  return Math.random().toString(36).slice(2);
}
