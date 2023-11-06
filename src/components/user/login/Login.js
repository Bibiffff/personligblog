import { useState } from "react";
import { useUserContext } from "../../../blogProvider/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../APIConfig";

const Login = () => {
    const { handleLogin } = useUserContext();
    const navigate = useNavigate();
    const [loginInfo, setLoginInfo] = useState({ email: undefined, password: undefined });


    const handleFormChange = (event) => {
        const name = event.target.name;

        const value = event.target.value;

        setLoginInfo(prevValue => ({
            ...prevValue,
            [name]: value
        }));

        console.log(loginInfo)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const handleSubmit = async () => {
            const success = await handleLogin(loginInfo);
            console.log("Success2!")
            navigate("/personligblog")
            if (success) {
                navigate("/personligblog");
                console.log("success!")
            }
        }
        handleSubmit();
    }
    

    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                            <h1>Login</h1>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" />
                            </div>
                            <div className="mb-3"> <label for="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" name="password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <button className="row mt-2">
                                <Link className="" to={`/user/create`}>SignUp</Link>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;