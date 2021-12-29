import React from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import Formation from "./Formation";
import Competances from "./Competances";
import Realisation from "./Realisation";
import Slideshow from './Slide';
import Footer from "./Footer";


class Pageweb extends React.Component{
    render(){
        return(

            <>

                <Header />
                <div className="presentation">
                <div className="imgmoi">
                    <img src="moi1.jpeg" className="moi"alt="image de Mohamed" />
                </div>
        
                <div className="pres">
                    <p>
                        Je suis Mohamed Niaissa,
                        <br />
                        <br />
                        un apprenti analyste et développeur web passioné par le monde du web et mobile depuis très jeune. Mon but est de devenir un expert dans ces domaines et viser le métier de développeur full-stack
                    </p>

                    <ul className="listeResume">
                        <li className="nom">Nom: Mohamed Niaissa</li>
                        <li className="age">Age: 20 ans</li>
                        <li className="ville">Ville: Clichy-La-Garenne</li>
                        
                    </ul>
                
                    <a href="#"><img src="download.png" className = "download"alt="Telecharger mon CV" /></a>
                     
        
                    
                        
                </div>
            
            </div>
                <Formation />
                <Competances />
                <Realisation />
                <Slideshow />
                <Footer />

            </>
        )
    }

}




export default Pageweb