import { BrowserRouter, Route, Routes } from "react-router-dom";

import { UserProvider } from "./blogProvider/UserProvider";
import { BlogProvider } from "./blogProvider/BlogProvider";

import Layout from "./components/layout/Layout";

import Home from "./components/blog/Home";
import AddBlog from "./components/blog/AddBlog";
import BlogPost from "./components/blog/BlogPost";
import EditBlog from "./components/blog/EditBlog";

import Signup from "./components/user/signup/Signup";
import Login from "./components/user/login/Login";


const App = () => {
  return (
    <BrowserRouter>
    <UserProvider>
      <BlogProvider>
        <Layout>
          <Routes>
            <Route path="/personligblog" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/create" element={<Signup />} />
            <Route path="/addBlog" element={<AddBlog />} />
            <Route path="/personligblog/blogpost/:blogId" element={<BlogPost />} />
            <Route path="/personligblog/edit/:blogId" element={<EditBlog />} />
            <Route path="*" element={<>HTTP 404 - The page you were looking for does not exist.</>} />
          </Routes>
        </Layout>
      </BlogProvider>
    </UserProvider>
    </BrowserRouter>
  );
}

export default App;
