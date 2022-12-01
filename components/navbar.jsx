import Image from "next/image";
import Logo from "../assets/logo.png";
import Clock from "./clock";
import Calendar from "./date";

const Navbar = () => {
    return ( 
        <div>
            <div className='py-8 flex justify-between items-center w-full md:w-full lg:w-full '>
                <Image src={Logo}  alt='Onlypass Logo'/>
                <div className="flex md:flex md:gap-1 lg:flex lg:gap-4">
                    <Calendar />
                    <Clock />
                </div>
            </div >
        </div>
     );
}
 
export default Navbar;

