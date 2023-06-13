import React from 'react';
import CV from '../pdfs/CV-Geovanny.pdf'


export const ButtonPdf = () => {

 

  // const downloadFile = () => {
  //   window.open('http://geovanny-portafolio.netlify.app/download?file=cv.pdf', '_blank');
  // }

  return (
    
 <button className='buttonPdf text-white'>
     <a href={CV} download='Currículum Geovanny Araya_Desarrollador Web Frontend' className='btn'> Descargar CV</a>
  </button>   
    
    
  );
};