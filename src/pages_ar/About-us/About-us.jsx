
import NavBar from "../Pages-sections/Pages-nav/NavBar";
import './About-us.css';
import '../Pages.css';
import Footer from '../../pages_ar/Home/Footer/Footer';
import INTEREST from '../../pages_ar/Home/Interest/Interest';
import { faChevronLeft, faHome} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ABOUT_SECTION from "../Pages-sections/About-section/About-section";

function About_us() {

  return (
    <div className="About-us" id="About-us" lang="ar">
      <div className="About-us-Header Page-Header">
        <NavBar currentPage="about-us"/>
        <div className="about-us-header-title page-header-title">

          <h2> عن المنظومة </h2>

          <div className="title-nav">
           
          <a href="/" className="icon-link" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faHome} />
            </a>

          <FontAwesomeIcon className="arrow-link" icon={faChevronLeft}/> 

          <a href="/about-us" >
            <h5>عن المنظومة</h5>
          </a>
            

         </div>

        </div>
        
      </div>
      <div className="About-us-body" >
        <div className="About-alsabah">
          <div className="About-first-section">
            <h3> شركة منظومة الصباح العقارية </h3>
            <p>  تضم شركة منظومة الصباح العقارية نخبة من المسوقين ذوي الخبرة والاحترافية العالمية، ولديها قاعدة كبيرة من  العملاء والمستثمرين في المجال العقاري، كما أنها قادرة على جذب كافة أطياف العملاء عبر مواقع التواصل الاجتماعي، كما أن لديها تعاون وثيق مع أكبر الشركات التسويقية والمكاتب العقارية في أنحاء الرياض بهدف الوصول لسرعة إفراغ وتسهيل عملية البيع (إدارة تسويق باحترافية وإتقان). 
            </p>
           <a href="#Manager-word"><button> كلمة رئيس مجلس الإدارة </button></a> 
          </div>
          <div className="About-second-section">
            <img src={require('../../Assets/Images/about-us.jpg')} alt="" />
          </div>
        </div>

        <ABOUT_SECTION />
        <div className="Manager-word" id="Manager-word">
          <div className="About-second-section">
            <img src={require('../../Assets/Images/about-us.jpg')} alt="" />
          </div>

          <div className="About-first-section">
              <h3> كلمة رئيس مجلس الإدارة </h3>
              <p>  تضم شركة منظومة الصباح العقارية نخبة من المسوقين ذوي الخبرة والاحترافية العالمية، ولديها قاعدة كبيرة من  العملاء والمستثمرين في المجال العقاري، كما أنها قادرة على جذب كافة أطياف العملاء عبر مواقع التواصل الاجتماعي، كما أن لديها تعاون وثيق مع أكبر الشركات التسويقية والمكاتب العقارية في أنحاء الرياض بهدف الوصول لسرعة إفراغ وتسهيل عملية البيع (إدارة تسويق باحترافية وإتقان). 
              </p>
            <h4 >   رئيس مجلس الإدارة <br />   عوض سعيد الأسمري  </h4>
          </div>
          
        </div>
      </div>
      <INTEREST />
      <Footer />
    </div>
  );
}

export default About_us;
