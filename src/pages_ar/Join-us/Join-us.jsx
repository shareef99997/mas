
import NavBar from '../Home/Header/NavBar';
import './Join-us.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';

function Join_us() {
  
  return (
    <div className="Join-us" id="Join-us" lang="ar">
      <div className="Join-us-Header Page-Header">
        <NavBar currentPage="join-us" />
      </div>

      {/* Page Body */}
      {/* <div className='Join-us-body Page-Body'>
        <div className="Join-us-title Page-title-container">
          <h1 className="Services-title">إنضم لفريق 26 فكرة</h1>
          <p className="description"> اصبح فرد من العائلة الآن </p>
        </div>
        <div className="flex-container">
          <div className="image-container">
            <img src={require("../../Assets/Images/join-us.jpg")} alt="Project Management" />
          </div>
          <form className="Join-us-form" onSubmit={handleSubmit}>
            
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
                
                placeholder=" " 
              >
                <option value="" disabled hidden></option>
                <option value="marketing">قسم التسويق</option>
                <option value="it">قسم تقنية المعلومات</option>
              </select>
              <label htmlFor="department">القسم</label>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onInput={handleChange} 
                onFocus={handleAutofill} 
                placeholder=" " 
              />
              <label htmlFor="subject">الموضوع</label>
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
              <label htmlFor="attachment"> السيرة الذاتية (CV) </label>
            </div> 
            <button type="submit" className="submit-button">إرسال</button>
          </form>
        </div>
      </div> */}
      
      <INTEREST />
      <Footer />
    </div>
  );
}

export default Join_us;
