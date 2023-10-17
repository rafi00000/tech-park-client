import { Outlet } from "react-router-dom";
import Navbar from './../../Components/Navbar';

const RootPage = () => {

    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootPage;