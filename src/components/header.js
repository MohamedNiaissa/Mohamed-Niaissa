import React from "react";


class Header extends React.Component{

    render(){
        return(
<>
            <header>
                <div className="header">

                <div className="banniere" id="menuToggle">

                    {/* <input id = "check"type="checkbox" /> */}

                    <a href="#menuburger">
                        <span id="firstline"></span>
                        <span id="secondline"></span>
                        <span id="thirdline"></span>
                    </a>

                    <nav id="menuburger">
                            <ul id = "menub">
                                <li> <a href ="#titleformation">FORMATION</a></li>
                                <li> <a href = "#titleskills">COMPETENCES</a></li>
                                <li> <a href = "#titlerealisation">REALISATIONS</a></li>
                                <li><a href = "#titlecontact">CONTACT</a></li>
                            </ul>
                        </nav>


                        <nav>
                            <ul id = "menu">
                                <li> <a href ="#titleformation">FORMATION</a></li>
                                <li> <a href = "#titleskills">COMPETENCES</a></li>
                                <li> <a href = "#titlerealisation">REALISATIONS</a></li>
                                <li><a href = "#titlecontact">CONTACT</a></li>
                            </ul>
                        </nav>

                        
                        <h1>
                            Bonjour je m'appelle Mohamed Niaissa et je suis  <br />
                            <span className="role"> un apprenti analyste développeur d'applications</span>
                        </h1>
                    </div>



                </div>

            </header>

            </>
        )
    }


}


export default Header