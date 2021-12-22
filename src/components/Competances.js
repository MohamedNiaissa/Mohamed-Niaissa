import React from "react";
import '../css/competances.css'

class Competances extends React.Component{

    render(){
        return(
            <div class="competances">
                <h2 id ="titleskills">Compétances</h2>

                <div className="container">

                <div class="front">
                    <h3>Front</h3>
        
                    <ul>
                        <li class="HTML">
                            <span>HTML</span>
                            <div class="noteHTML">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                        <li class="CSS">
                            <span>CSS</span>
                            <div class="noteCSS">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                        <li class="JS">
                            <span>JavaScript</span>
                            <div class="noteJavaScript">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div class="back">
                    <h3>Back</h3>
        
                    <ul>
                        <li class="python">
                            <span>Python</span>
                            <div class="notePython">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                        <li class="java">
                            <span>Java</span>
                            <div class="noteJava">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                        <li class="C">
                            <span>C</span>
                            <div class="noteC">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div class="autre">
                    <h3>Autre</h3>
        
                    <ul>
                        <li class="figma">
                            <span>Figma</span>
                            <div class="noteFigma">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                        <li class="anglais">
                            <span>Anglais(B2)</span>
                            <div class="noteAnglais">
                                <div class="note1"></div>
                                <div class="note2"></div>
                                <div class="note3"></div>
                                <div class="note4"></div>
                                <div class="note5"></div>
                            </div>
                        </li>
                    </ul>
                </div>

                </div>
        
                
        </div>
        )
    }


}


export default Competances