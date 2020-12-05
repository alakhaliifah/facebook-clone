import React from 'react';
import "./SidebarRow.css";
import { Avatar } from '@material-ui/core';
//import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function SidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow
