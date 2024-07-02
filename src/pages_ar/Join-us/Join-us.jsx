
import NavBar from '../Pages-sections/Pages-nav/NavBar';
import './Join-us.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import Interest from '../Interest-card/Interest-card';     
import { faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState,useRef,useEffect } from 'react';
import emailjs from 'emailjs-com';


function Join_us() {

  const titleRef = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animation);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    const title = titleRef.current;
    const section1 = section1Ref.current;
    const section2 = section2Ref.current;


    if (title) {
      title.classList.add('hidden');
      title.dataset.animation = 'fade-in-left';
      observer.observe(title);
    }

    if (section1) {
      section1.classList.add('hidden');
      section1.dataset.animation = 'fade-in-left';
      observer.observe(section1);
    }

    if (section2) {
      section2.classList.add('hidden');
      section2.dataset.animation = 'fade-in-right';
      observer.observe(section2);
    }



    return () => {
      if (title) observer.unobserve(title);
      if (section1) observer.unobserve(section1);
      if (section2) observer.unobserve(section2);
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    department:'',
    email: '',
    message: '',
    attachment: null,
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
  emailjs.sendForm('Join-ID', 'Join-template', e.target, 'api-key',)
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('تم الإرسال بنجاح');
      // Reset the form after successful submission
      setFormData({
        fullName: '',
        phoneNumber: '',
        department:'',
        email: '',
        message: '',
        attachment: null,
      });
    })
    .catch((error) => {
      console.error('Email send error:', error.text);
    });
};

  
  return (
    <div className="Join-us" id="Join-us" lang="ar">
      <div className="Join-us-Header Page-Header">
        <NavBar currentPage="join-us" />
        <div className="join-us-header-title page-header-title">

          <h2> التوظيف </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronLeft}/> 

          <a href="/join-us" >
            <h5>التوظيف   </h5>
          </a>
            

         </div>

        </div>
      </div>

      {/* Page Body */}
      <div className='Join-us-body Page-Body'>
        <h2 className="Interest-section-title section-title" ref={titleRef}> إنضم إلينا </h2>
        <div className='Interest-body'>
          <div className='Interest-form-column' ref={section2Ref}>
            <form className="Interest-form" onSubmit={handleSubmit}>
              <div className="form-group">
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
                <label htmlFor="fullName">الاسم الكامل</label>
              </div>
              <div className="form-group">
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
                <label htmlFor="phoneNumber">رقم الهاتف</label>
              </div>
              <div className="form-group">
                <select 
                  id="department" 
                  name="department" 
                  value={formData.department} 
                  onChange={handleChange} 
                  onFocus={handleAutofill} 
                  required 
                  placeholder=" " 
                >
                  <option value="" disabled hidden></option>
                  <option value="marketing">قسم التسويق</option>
                  <option value="it">قسم تقنية المعلومات</option>
                  <option value="hr">قسم الموارد البشرية</option>
                </select>
                <label htmlFor="department">القسم</label>
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onInput={handleChange}  
                  onFocus={handleAutofill} 
                  placeholder=" " 
                />
                <label htmlFor="email">البريد الإلكتروني</label>
              </div>
              <div className="form-group">
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onInput={handleChange} 
                  onFocus={handleAutofill} 
                  rows="2" 
                  required 
                  placeholder=" " 
                ></textarea>
                <label htmlFor="message">الرسالة</label>
              </div>
              <div className="form-group">
                <input 
                  type="file" 
                  id="attachment" 
                  name="attachment" 
                  onChange={handleChange} 
                />
                <label htmlFor="attachment">السيرة الذاتية (CV)</label>
              </div>
              <button type="submit" className="submit-button">إرسال</button>
            </form>
          </div>
        </div>
      </div>
      
      
      <Interest />
      <Footer />
    </div>
  );
}

export default Join_us;
