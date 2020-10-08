import React from "react";
import "./RandomUser.css";

const RandomUser = props => {
    const { userData } = props;
    return (
        <div className="card-container">
            <div className="user-card">
                <h3>{userData.name.first} {userData.name.last}</h3>
                <img src={userData.picture.large} alt="Profile Picture"></img>
            </div>
        </div>
    )
}

export default RandomUser;