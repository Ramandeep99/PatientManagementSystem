import { useState } from "react";
import "./newProduct.css";
import api from "../../api";
import { useNavigate } from "react-router-dom"

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
    navigate("/products");
  }

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Patient</h1>
      <form className="addProductForm">

        <div className="addProductItem">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange}/>
        </div>
        <div className="addProductItem">
          <label>Age</label>
          <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
        </div>
        <div className="addProductItem">
          <label>Contact Number</label>
          <input type="text" name="contact_num" value={formData.contact_num} onChange={handleInputChange} />
        </div>
        <div className="addProductItem">
          <label>DOB</label>
          <input type="text" placeholder="01-01-2024" name="date_of_birth" value={formData.date_of_birth} onChange={handleInputChange} />
        </div>
        {/* <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button onClick={handleFormSubmit} className="addProductButton">Create</button>
      </form>
    </div>
  );
}