import React from "react";
import '/Users/mohamed/Documents/monportfolioreact/portfolio/src/css/header.css'


class Header extends React.Component{

    render(){
        return(
            <header>

                <div className="banniere">
                    <nav>
                        <ul>
                            <li> <a href ="#titleformation">FORMATION</a></li>
                            <li> <a href = "#titleskills">COMPETANCES</a></li>
                            <li> <a href = "#titlerealisation">REALISATIONS</a></li>
                            <li><a href = "#titlecontact">CONTACT</a></li>
                        </ul>

                    
                    </nav>
                    <h1>
                        Bonjour je m'appelle Mohamed Niaissa et je suis  <br />
                        <span className="role"> un apprenti analyste et développeur d'applications</span>
                    </h1>
                </div>

            </header>

        )
    }


}


export default Header