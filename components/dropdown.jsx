import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import { menuItems } from './sidebarData';

const Icon = () => {
    return (
      <svg className='text-white fill-current' height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

const Dropdown = ({placeHolder}) => {
  const router = useRouter();

  const [openMenu, setOpenMenu] = useState(false);
  
  useEffect(() => {
    const handler = () => setOpenMenu(false);

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    e.stopPropagation();
    setOpenMenu(!openMenu)
  }
    const getDisplay = () => {
        return placeHolder
    };

  return (
    <div className='text-white text-left relative md:hidden lg:hidden'>
        <div onClick={handleInputClick} className='p-[5px] flex items-center justify-between w-3/4 border border-primary-40 rounded-md'>    
          <div>
            <p className='text-sm font-semibold'>
              {getDisplay ()}
            </p>
          </div>
          <div>
            <Icon />
          </div>
        </div>
        {openMenu ? 
        <div className='bg-background flex flex-col gap-5 p-2 w-3/4 absolute translate-y-[4px] rounded-md border border-primary-80'>
          {menuItems.map(({href, title, i}) => (
            <li key={i} className="flex justify-center w-full">
              <Link href={href} className={`w-[156px] flex gap-[10px] text-white hover:text-hover hover:text-white hover:after:content-[url("../public/dot.svg")] ${router.pathname == href ? "text-whiteText" : "text-grayText"} ${router.pathname == href ? "after:content-[url('../public/dot.svg')]" : ""}`}>
                <p className=''>{title}</p>  
              </Link>
            </li>
          ))}
        </div> : null
  }
    </div>
  )
}

export default Dropdown;