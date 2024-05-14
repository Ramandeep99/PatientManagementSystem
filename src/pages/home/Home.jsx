import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/featuredInfo/featuredInfo'
import Chart from '../../components/chart/Chart'
import {userData} from '../../dummyData'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
 