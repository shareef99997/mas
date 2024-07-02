import './Interest-en.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function INTEREST_en() {

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  // Add onFocus event handler to capture autofilled values
  const handleAutofill = (e) => {
    const { name, value } = e.target;
    // Check if the value is different from the current form state
    if (formData[name] !== value) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form data using EmailJS
    emailjs.sendForm('Contact-ID', 'contact-template', e.target, '')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        alert('Sent successfully');
        // Reset the form after successful submission
        setFormData({
          fullName: '',
          phoneNumber: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error('Email send error:', error.text);
      });
  };

  return (
    <div className="Home-Interest-en" id="Home-Interest" >
      <h2 className="Interest-section-title section-title-en"> Register your interest </h2>
      <div className='Interest-body'>
        <div className='Interest-info-column'>
          <h2> Request or display your unit now </h2>
          <p> Unprecedented levels of quality in service </p>
          <div className="line-container">
            <span className="line"></span>
            <span className="for-q"> or for inquiries </span>
            <span className="line"></span>
          </div>
          <a href="/en/contact-us"> <button> Contact us </button> </a>
        </div>

        <div className='Interest-form-column'>
          <form className="Interest-form" onSubmit={handleSubmit}>
            <div className="form-group form-group-en">
              <input 
                type="text" 
                id="fullName" 
                name="fullName" 
                value={formData.fullName} 
                onInput={handleChange} 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              />
              <label htmlFor="fullName">Full name</label>
            </div>
            <div className="form-group form-group-en">
              <input 
                type="tel" 
                id="phoneNumber" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onInput={handleChange} 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              />
              <label htmlFor="phoneNumber">Phone number</label>
            </div>
            <div className="form-group form-group-en">
              <input 
                type="mail" 
                id="email" 
                name="email" 
                value={formData.email} 
                onInput={handleChange}  
                onFocus={handleAutofill} 
                placeholder=" " 
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group form-group-en">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onInput={handleChange} 
                onFocus={handleAutofill}  
                placeholder=" " 
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group form-group-en">
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onInput={handleChange}  
                rows="2" 
                onFocus={handleAutofill} 
                required 
                placeholder=" " 
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default INTEREST_en;
