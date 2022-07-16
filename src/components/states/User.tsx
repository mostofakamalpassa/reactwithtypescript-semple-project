import { useState } from "react"
type AuthUser = {
    name : string;
    email: string;
}

export const User = () =>{
    // const [user, setUser] = useState<null | AuthUser>(null);
    const [user, setUser] = useState({} as AuthUser); // Type Assertion 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
            // setIsLoggedIn(true)
            setUser({
                name:'kamal',
                email:'kamal@gmail.com'
            })
    }
    const handleLogout = () =>{
        // setIsLoggedIn(false);
        // setUser(null);
        setUser({name:'', email:''});
    }

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div> User Name is {user?.name}</div>
            <div> User Email is {user?.email} </div>
        </div>
    )
}