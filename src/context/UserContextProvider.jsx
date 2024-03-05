import {onAuthStateChanged} from "firebase/auth";
import {useState} from "react"
import {auth} from "../firebase";
import {userContext} from "./UserContext";


// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children}) => {

    const [user,setUser] = useState();

    onAuthStateChanged(auth,(user) => {
        if(user) {
            console.log("user is log in",user);
            setUser(user);
        } else {
            console.log("user is log out");
            setUser(null);
        }
    });

    return (
        <userContext.Provider value={user}>
            {children}
        </userContext.Provider>
    );

}
