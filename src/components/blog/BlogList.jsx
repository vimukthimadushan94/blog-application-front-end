import { useOutletContext } from "react-router-dom";

function BlogList() {

    const [blogs] = useOutletContext()

    return (
        <>
            <div className="container" >
                <div className="row">
                    {blogs.map((item,index)=>(
                    <div id={index} className="card" style={{width: '18rem',margin: '1%'}}>
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

export default BlogList

