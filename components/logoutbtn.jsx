import Link from 'next/link';
import { useRouter } from 'next/router';
import { Children, useMemo } from 'react';
import Image from 'next/image'
import Logout from '../assets/SignOut.svg';

export const LogoutButton = ({ Icon, compTitle, linkPage }) => {
  const router = useRouter();
  return (
    <Link href={linkPage}>
      <div
        className={`flex justify-center w-[120px] h-[40px] p-[2px] gap-[10px] border-none rounded-md hover:bg-white cursor-pointer relative ${
          router.pathname === linkPage ? 'bg-white' : 'bg-yellowText'
        }
        `}>
        <Image src={Logout}  alt='logout button'/>
        <p className='text-center font-semibold mt-[7px]'>LOGOUT</p>
      </div>
    </Link>
  );
};