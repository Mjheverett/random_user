import React from "react";
import "./RandomUser.css";

const RandomUser = props => {
    const { userData } = props;
    return (
        <ul className="card-container">
            {userData.map(user => (
                <li key={user.login.uuid} className="user-card">
                    <img src={user.picture.large} alt="Profile"></img>
                    <h3>{user.name.first} {user.name.last}</h3>
                </li>
            ))}
        </ul>
    )
}

export default RandomUser;