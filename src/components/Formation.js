import React from "react";
import '../css/formation.css';

class Formation extends React.Component{
    render(){
        return(
            <div class="formation">


                <h2 id ="titleformation">Formation</h2>
        
                <div class="ligne"></div>
        
                <div class="premiere">
                    <div class="point1"></div>
                    <div class="rect1"></div>
                    <p>
                        Première scientifique <br />
                        Science de l’ingénieur
                    </p>
                </div>
        
                <div class="terminal">
                    <div class="point2"></div>
                    <div class="rect2"></div>
        
                    <p>
                        Terminal scientifique
                        Science de l'ingénieur<br />
                        option ISN (Informatique et science du numerique), <br />
                        BAC S mention bien
                        
                    </p>
                </div>
        
                <div class="prepa">
                    <div class="point3"></div>
                    <div class="rect3"></div>
        
                    <p>
                        Prepa PTSI (physique ,technologie et science de l'ingénieur)
                    </p>
                </div>
        
                <div class="coding">
                    <div class="point4"></div>
                    <div class="rect4"></div>
        
                    <p>
                        Coding Factory: première année Analyste développeur d'applications informatiques
                    </p>
                </div>
        

        </div>


        )
    }
}

export default Formation