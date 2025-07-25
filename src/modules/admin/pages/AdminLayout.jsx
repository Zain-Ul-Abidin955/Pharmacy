import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/SideBar";


export const AdminLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <SideBar />
        </>
    );

};