import React, { useEffect, useRef } from 'react';
import './Services.css';
import Workflow from './Workflow';

function Services() {

  

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
      section1.dataset.animation = 'fade-in-up';
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

  return (
    <div className="Home-Services" id="Home-Services" >
      <h2 className='section-title' ref={titleRef}> ماذا نقدم لكم ؟ </h2>
      <div className='Home-Services-body'>

        <div className='Home-Services-Section' ref={section1Ref}>

          <div className='Service-Box'>
            <div className='Service-Title Service-Title-1'>
              <h2> التسويق العقاري </h2>
            </div>
            <div className='Service-Description'>
              <p> وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.  </p>
              <a href="/services"> تعرف على المزيد <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-2'>
              <h2> التسويق العقاري </h2>
            </div>
            <div className='Service-Description'>
              <p> وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور. </p>
              <a href="/services"> تعرف على المزيد <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-3'>
              <h2> التسويق العقاري </h2>
            </div>
            <div className='Service-Description'>
              <p> وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.  </p>
              <a href="/services"> تعرف على المزيد <span> &larr; </span></a>
            </div>
          </div>
          <div className='Service-Box'>
            <div className='Service-Title Service-Title-4'>
              <h2> التسويق العقاري </h2>
            </div>
            <div className='Service-Description'>
              <p> وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.  </p>
              <a href="/services"> تعرف على المزيد <span> &larr; </span></a>
            </div>
          </div>

        </div>
        
        <Workflow/>
      </div>
      
    </div>
  );
}

export default Services;
