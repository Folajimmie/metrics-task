// import Image from 'next/image';
import { HiBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import { useState } from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';
import { menuItems } from './sidebarData';

const Sidebar = () => {
    const router = useRouter();

    const [open, setOpen] = useState(false);

    return ( 
        <>
        {/* for mobile screen */}
        <div className={`${open ? "-translate-x-0" : "-translate-x-full"} absolute top-0 left-0 w-screen bg-white p-4 transition-all duration-300 ease-in-out filter`}>
            <div className="flex justify-end">
                <HiOutlineXMark onClick={() => setOpen(!open)} />
            </div>
            <div className="text-center" onClick={() => setOpen(!open)}>
                <ul className='flex flex-col gap-6'>
                    {menuItems.map(({href, title, i}) => (
                        <li key={i} className="flex justify-center w-full">
                            <Link href={href} className={`w-[156px] flex text-grayText hover:text-hover hover:text-whiteText hover:border-r-8 border-yellowText rounded-3xl ${router.pathname == href ? "text-whiteText" : "text-grayText"}`}>
                                <p>{title}</p>  
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* for other screens */}
        <nav>
            <HiBars3BottomRight
                onClick={() => setOpen(!open)}
                className="text-whiteText md:hidden text-3xl"
            />

            <ul className='hidden md:mt-[45px] md:flex md:flex-col md:gap-4'>
            {menuItems.map(({href, title, i}) => (
                <li key={i}>
                    <Link href={href} className={`w-[156px] flex text-grayText hover:text-hover hover:text-whiteText hover:border-r-8 border-yellowText rounded-3xl ${router.pathname == href ? "text-whiteText" : "text-grayText"}`}>
                        {title}  
                    </Link>
                </li>
            ))}
            </ul>
        </nav>
        </>
     );
}
 
export default Sidebar;

// className="hover:text-hover hover:text-whiteText"