import React from "react";
import '../css/footer.css'

const Footer = () => {


        return(

        <footer>

            
                <h3 id="titlecontact"> Contactez-moi</h3>
                <p id="recherche">
                Actuellement à la recherche d'une alternance <br /> pour l'année 2022
                </p>
                <div className="mail">
                <img src="email.png" className="email" alt="logo email" />
                
                <div className="encadremail">
                    <p className="myemail">mohamedniaissa21@gmail.com</p>

                </div>
    
                <div className="reseaux">
                        <a href="https://www.linkedin.com/in/mohamed-niaissa-10040a217/" target="_blank">
                            <img src="linkedin-logo.png" className="linkedin" alt="Profil linkedin" />
                        </a>
    
                        <a href="https://twitter.com/MohamedNiaissa" target="_blank">
                            <img src="twitter-sign.png" className="twitter" alt="Profil twitter" />
                        </a>
    
                        <a href="https://www.instagram.com/momo9.640/" target="_blank">
                            <img src="instagram.png" className="insta" alt="Profil instagram" />
                        </a>
                </div>
            </div>
        </footer>
   

        )
    }


export default Footer