import Link from 'next/link';
import {useRouter} from 'next/router';
import { menuItems } from './sidebarData';
import Dropdown from "./dropdown";

const Sidebar = () => {
    const router = useRouter();

    return ( 
        <>
        {/* for mobile screen */}
        <div>
            <div>
                <Dropdown placeHolder='Select Country...'/>
            </div>
        </div>

        {/* for other screens */}
        <nav>
            <ul className='hidden md:mt-[45px] md:flex md:flex-col md:gap-4'>
            {menuItems.map(({href, title, i}) => (
                <li key={i}>
                    <Link href={href} className={`w-[156px] flex text-white hover:text-hover hover:text-whiteText   hover:border-r-8 border-yellowText rounded-3xl ${router.pathname == href ? "text-whiteText" : "text-grayText"}`}>
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