import React from 'react';
import './Profile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'

const Profile = (props) => {
    const icon = <FontAwesomeIcon icon={faGuitar} />
    const {name,image,born,age,costToHire,role,country} = props.element;

    return (
        <div className="profile-cart">
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="cart-body">
                <h2>{name}</h2>
                <p>Country : {country}</p>
                <p>Born :{born}</p>
                <p>Age : {age}</p>
                <p>Role : {role}</p>
                <p>Hire : $ {costToHire}</p>
            </div>
            <button onClick={() =>props.handleMusician(props.element)}>
            {icon} Hire
            </button>
        </div>
    );
};

export default Profile;