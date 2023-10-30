import { useState } from "react";
import { useBlogContext } from "../../blogProvider/BlogProvider";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { baseUrlImg } from "../../APIConfig";
import ConfirmationModal from "../modal/onfirmationModal";

const Home = () => {
    const { blogs, removeBlog } = useBlogContext();
    const [blogId, setBlogId] = useState();

    const handleDeleteItemSelected = (event) => {
        const blogId = event.target.dataset.blogId;
        setBlogId(blogId);
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
            <hr />
            <div className="row g-2 mt-3">
                {
                    blogs?.map(b => (
                        <div className="col-sm-6 col-md-4 col-lg-2">
                            <div className="card w-100" key={b.id}>
                                <img className="card-img-top img-fluid" src={`${baseUrlImg}${b.img}`} style={{ width: 200, height: 200, objectFit: "cover" }} alt="Card " />
                                <div className="card-body">
                                    <h5 className="card-title">{b.title}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{b.description}</li>
                                </ul>
                                <div className="card-body">
                                    <div className="row ">
                                        <div className="col-6">
                                            <Link className="btn btn-warning" to={`/personligblog/edit/${b.id}`}><AiFillEdit /> </Link>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn btn-danger" data-book-id={b.id} onClick={handleDeleteItemSelected}><AiFillDelete /></button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <Link className="btn btn-outline-primary" to={`/personligblog/blogpost/${b.id}`}>Read more</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <ConfirmationModal title="Delete Blog Post" message={`Are you sure you wish to delete the Blog with id: ${blogId}`} onConfirm={handleDeleteItem} />
        </section>
    );
};

export default Home;