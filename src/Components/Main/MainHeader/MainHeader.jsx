import React from "react";
import SettingsIcon from '../../Img/settings_icon.png'
import './MainHeader.css'

function MainHeader ( ) {
    return (
        <div className="main_header">
            <div className="settings">
        <h2>Settings</h2>
        <img src={SettingsIcon} className="settings_icon"/>
            </div>
        </div>
    )
}

export default MainHeader;