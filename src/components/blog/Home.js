import { useState } from "react";
import { useBlogContext } from "../../blogProvider/BlogProvider";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { baseUrlImg } from "../../APIConfig";
import ConfirmationModal from "../modal/onfirmationModal";

import "./home.scss";

const Home = () => {
    const { blogs, removeBlog } = useBlogContext();
    const [blogId, setBlogId] = useState();

    const handleDeleteItemSelected = (event) => {
        const blogId = event.target.dataset.blogid;
        setBlogId(blogId);
        console.log("id is " + blogId)
        console.log(event.target.dataset.blogid)
        document.getElementById("confirmationModalButton").click();
    }

    const handleDeleteItem = () => {
        const handleDelete = async () => {
            const result = await removeBlog(blogId)
        }
        handleDelete();
    }

    return (
        <section className="container-fluid mt-4">
            <div className="row">
                <div className="hero py-5">
                    <div className="ms-5 whitebox">
                        <h1 className="pt-5 ms-5 mt-5 ">MIN BLOG</h1>
                        <p className="pb-5 ms-5 mb-5">min blog min blog min blog min blog min blog min blog</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row g-2 mt-3">
                {
                    blogs?.map(b => (
                        <div className="col-12">
                            <div className="row" key={b.id}>
                                <div className="col-12 col-lg-3 col-md-3">
                                    <img className="img-fluid imgcenter my-2" src={`${baseUrlImg}${b.img}`} style={{ width: 300 }} alt="Blog pic" />
                                </div>
                                <div className="col-12 col-lg-7 col-md-7">
                                    <h5 className="">{b.title}</h5>

                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{b.description}</li>
                                    </ul>
                                </div>
                                <div className="col-12 col-lg-2 col-md-2">

                                    <div className="row text-center">
                                        <Link className="btn btn-outline-dark" to={`/personligblog/edit/${b.id}`}><AiFillEdit /> </Link>
                                    </div>
                                    <div className="row my-4 text-center">
                                        <button className="btn btn-outline-dark" data-blogid={b.id} onClick={handleDeleteItemSelected}><AiFillDelete /></button>
                                    </div>
                                    <div className="row text-center">
                                        <Link className="btn btn-outline-primary align-content-between" to={`/personligblog/blogpost/${b.id}`}>See more</Link>
                                    </div>

                                </div>

                            </div>
                            <hr />
                        </div>

                    ))
                }
            </div>
            <ConfirmationModal title="Delete Blog Post" message={`Are you sure you wish to delete the Blog with id: ${blogId}`} onConfirm={handleDeleteItem} />
        </section>
    );
};

export default Home;