import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import '../css/formation.css';

const Formation =() => {
   
        useEffect(() =>{
            Aos.init({duration: 2000});
        },[])
        
        return(
            <div className="formation">


                <h2 id ="titleformation">Formation</h2>
        
                <div data-aos="fade" className="ligne"></div>
        
                <div  className="premiere">
                    <div data-aos="fade" className="point1"></div>
                    <div data-aos="slide-left" className="rect1"></div>
                    <p data-aos="slide-left" data-aos-duration="1500">
                        Première scientifique <br />
                        Science de l’ingénieur
                    </p>
                </div>
        
                <div className="terminal">
                    <div data-aos="fade" className="point2"></div>
                    <div data-aos="slide-right" className="rect2"></div>
        
                    <p data-aos="slide-right">
                        Terminal scientifique
                        Science de l'ingénieur<br />
                        option ISN (Informatique et science du numerique), <br />
                        BAC S mention bien
                        
                    </p>
                </div>
        
                <div className="prepa">
                    <div data-aos="fade" className="point3"></div>
                    <div data-aos="slide-left" className="rect3"></div>
        
                    <p data-aos="slide-left"> 
                        Prepa PTSI (physique ,technologie et science de l'ingénieur)
                    </p>
                </div>
        
                <div className="coding">
                    <div data-aos="fade" className="point4"></div>
                    <div data-aos="slide-right" className="rect4"></div>
        
                    <p data-aos="slide-right">
                        Coding Factory: première année Analyste développeur d'applications informatiques
                    </p>
                </div>
        

        </div>


        )
    }


export default Formation