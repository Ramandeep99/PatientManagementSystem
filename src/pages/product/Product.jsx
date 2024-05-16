import { Link , useLocation} from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish} from '@mui/icons-material';
import { useEffect, useState } from "react";
import api from "../../api";


export default function Product() {

  const [appointments, setAppointments] = useState([])
  const location = useLocation();
  const data = location.state?.data;
  const fetchPatientAppointments = async (id) =>{
    // console.log(data.id)
    const response = await api.get(`/user_payment_links/${id}`);
    setAppointments(response.data);
  }

  useEffect(()=>{
    fetchPatientAppointments(data.id)
  }, [data.id])
    
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Patient</h1>
        <Link to={"/create_appointment/" + data.id}>
            <button className="productAddButton">Create Appointment</button>
        </Link>
      </div>
      <div className="productTop">

          <div className="productTopRight">
              
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Patient Id:</span>
                      <span className="productInfoValue">{data.id}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Name:</span>
                      <span className="productInfoValue">{data.name}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">DOB:</span>
                      <span className="productInfoValue">{data.date_of_birth}</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Contact:</span>
                      <span className="productInfoValue">{data.contact_num}</span>
                  </div>
              </div>
              <ul>
                    {appointments.map(data =>(
                        <li><a href={data} >Payment Link</a></li>
                    ))}
                </ul>
          </div>
      </div>
    </div>
  );
}