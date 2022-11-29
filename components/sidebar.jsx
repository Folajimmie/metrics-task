// import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { menuItems } from './sidebarData';

const Sidebar = () => {
    const router = useRouter();

    return ( 
        <>
        <nav>
            <ul className='mt-[45px] flex flex-col gap-4'>
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