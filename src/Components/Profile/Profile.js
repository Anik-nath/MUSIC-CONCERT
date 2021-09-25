import React from 'react';
import './Profile.css';

const Profile = (props) => {
    return (
        <div>
            <h2>name : {props.name}</h2>
            <h2>age : {props.age}</h2>
        </div>
    );
};

export default Profile;