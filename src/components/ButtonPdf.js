import React from 'react';
import CV from '../pdfs/cv-geo.pdf'


export const ButtonPdf = () => {

 

  // const downloadFile = () => {
  //   window.open('http://geovanny-portafolio.netlify.app/download?file=cv.pdf', '_blank');
  // }

  return (
    
 
     <a href={CV} download='CV-Geo' className='btn'> Download CV</a>
  
    
    
  );
};