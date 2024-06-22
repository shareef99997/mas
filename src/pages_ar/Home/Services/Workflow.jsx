import React, { useEffect, useRef, useState } from "react";
import TimelineObserver from "react-timeline-animation";
import "./Workflow.css";

const Timeline = ({ setObserver, callback }) => {
  const [step1, setStep1] = useState({});
  const [step2, setStep2] = useState({});
  const [step3, setStep3] = useState({});

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);

  const someCallback = () => {
    setStep1({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: " الخطوة الأولى ",
      description: "وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.",
    });
    callback();
  };
  
  const someCallback2 = () => {
    setStep2({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: "الخطوة الثانية ",
      description: "وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.",
    });
  };
  
  const someCallback3 = () => {
    setStep3({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: "الخطوة الثالثة ",
      description: "وجود وسيط عقاري محترف بين البائع والمشتري يساعد بشكل كبير في إنجاح الصفقة العقارية. وما يميزنا في شركة منظومة الصباح العقارية هو جودة واحترافية منتج التسويق العقاري، حيث إننا نتميز بالتسويق غير الحصري بالتعاون مع شركات تسويق عقارية ومئات المكاتب بإدارة محترفة تسهل سرعة إفراغ وكسب رضا المطور.",
    });
  };
  

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, []);

  const renderStep = (step) => (
    <div className="stepBox">
      <img src={step.icon} alt={step.title} className="stepIcon" />
      <div className="stepTitle">{step.title}</div>
      <div className="stepDescription">{step.description}</div>
    </div>
  );

  return (
    <div className="wrapper">
      <div id="timeline1" ref={timeline1} className="timeline" />
      <div className="circleWrapper">
        <div id="circle1" ref={circle1} className="circle">
          1
        </div>
        {step1.title && renderStep(step1)}
      </div>
      <div id="timeline2" ref={timeline2} className="timeline" />
      <div className="circleWrapper">
        <div id="circle2" ref={circle2} className="circle">
          2
        </div>
        {step2.title && renderStep(step2)}
      </div>
      <div id="timeline3" ref={timeline3} className="timeline" />
      <div className="circleWrapper circleWrapper3">
        <div id="circle3" ref={circle3} className="circle">
          3
        </div>
        {step3.title && renderStep(step3)}
      </div>
    </div>
  );
};

export default function Workflow() {
  

  const onCallback = () => {
    console.log("done");
  };

  return (
    <div className="Home-Workflow-Section">
      <h2 className="Workflow-title"> سير العمل </h2>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#9b8050"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
    </div>
  );
}
