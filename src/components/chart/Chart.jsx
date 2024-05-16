import "./chart.css";
import { Link } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({title, data, dataKey, grid}) {
    
  return (
    <div className="chart">
      <div className="productTitleContainer">
        <h1 className="chartTitle">{title}</h1>
        <Link to="/newpatient">
          <button className="productAddButton">Add new Patient</button>
        </Link>
      </div>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}