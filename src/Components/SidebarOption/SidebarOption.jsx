import React from "react";
import './SidebarOption.css'

function SidebarOption ({active, text, link}) {
    return (
        <a href={`/${link}`}><h2 className={`option ${active && 'option--active'}`}>{text}</h2></a>
    )
}

export default SidebarOption;