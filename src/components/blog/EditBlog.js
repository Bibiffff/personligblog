import { useNavigate, useParams } from "react-router-dom";
import { useBlogContext } from "../../blogProvider/BlogProvider";
import { useEffect, useState } from "react";

const EditBlog = () => {
    const { blogId } = useParams();
    const { findBlogById, editBlog } = useBlogContext();
    const navigate = useNavigate();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchData = async() => {
            setBlog(await findBlogById(blogId));
        }
        fetchData();
    }, []);

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setBlog(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const formSubmit = async() => {
            const result = await editBlog(blogId, blog);
            if ( result == 204){
                document.getElementById("editModalutton").click();
            }
        }
        formSubmit();
    }

    const handleInfoModalConfirm = () => {
        navigate("/");
    }

    return (
        <>
            <section className="container-fluid">
                <div className="row">
                    <div className="col">
                        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" name="title" defaultValue={blog?.title} required />
                                <div id="titleHelp" className="form-text">
                                    the Title of the event
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    name="description"
                                    rows={6}
                                    defaultValue={blog?.description}
                                    required
                                ></textarea>
                                <div id="descriptionHelp" className="form-text">
                                    the description of the event
                                </div>
                            </div>
                            <button type="submit" className="btn btn-outline-primary">Save</button>
                        </form>
                    </div>
                </div>
            </section>
            {/* <EditModal title="blog Edited" message={`The blog ${blog?.title} has been edited.`} onConfirm={handleInfoModalConfirm}/> */}
        </>
    );
};

export default EditBlog;