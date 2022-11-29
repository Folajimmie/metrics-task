import Image from "next/image";
import Logo from "../assets/logo.png";
import Clock from "./clock";
import Calendar from "./date";
import Sidebar from "./sidebar";
// import Topbar from "./Bars/topbar";

const DashboardLayout = ({children}) => {
    return ( 
        <div className='w-full bg-background h-full px-14'>
            <div className='py-8 flex justify-between items-center '>
            <Image src={Logo}  alt='Onlypass Logo'/>
            <div className="flex gap-4">
                <Calendar />
                <Clock />
            </div>
        </div >
        <div className="flex gap-5">
            <Sidebar />
            <main className="mt-2">{children}</main>
        </div>
        </div>
     );
}
 
export default DashboardLayout;