import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements, CardElement, PaymentElement } from "@stripe/react-stripe-js";
import api from "../../api";
import { useLocation, useParams } from "react-router-dom";
import './newAppointment.css';


const PaymentComponent = () => {
  const {id} = useParams();
  const location = useLocation();
  const user = location.state?.data
  console.log(user);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    age: user.age,
    contact_num: user.contact_num,
    date_of_birth: user.date_of_birth,
    email: '',
    address: '',
    doctor_name: '',
    amount: ''
  })

  const handleInputChange = (event) =>{
    const value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value
    })
  }

  const generatePaymentLink = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await api.post('/create_payment_link/', {amount: parseInt(formData.amount), user_name: formData.name, doctor_name: formData.doctor_name, user_id: parseInt(id)});
      const data = response.data;
      console.log(data.payment_link);
      // setPaymentLink(data.payment_link);
    } catch (error) {
      console.error("Error generating payment link:", error);
    }
    setLoading(false);
    setFormData({
      name: '',
      age: '',
      contact_num: '',
      date_of_birth: ''
    })
  };



  // return (
  //   <div>
      // <div>
      //   <label>Enter amount (USD): </label>
      //   <input type="number" value={amount} onChange={handleAmountChange} />
      // </div>
  //     <div>
  //       <button onClick={generatePaymentLink} disabled={loading}>
  //         {loading ? "Generating..." : "Generate Payment Link"}
  //       </button>
  //     </div>
  //     {paymentLink && (
  //       <div>
  //         <p>Payment link:</p>
  //         <a href={paymentLink} target="_blank" rel="noopener noreferrer">
  //           {paymentLink}
  //         </a>
  //       </div>
  //     )}
  //   </div>
  // );

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New Appointment</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Patient Name</label>
          <input type="text" placeholder="john" name="name" value={formData.name} onChange={handleInputChange} />
        </div>
        <div className="newUserItem">
          <label>Doctor Name</label>
          <input type="text" placeholder="John Smith" name="doctor_name" value={formData.doctor_name} onChange={handleInputChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" name="email" value={formData.email} onChange={handleInputChange}/>
        </div>
        <div className="newUserItem">
          <label>Age</label>
          <input type="text" placeholder="age" name="age" value={formData.age} onChange={handleInputChange}/>
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" name="contact_num" value={formData.contact_num} onChange={handleInputChange}/>
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" name="address" value={formData.address} onChange={handleInputChange} />
        </div>
        <div className="newUserItem">
          <label>Enter amount (USD): </label>
          <input type="number" name="amount" value={formData.amount} onChange={handleInputChange} />
        </div>
        <div className="newUserItem"></div>
 
        <button onClick={generatePaymentLink} className="newUserButton" disabled={loading}>{loading ? "Generating..." : "Generate Payment Link"}</button>
      </form>
    </div>
  );
};

export default PaymentComponent;
