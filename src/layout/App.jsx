import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {

    const blogs = useLoaderData()

    return (
        <>
            <Header/>
                <Outlet context={[blogs]}/>
            <Footer/>
        </>
    );
}


export default App;

export const loadBlogs = async ()=>{
    const data = await fetch('http://localhost:8080/api/posts')
            .then(res => res.json())
            .then(data=>{
                return data
            });
            console.log('loading blogs')
    return data;
}
