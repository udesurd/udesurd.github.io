import React from "react";
import "./MiniProfile.css"
import avatar from '../../Img/ava.jpg'

function MiniProfile ({Name, Bio, Status}) {
    return (
        <div className="wrapper">
            <div className="profile_wrapper">
                <img className="profile_img" src={avatar}/>
                <div className="name_wrapper">
                    <h2 className="name">{Name}</h2>
                    <p className="bio">{Bio}</p>
                </div>
                <div className="status_wrapper">
                    <div className="buttons">
                        <button className="button">Add Post</button>
                        <button className="button">Settings</button>
                    </div>
                    <p className="status">{Status}</p>
                </div>
            </div>
        </div>
    )
}
export default MiniProfile;