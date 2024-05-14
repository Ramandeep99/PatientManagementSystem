import './widgetSm.css';
import { Visibility } from '@mui/icons-material';


export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">
            New Join Members
        </span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Kunal Goyal</span>
                    <span className="widgetSmTitle">BackEnd Developer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Displays
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Nishant Joon</span>
                    <span className="widgetSmTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Displays
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Sukhmanjot Singh</span>
                    <span className="widgetSmTitle">Database Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Displays
                </button>
            </li>
        </ul>
    </div>
  )
}
