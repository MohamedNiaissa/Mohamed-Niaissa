import React from "react";
import '../css/realisation.css'

class Realisation extends React.Component{
    render(){
        return(
            <div className="realisation">

            <h3 id = "titlerealisation"> Realisation </h3>
    
            <div className="cadre">
    
            <a href="https://github.com/MohamedNiaissa" target="_blank">
                <img src="github-sign.png" className="logogit" alt="logo github" />
             </a>   
    
             <div className='captureprojet'>
    
                <img src="Portfolio.png" className="portfolio" alt="Projet du Portfolio de William" />
    
                <img src="pfs.png" className="pfs" alt="Projet d'un pierre, feuille,ciseaux" />
    
                <img src="Formulaire.png" className="form" alt="Projet du remplissage d'un formulaire" />
    
                <img src="accueilquiz.png" className ="quiz" alt="Projet d'un quiz avec deux modes de jeu" />
    
                
    
            </div>
    
             </div>
        
         </div>
        )
    }
}


export default Realisation