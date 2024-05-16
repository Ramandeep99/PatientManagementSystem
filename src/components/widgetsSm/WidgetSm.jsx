import './widgetSm.css';
import { Visibility } from '@mui/icons-material';


export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">
            New Patients
        </span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Kunal Goyal</span>
                    <span className="widgetSmTitle">Anemia</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Displays
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Nishant</span>
                    <span className="widgetSmTitle">Typhoid</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility/>
                    Displays
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Sukhmanjot</span>
                    <span className="widgetSmTitle">Eye Flu</span>
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
