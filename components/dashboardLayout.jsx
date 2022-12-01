import Navbar from "./navbar";
import Sidebar from "./sidebar";
// import Topbar from "./Bars/topbar";

const DashboardLayout = ({children}) => {
    return ( 
        <div className="w-full h-full bg-background px-4 md:w-full md:h-full md:px-14 lg:w-full lg:px-14 lg:h-full">
            <Navbar />
            <div className="flex justify-around flex-row md:flex md:gap-5 lg:flex lg:gap-5">
                <Sidebar />
                <main className="mt-2">{children}</main>
            </div>
        </div>
     );
}
 
export default DashboardLayout;