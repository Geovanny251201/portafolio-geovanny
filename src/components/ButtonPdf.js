import React from 'react';



export const ButtonPdf = () => {

 

  const downloadFile = () => {
    window.open('https://geovanny-portafolio.netlify.app/api/download?file=cv.pdf', '_blank');
  }

  return (
    
 <button className='buttonPdf text-white ' onClick={downloadFile}>
      <span> Descargar CV</span>
  </button>   
    
    
  );
};