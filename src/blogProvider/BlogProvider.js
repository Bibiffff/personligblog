import { createContext, useState, useEffect, useContext } from "react";
import { baseUrl } from "../APIConfig";
const BlogContext = createContext();

export const useBlogContext = () => {
    const context = useContext(BlogContext);
    return context;
};

//GET
const getBlogs = async () => {
    const result = await fetch(`${baseUrl}/Blog`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });
    return await result.json();
}

//GET (id)
const getBlogById = async (id) => {
    const result = await fetch(`${baseUrl}/Blog/${id}`, {
        method: "GET",
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    });
    return await result.json();
}

//POST
const postBlog = async (blog) => {

    const form = new FormData();
    for (const [key, value] of Object.entries(blog)) {
        form.append(key, value);
    }

    const result = await fetch(`${baseUrl}/Blog`, {
        method: "POST",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token")}`
        },
        body: form
    });
    return await result.json();
}

//PUT
const putBlog = async (id, blog) => {

    const form = new FormData();
    for (const [key, value] of Object.entries(blog, id)) {
        form.append(key, value);
    }

    const result = await fetch(`${baseUrl}/Blog/${id}`, {
        method: "PUT",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token")}`
        },
        body: form
    });
    if (result.ok) {
        return result.status;
    }
    else {
        throw new Error("There was an error with the PUT request. Contact your admin.");
    }
}


//DELETE
const deleteBlog = async (id) => {
    const form = new FormData();
    for (const [key, value] of Object.entries(id)) {
        form.append(key, value);
    }


    const result = await fetch(`${baseUrl}/Blog/${id}`, {
        method: "DELETE",
        headers: {
            "authorization": `bearer ${localStorage.getItem("token")}`
        },
      
    });
    return await result.json();
}

export const BlogProvider = ({ children }) => {
    const [blogs, setBlogs] = useState();

    const findBlogById = async (id) => {
        return await getBlogById(id);
    }

    const addBlog = async (blog) => {
        const newBlog = await postBlog(blog);
        setBlogs(prevValue => ([
            ...prevValue,
            newBlog
        ]));
        return newBlog;
    }

    const editBlog = async (id, blog) => {
        const result = await putBlog(id, blog);
        if (result === 204) {
            const updatedBlogs = blogs.map(b => b.id === Number(id) ? blog : b);
            setBlogs(updatedBlogs);
        }

        return result;
    }

    const removeBlog = async (id) => {
        const deletedBlog = await deleteBlog(id)
        setBlogs(prevValue => prevValue.filter(b => b.id !== deletedBlog.id));
        return deleteBlog;
    }

    useEffect(() => {
        const fetchData = async () => {
            setBlogs(await getBlogs());
        }
        fetchData();
    }, []);

    return (
        <BlogContext.Provider value={{ findBlogById, blogs, addBlog, editBlog, removeBlog }}>
            {children}
        </BlogContext.Provider>
    );
};