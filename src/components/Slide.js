
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import '../css/slide.css'

 
let url = (indeximg) => {

  if(indeximg == 0){
    return '#'
  }else if(indeximg == 1) {
    return 'https://www.youtube.com/'
  }else if(indeximg == 2){
    return '#'
  }else if(indeximg == 3){
    return '#'
  }else if(indeximg == 4){
    return '#'
  }

}

const Slideshow = () => {
    const images = [
        'accueilquiz.png',
        'Portfolio.png',
        'JavaFx.png',
        'pfs.png',
        'Formulaire.png'
      ];

    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <a href={url(index)}><img key={index} style={{width: "100%"}} src={each} /> </a>)
          }
        </Zoom>
      </div>
    )
}

export default Slideshow;