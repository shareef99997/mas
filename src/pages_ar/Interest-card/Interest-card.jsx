import React, { useRef,useEffect } from 'react';
import './Interest-card.css';

const InterestCard = () => {

  const titleRef = useRef(null);

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



    if (title) {
      title.classList.add('hidden');
      title.dataset.animation = 'fade-in-bottom';
      observer.observe(title);
    }

    return () => {
      if (title) observer.unobserve(title)
    };
  }, []);

  return (
    <div className="interest-card" id='Home-Interest'>
      <a href="/"><button ref={titleRef}>  سجل إهتمامك الأن  </button></a>
    </div>
  );
};

export default InterestCard;