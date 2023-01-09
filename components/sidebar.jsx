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
                <Dropdown placeHolder='Select Country'/>
            </div>
        </div>

        {/* for other screens */}
        <nav>
            <ul className='hidden lg:mt-[45px] lg:flex lg:flex-col lg:gap-4'>
            {menuItems.map(({href, title, i}) => (
                <li key={i}>
                    <Link href={href} className={`w-[156px] flex gap-[10px] text-white hover:text-hover hover:text-whiteText hover:after:content-[url("../public/dot.svg")] ${router.pathname == href ? "text-whiteText" : "text-grayText"} ${router.pathname == href ? "after:content-[url('../public/dot.svg')]" : ""}`}>
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