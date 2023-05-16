import React from 'react';
import { Button } from "react-bootstrap";

export const ButtonPdf = () => {

 

  const downloadFile = () => {
    window.open('http://localhost:4000/download?file=cv.pdf', '_blank');
  }

  return (
    
 <button className='buttonPdf text-white ' onClick={downloadFile}>
      <span> Descargar CV</span>
  </button>   
    
    
  );
};