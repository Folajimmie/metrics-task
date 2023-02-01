import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { clearToken, clearUser } from '../config/axios';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    clearUser();
    clearToken();
    router.push('/');
  });

  return <div className='flex flex-col justify-center items-center h-screen'>
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
    <br/>
    <p className='text-white'>Logging out...</p>
    </div>;
 };

export default Logout;