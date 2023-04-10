import React from "react";
const UserDetail = props => {
    return (
        <div>
            <ul>
            {props.userData.map(user => <li key={user.id}>{user.id} {user.userName} {user.age}</li>)}
            </ul>
         
        </div>
    )
};
export default UserDetail;