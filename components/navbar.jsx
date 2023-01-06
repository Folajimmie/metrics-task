import Image from "next/image";
import Logo from "../assets/logo.png";
import Clock from "./clock";
import Calendar from "./date";

const Navbar = () => {
    return ( 
        <div>
            <div className='py-8 flex flex-col gap-2 items-center w-full md:w-full md:flex-row md:justify-between lg:w-full lg:flex-row lg:justify-between '>
                <Image src={Logo}  alt='Onlypass Logo'/>
                <div className="flex flex-col-reverse gap-2 md:flex md:flex-row md:gap-1 lg:flex lg:flex-row lg:gap-4">
                    <Calendar />
                    <Clock />
                </div>
            </div >
        </div>
     );
}
 
export default Navbar;

