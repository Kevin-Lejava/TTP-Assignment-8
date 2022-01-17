import React from 'react';
import Navbar from './Navbar'
function UserProfile(props) {
    return (
        <div>
            <Navbar />
            <h1>User Profile</h1>

            <div>Username: {props.userName}</div>
            <div>Member Since: {props.memberSince}</div>
        </div>
    );
}

export default UserProfile;