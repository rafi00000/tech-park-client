import { Outlet } from "react-router-dom";
import Navbar from './../../Components/Navbar';
import Footer from './../../Components/Footer';

const RootPage = () => {

    return (
        <div className="container mx-auto p-5" id="toggler">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;