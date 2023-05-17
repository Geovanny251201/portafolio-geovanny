
import ProgressBar from 'progressbar.js';
import { useState, useEffect, useRef } from "react";

export  const Progress = ({ progress,isActive }) => {
  const containerRef = useRef(null);
  const circleBarRef = useRef(null);


  useEffect(() => {
    if (isActive) {
      if (!circleBarRef.current) {
        circleBarRef.current = new ProgressBar.Circle(containerRef.current, {
          color: "white",
          strokeWidth: 1,
          trailWidth: 10,
          trailColor: "gray",
          easing: "easeInOut",
          from: { color: "#fff", width: 3 },
          to: { color: "#fff", width: 10 },
          text: {
            value: '0',
            className: 'progress-text ',
            style: {
              color: 'white',
              position: 'absolute',
              top: '37%',
              left: '38%',
              padding: 0,
              margin: 20,
              transform: null
            }
          },
          step: (state, shape) => {
            shape.path.setAttribute("stroke", state.color);
            shape.path.setAttribute("stroke-width", state.width);
            shape.setText(Math.round(shape.value() * 100) + ' %');
          }
        });
      }

      circleBarRef.current.animate(progress, { duration: 1500 });
    } else {
      if (circleBarRef.current) {
        circleBarRef.current.pause();
        circleBarRef.current.destroy();
        circleBarRef.current = null;
      }
    }
  }, [progress, isActive]);

  return <div ref={containerRef} />;
};