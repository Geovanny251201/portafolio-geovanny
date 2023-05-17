import React from 'react';


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