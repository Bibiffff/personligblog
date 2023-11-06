import { useState } from "react";
import { useBlogContext } from "../../blogProvider/BlogProvider";

const AddBlog = () => {
    const { addBlog } = useBlogContext();
    const [blog, setBlog] = useState({ Title: undefined, Description: undefined, img: null, file: null});
    const [ postResult, setPostResult] = useState();

    const handleFormChange = (event) => {
        const name = event.target.name;
        const value = event.target.name === "file" ? event.target.files[0] : event.target.value;

        setBlog(prevValue => ({
            ...prevValue,
            [name]: value
        }));
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const handleSubmit = async () => {
            const result = await addBlog(blog);
            console.log(result)
            setPostResult(result);
            event.target.reset();
        }
        handleSubmit();
    }

    return (
        <>
            <section className="container-fluid">
                <div className="justify-content-center">
                    <div className="">
                        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label mb-0 ">Title</label>
                                <div id="titleHelp" className="form-text mb-3 mt-0">Title of the event</div>
                                <input type="text" className="form-control" id="title" name="Title" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label mb-0">description</label>
                                <div id="descriptionHelp" className="form-text mb-3 mt-0">The description of the event</div>
                                <textarea className="form-control" id="description" name="Description" rows={6} required ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="img" className="form-label mb-0">Image</label>
                                <div id="img" className="form-text mb-3 mt-0">Image of the event</div>
                                <input type="file" className="form-control" accept="img/*" id="img" name="file" />
                            </div>
                            <button type="submit" className="btn btn-outline-primary align-items-end">Save</button>
                        </form>
                    </div>
                </div>
            </section>
            </>
    );
};

export default AddBlog;