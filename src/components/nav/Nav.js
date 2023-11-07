
import { Link } from "react-router-dom";
import { useState } from "react";
import { useUserContext } from "../../blogProvider/UserProvider";
import Lia from "../img/Lia_Signature.png";

const Nav = () => {

    const { user, handleLogout } = useUserContext();

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link to="/personligblog" className="navbar-brand" >
                    <img className="img-fluid" src={Lia}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#blog-nav" aria-controls="bibliotek-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-right " id="blog-nav">
                    <div className="navbar-nav me-auto">
                        <Link to="/personligblog" className="nav-link active" aria-current="page" >Home</Link>
                        <Link to="/about" className="nav-link">About</Link>
                        <Link to="/addBlog" className="nav-link">Add Blog</Link>
                        {
                            user === undefined ?
                                <div className="">
                                    <Link className="text-decoration-underline btn" to="/login">Login</Link>
                                </div>
                                :
                                <div className="mt-2">
                                    <Link className="text-decoration-underline" to="/login" onClick={handleLogout}>Logout</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;