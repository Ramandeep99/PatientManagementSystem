import React from 'react'
import './Home.css'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
        <Chart data={userData} title="Patient Analytics" grid dataKey="Active Patients"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
 