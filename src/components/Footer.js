import React from "react";
import '../css/footer.css'
class Footer extends React.Component{
    render(){
        return(

        <footer>

            <div class="cadrefooter"></div>
                <h3 id="titlecontact"> Contactez-moi</h3>
                <p id="recherche">
                Actuellement à la recherche d’un stage et d'une alternance <br /> pour l'année 2022
                </p>
                <div class="mail">
                <img src="email.png" class="email" alt="logo email" />
                <div class="encadremail">
                    
                </div>
                <p class="myemail">mohameddrame907@gmail.com</p>
    
                <div class="reseaux">
                        <a href="https://www.linkedin.com/in/mohamed-niaissa-10040a217/" target="_blank">
                            <img src="linkedin-logo.png" class="linkedin" alt="Profil linkedin" />
                        </a>
    
                        <a href="https://twitter.com/MohamedNiaissa" target="_blank">
                            <img src="twitter-sign.png" class="twitter" alt="Profil twitter" />
                        </a>
    
                        <a href="https://www.instagram.com/momo9.640/" target="_blank">
                            <img src="instagram.png" class="insta" alt="Profil instagram" />
                        </a>
                </div>
            </div>
        </footer>
   

        )
    }
}

export default Footer