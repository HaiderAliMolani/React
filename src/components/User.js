import React, {useState} from "react";
import UserDetail from "./UserDetail";
import UserEntry from "./UserEntry";
const User = () => {
    const [users, setUsers] = useState([]);
    const UserEntryHandler = userEntry => {
        setUsers(prevUsers => {
            return [...prevUsers,userEntry]
        })
    }
    return (
        <div>
             <UserEntry onUserEntry={UserEntryHandler}/>
            <UserDetail userData={users}/>  
        </div>
    )
};
export default User;