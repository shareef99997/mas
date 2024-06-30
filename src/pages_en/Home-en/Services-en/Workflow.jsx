import React, { useEffect, useRef, useState, useCallback } from "react";
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

  const someCallback = useCallback(() => {
    setStep1({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: "Step One",
      description: "This is the first step of the process.This is the first step of the process.This is the first step of the process.",
    });
    callback();
  }, [callback]);

  const someCallback2 = useCallback(() => {
    setStep2({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: "Step Two",
      description: "This is the second step of the process.This is the second step of the process.This is the second step of the process.",
    });
  }, []);

  const someCallback3 = useCallback(() => {
    setStep3({
      icon: require('../../../Assets/Icons/plan.png'), // Replace with the actual path to your image
      title: "Finish",
      description: "This is the final step of the process.This is the final step of the process.This is the final step of the process.",
    });
  }, []);

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
  }, [setObserver, someCallback, someCallback2, someCallback3]);

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

export default function Workflow_en() {
  const onCallback = useCallback(() => {
    console.log("done");
  }, []);

  return (
    <div className="Home-Workflow-Section">
      <h2 className="Workflow-title"> Workflow </h2>
      <TimelineObserver
        initialColor="#e5e5e5"
        fillColor="#7e663d"
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
