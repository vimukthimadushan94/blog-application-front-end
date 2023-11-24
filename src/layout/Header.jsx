import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink
                    to="/"
                    className={"navbar-brand"}
                >Blog App</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink to="/blog/create" className="nav-link">
                            <button className="btn btn-primary">Create Blog Post</button>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/create" className="nav-link">
                            <button className="btn btn-primary">Create Category</button>
                        </NavLink>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;