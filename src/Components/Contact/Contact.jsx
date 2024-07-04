import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2675ad6f-a124-4b3b-8577-fc3c5a1d4a2e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
    <div className='contact-call'>
        <h3>Send us a message <img src={msg_icon} alt=''/></h3>
        <p>We would love to hear from you! Whether you have questions, feedback, or need assistance, our team is here to help. Please fill out the contact form below with your details and message, and we will get back to you as soon as possible. Your input is invaluable to us, and we are committed to providing you with the best support. Do not hesitate to reach out  we look forward to connecting with you</p>
        <ul>
            <li><img src={mail_icon} alt=''/>sophieakoth4@gmail.com</li>
            <li><img src={phone_icon} alt=''/>0714602658</li>
            <li><img src={location_icon} alt=''/>Nairobi</li>
        </ul>
    </div>
    <div className='Contact-call'>
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name'required/>
            <label>Phone Number</label>
            <input type='tel' name='phone'placeholder='Enter your phone number' required/>
            <label> Write your message here</label>
            <textarea name='message'  rows='6' placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now<img src={white_arrow} alt=''/></button>
        </form>
        <span>{result}</span>
    </div>
      
    </div>
  )
}
export default Contact
