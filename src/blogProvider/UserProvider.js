import { createContext, useState, useContext } from "react";
import { baseUrl } from "../APIConfig";

const UserContext = createContext();

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}

const userLogin = async (loginInfo) => {
    const result = await fetch(`${baseUrl}/user`, {
        method: "POST",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(loginInfo)
    })
    .then((response) => { console.log("response is" + response.status)});
    return;
}

// const postUser = async () =>  {
//     const result = await fetch (`${baseUrl}/user/create`, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json; charset=utf-8"
//         },

//     });
//     return await result.json();
// }

//POST
const postUser = async (user) => {

    const form = new FormData();
    for (const [key, value] of Object.entries(user)) {
        form.append(key, value);
    }

    console.log("user is" + JSON.stringify(user))

    const result = await fetch(`${baseUrl}/user/create`, {
        method: "POST",
        headers: {
            "Accept": '*/*',
            'Content-Type': 'application/json',
            "authorization": `bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(user)
    });
    return await result.json();
}

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = localStorage.getItem("userData");
        return storedUser ? JSON.parse(storedUser) : undefined;
    });

    const handleLogin = async (loginInfo) => {
        const result = await userLogin(loginInfo);
        setUser(result);
        console.log(result)
        localStorage.setItem("token", result.token);
    }

    const handleLogout = () => {
        setUser(undefined);
        localStorage.removeItem("userData");
    }

    const addUser = async (user) => {
        console.log(user)
        const newUser = await postUser(user);
        return newUser;
    }

    return (
        <UserContext.Provider value={{ user, handleLogin, handleLogout, addUser}}>
            {children}
        </UserContext.Provider>
    )
}