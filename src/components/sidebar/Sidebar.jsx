import React from 'react'
import './Sidebar.css'
import {LineStyle, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline} from  '@mui/icons-material';
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
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcons'/>
                        Sales
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quiz Menu</h3>
                <ul className="sidebarList">
                    <Link to='users' className='link'>
                        <li className="sidebarListItem">
                            <PermIdentity className='sidebarIcons'/>
                            Users
                        </li>
                    </Link>
                    <Link to='products' className='link'>
                        <li className="sidebarListItem">
                            <Storefront className='sidebarIcons'/>
                            Products
                        </li>
                    </Link>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcons'/>
                        Transactions
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcons'/>
                        Mail
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcons'/>
                        Feedback
                    </li>
                    <li className="sidebarListItem">
                        <TrendingUp className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <WorkOutline className='sidebarIcons'/>
                        Manage
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcons'/>
                        Analytics
                    </li>
                    <li className="sidebarListItem">
                        <Report className='sidebarIcons'/>
                        Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
