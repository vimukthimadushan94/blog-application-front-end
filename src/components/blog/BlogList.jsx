import { useLoaderData } from "react-router-dom";

export default function BlogList() {

    const blogs = useLoaderData()


    return (
        <>
            <div className="container" >
                <div className="row">
                    {blogs.map((item,index)=>(
                    <div key={index} className="card" style={{width: '18rem',margin: '1%'}}>
                        <img src="" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <button className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>  
        </>
    );
}


export async function loadBlogs({request}){

    const data = await fetch('http://localhost:8080/api/posts')
            .then(res => res.json())
            .then(data=>{
                return data
            });
            console.log('loading blogs')
            console.log(data)
    return data;
}

