import React from "react";
import '../css/formation.css';

class Formation extends React.Component{
    render(){
        return(
            <div className="formation">


                <h2 id ="titleformation">Formation</h2>
        
                <div className="ligne"></div>
        
                <div className="premiere">
                    <div className="point1"></div>
                    <div className="rect1"></div>
                    <p>
                        Première scientifique <br />
                        Science de l’ingénieur
                    </p>
                </div>
        
                <div className="terminal">
                    <div className="point2"></div>
                    <div className="rect2"></div>
        
                    <p>
                        Terminal scientifique
                        Science de l'ingénieur<br />
                        option ISN (Informatique et science du numerique), <br />
                        BAC S mention bien
                        
                    </p>
                </div>
        
                <div className="prepa">
                    <div className="point3"></div>
                    <div className="rect3"></div>
        
                    <p>
                        Prepa PTSI (physique ,technologie et science de l'ingénieur)
                    </p>
                </div>
        
                <div className="coding">
                    <div className="point4"></div>
                    <div className="rect4"></div>
        
                    <p>
                        Coding Factory: première année Analyste développeur d'applications informatiques
                    </p>
                </div>
        

        </div>


        )
    }
}

export default Formation