import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './stateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="Sidebar">
            <SidebarRow src={ user.photoURL}
                title={ user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID 19 information center" />
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Video" />
            <SidebarRow Icon={ExpandMoreIcon} title="See more" />
            
        </div>
    )
}

export default Sidebar
