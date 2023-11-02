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
    if (result.status != 200){
        throw await result.json();
      }
    return await result.json();
        
};



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
            "authorization": `bearer ${localStorage.getItem("userData")}`
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
        
        localStorage.removeItem("userData");

        try {
            const result = await userLogin(loginInfo);
            //result = await result.json();
            console.log(result);

            setUser(result);
            
            localStorage.setItem("userData", JSON.stringify(result));
            console.log(console.log(result.token))
            
        } catch (error) {
            alert(JSON.stringify(error))
        }
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