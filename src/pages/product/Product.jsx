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
      {/* <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Product Name</label>
                  <input type="text" placeholder="Apple AirPod" />
                  <label>In Stock</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
                  <label>Active</label>
                  <select name="active" id="active">
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                  </select>
              </div>
              <div className="productFormRight">
                  <div className="productUpload">
                      <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                      <label for="file">
                          <Publish/>
                      </label>
                      <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
              </div>
          </form>
      </div> */}
    </div>
  );
}