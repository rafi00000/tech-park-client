import { Outlet } from "react-router-dom";
import Navbar from './../../Components/Navbar';
import Footer from './../../Components/Footer';

const RootPage = () => {

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;