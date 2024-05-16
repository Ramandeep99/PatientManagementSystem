import React from 'react'
import './Sidebar.css'
import {LineStyle, PermIdentity} from  '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <Link to='/' className='link'>
                        <li className="sidebarListItem active">
                            <LineStyle className='sidebarIcons'/>
                            Home
                        </li>
                    </Link>
                    <Link to='patients' className='link'>
                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcons'/>
                            Patients
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
