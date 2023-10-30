import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../blogProvider/BlogProvider";
import { baseUrlImg } from "../../APIConfig";

const BlogPost = () => {
    const { blogId } = useParams();
    const { findBlogById } = useBlogContext();
    const [blog, setBlog] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setBlog(await findBlogById(blogId));
        }
        fetchData();
    }, [blogId]);

    return (
        <section className="container-fluid">
            <div className="row mt-5">
                <div className="col-5">
                    <div className="justify-content-between">
                        <img src={`${baseUrlImg}${blog?.img}`} style={{ width: 200, height: 200, objectFit: "cover" }} className=" img-fluid" />
                    </div>
                    <div className="row">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">ID: {blog?.id}</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <h1>{`${blog?.title}`}</h1>
                    <p>{blog?.description}</p>
                </div>
            </div>
        </section>
    );
};
export default BlogPost;