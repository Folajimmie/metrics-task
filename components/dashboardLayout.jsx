import { LogoutButton } from "./logoutbtn";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const DashboardLayout = ({children}) => {
    return ( 
        <div className="h-screen px-4 md:h-screen md:px-14 lg:px-12 lg:h-screen">
            <Navbar />
            <div className="flex flex-col gap-3 md:flex md:flex-col md:gap-1 lg:flex lg:flex-row lg:gap-5">
                <div className="flex flex-col gap-3">
                    <Sidebar />
                    <LogoutButton linkPage="/logout" />
                </div>
                <main className="mt-1 w-full h-screen">{children}</main>
            </div>
        </div>
     );
}
 
export default DashboardLayout;