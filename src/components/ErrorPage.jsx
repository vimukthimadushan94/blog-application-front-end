import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage(){
    const error = useRouteError()
    console.log(error)
    return (
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center row">
                <div className=" col-md-6">
                    <img src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg" alt=""
                        className="img-fluid"/>
                </div>
                <div className=" col-md-6 mt-5">
                    <p className="fs-3"> <span class="text-danger">Opps!</span></p>
                    <p className="lead">
                        {error.statusText || error.message}
                    </p>
                    <Link to={"/"} className="btn btn-primary">Go Home</Link>
                </div>

            </div>
        </div>
    );
}