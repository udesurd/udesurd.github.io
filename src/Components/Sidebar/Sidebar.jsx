import React from "react";
import './Sidebar.css';
import Icon from "../Icon/Icon";
import SidebarOption from "../SidebarOption/SidebarOption";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <nav className="sidebar">
            {/*Logo*/}
            <Icon/>
            {/*SidebarOptions*/}
            <SidebarOption active text="Home" link="home"/>
            <SidebarOption text="Messages" link="messages"/>
            <SidebarOption text="Posts" link="posts"/>
            <SidebarOption text="Notifications" link="notifications"/>
            <SidebarOption text="Profile" link="profile"/>


            {/*Button*/}
        </nav>
    )

}
export default Sidebar;