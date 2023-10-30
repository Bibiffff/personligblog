
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../blogProvider/UserProvider";


const Nav = () => {

    const { user } = useUserContext();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/" className="navbar-brand" >Blog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#blog-nav" aria-controls="bibliotek-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="blog-nav">
                    <div className="navbar-nav me-auto">
                        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                        <Link to="/" className="nav-link">Hej</Link>
                        {
                            user === undefined ?
                                <div className="">
                                    <Link className="text-decoration-underline btn" to="/login">Login</Link>
                                </div>
                                :
                                <div className="">
                                    <Link className="text-decoration-underline" to="/login">Logout</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;