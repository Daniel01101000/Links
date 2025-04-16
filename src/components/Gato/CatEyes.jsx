import React, { useEffect } from 'react';
import './CatEyes.css';

const CatEyes = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll('.eye');
    const pupils = document.querySelectorAll('.pupil');

    const handleMouseMove = (event) => {
      const mouseX = event.clientX;
      const mouseY = event.clientY;

      eyes.forEach((eye, index) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;

        const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
        const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4); // Limitar el movimiento del pupilo

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupils[index].style.transform = `translate(-50%, -50%) translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="cat">
      {/* Orejas */}
      <div className="ear left"></div>
      <div className="ear right"></div>

      <div className="eye left">
        <div className="pupil"></div>
      </div>
      <div className="eye right">
        <div className="pupil"></div>
      </div>

      {/* Boca */}
      <div className="mouth"></div>
    </div>
  );
};

export default CatEyes;