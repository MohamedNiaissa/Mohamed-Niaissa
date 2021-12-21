import React from "react";
import '../css/presentation.css'

class Presentation extends React.Component{

    render(){
        return(
            <div class="presentation">
                <img src="moi1.jpeg" class ="moi"alt="image de Mohamed" />
        
                <div class="pres">
                    <p>
                        Je suis Mohamed Niaissa,
                        <br />
                        <br />
                        un apprenti analyste et développeur web passioné par le monde du web et mobile depuis très jeune. Mon but est de devenir un expert dans ces domaines et viser le métier de développeur full-stack
                    </p>
            
                    <ul>
                        <li class="nom">Nom: Mohamed Niaissa</li>
                        <li class="age">Age: 20 ans</li>
                        <li class="ville">Ville: Clichy-La-Garenne</li>
                    </ul>
            
                    <a href="#">
                        <img src="download.png" class = "download"alt="Telecharger mon CV" />
                    </a>
        
                </div>
            
            </div>
        )
    }

}

export default Presentation