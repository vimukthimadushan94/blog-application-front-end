import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Create from "./blog/Create";

function Home() {
    return (
        <>
            <Header/>
            <Create/>
                <Outlet/>
            <Footer/>
        </>
    );
}

export default Home;