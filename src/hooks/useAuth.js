import useSWR from 'swr';
import Router from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function useAuth(initialData) {
  const { data: user } = useSWR(
    'http://localhost:3000/api/users',
    async (route) => {
      const token = Cookies.get('token');
      const authRequest = await fetch(route, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      if (authRequest.ok) {
        return authRequest.json();
      } else {
        Cookies.remove('token');
      }
    },
    { initialData }
  );

  return {
    ...user,
  };
}
