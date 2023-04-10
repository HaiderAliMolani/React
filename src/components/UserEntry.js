import React, {useState} from "react";
const UserEntry = props => {
    const [userName, setUserName] = useState('');
    const [age, setAge] = useState('');
    const userNameHandler = event => {
        setUserName(event.target.value);
    }
    const userAgeHandler = event => {
        setAge(event.target.value);
    }
    const submitHandler = event => {
        event.preventDefault();
        const userData = {
            id: Math.random().toString(),
            userName: userName,
            age: age
        }
        props.onUserEntry(userData);
        setUserName('');
        setAge('');
    }
    return (
        <div>
            <form onSubmit={submitHandler}> 
             <input type='text' placeholder="Enter Username" value={userName} onChange={userNameHandler} />
             <input type='text' placeholder="Enter Age"  value={age} onChange={userAgeHandler} />
             <input type='submit' value="Submit" />
            </form> 
        </div>
    )
};
export default UserEntry;