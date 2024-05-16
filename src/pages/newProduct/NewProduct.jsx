import { useState } from "react";
import "./newProduct.css";
import api from "../../api";
import { useNavigate } from "react-router-dom"
import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material';


export default function NewProduct() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact_num: '',
    date_of_birth: ''
  })

  const handleInputChange = (event) =>{
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    })
  }

  const handleFormSubmit = async (event) =>{
    event.preventDefault();
    await api.post('/patients/', formData);
    setFormData({
      name: '',
      age: '',
      contact_num: '',
      date_of_birth: ''
    })
    navigate("/patients");
  }

  return (
    <div className="newProduct">
      <div className="userUpdate">
          <span className="userUpdateTitle">New Patient</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="annabeck kaur"
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Age</label>
                <input
                  type="text"
                  placeholder="22"
                  name="age" 
                  value={formData.age}
                  onChange={handleInputChange}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>DOB</label>
                <input
                  type="text"
                  placeholder="01-01-2024" 
                  name="date_of_birth" 
                  value={formData.date_of_birth} 
                  onChange={handleInputChange}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  name="contact_num" 
                  value={formData.contact_num} 
                  onChange={handleInputChange}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              </div>
              <button onClick={handleFormSubmit} className="userUpdateButton">Create</button>

            </div>
          </form>
        </div>
    </div>
  );
}