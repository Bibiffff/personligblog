import { useState } from "react";
import { useUserContext } from "../../../blogProvider/UserProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
    const { addUser } = useUserContext();
    const [user, setUser] = useState();
    const [postResult, setPostResult] = useState();
    const [signupData, setSignupData] = useState();


    const handleFormChange = (event) => {
        // const name = event.target.name;
        // const value = event.target.name === "file" ? event.target.files[0] : event.target.value;

        setSignupData(prevState => ({
            ...prevState,
            [event.target.name]: event.target.value
        }));


        console.log(event.target.value);

        // setUser(prevValue => ({
        //     ...prevValue,
        //     [name]: value
        // }));
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        const handleSubmit = async () => {
            const result = await addUser(signupData);
            console.log(signupData);
            event.target.reset();
        }
        handleSubmit();
    }


    return (
        <>
            <section className="container-fluid">
                <form onChange={handleFormChange} onSubmit={handleFormSubmit}>
                    <div className="container" />
                    <h1>Register</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <div className="row">
                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" id="email" required />
                </div>
                <div className="row">
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" id="psw" required />
                <p>By creating an account you agree to our <Link to="/">Terms & Privacy</Link>.</p>
                </div>
                <button type="submit" className="registerbtn">Register</button>

                <div className="container signin">
                    <p>Already have an account? <Link to="/login">Login</Link>.</p>
                </div>
            </form>
        </section >
        </>
    );
};
export default SignUp;