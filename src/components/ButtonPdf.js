import React from 'react';



export const ButtonPdf = () => {

 

  const downloadFile = () => {
    window.open('https://geovanny-portafolio.netlify.app/api/download?file=cv.pdf', '_blank');
  }

  return (
    
 <button className='buttonPdf text-white ' >
      <span> <a href="https://geovanny-portafolio.netlify.app/api/download?file=cv.pdf" download>
      Descargar CV
    </a></span>
  </button>   
    
    
  );
};