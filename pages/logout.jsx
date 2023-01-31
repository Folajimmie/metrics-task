import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { clearToken, clearUser } from '../config/axios';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    clearUser();
    clearToken();
    router.push('/');
  });

  return <div>Logging out...</div>;
};

export default Logout;