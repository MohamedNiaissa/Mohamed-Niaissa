import React from "react";
import '../css/presentation.css'

const Presentation = () => {


        return(
            <div  data-aos="fade" data-aos-duration="3000" className="presentation">
                <div className="imgmoi">
                    <img src="moi1.jpeg" className="moi"alt="image de Mohamed" />
                </div>
        
                <div className="pres">
                    <p>
                        Je suis Mohamed Niaissa,
                        <br />
                        <br />
                        un apprenti analyste développeur d'applications passioné par le monde du web et mobile depuis très jeune. Mon but est de devenir un expert dans ces domaines et viser le métier de développeur full-stack
                    </p>

                    <ul className="listeResume">
                        <li className="nom">Nom: Mohamed Niaissa</li>
                        <li className="age">Age: 20 ans</li>
                        <li className="ville">Ville: Clichy-La-Garenne</li>
                    </ul>
                
                    <a href="MohamedNiaissaCV.zip"><img src="download.png" className = "download"alt="Telecharger mon CV" /></a>
                      
                        
                </div>
            
            </div>
        )
    }



export default Presentation