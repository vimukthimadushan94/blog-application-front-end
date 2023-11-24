import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CategoryList from "../components/category/CategoryList";

export default function App() {


    return (
        <>
            <Header/>
            <CategoryList/>
                <Outlet />
            <Footer/>
        </>
    );
}


