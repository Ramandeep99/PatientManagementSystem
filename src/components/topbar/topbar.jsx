import React from 'react'
import './topbar.css'
import {NotificationsNone , Language , Settings} from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className='logo'>lamaadmin</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    < NotificationsNone />
                    <span className="topIconBag">2 </span>
                </div>
                <div className="topbarIconContainer">
                    < Language />
                    <span className="topIconBag">2 </span>
                </div>
                <div className="topbarIconContainer">
                    < Settings />
                </div>
                <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
  )
}
