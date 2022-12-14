import Navbar from "./navbar";
import Sidebar from "./sidebar";

const DashboardLayout = ({children}) => {
    return ( 
        <div className="w-full h-full bg-background px-4 md:w-full md:h-full md:px-14 lg:w-full lg:px-14 lg:h-full">
            <Navbar />
            <div className="flex flex-col gap-3 md:flex md:flex-col md:gap-1 lg:flex lg:flex-row lg:gap-5">
                <Sidebar />
                <main className="mt-2 w-full">{children}</main>
            </div>
        </div>
     );
}
 
export default DashboardLayout;