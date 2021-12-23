import React from "react";
import '../css/competances.css'

class Competances extends React.Component{

    render(){
        return(
            <div className="competances">
                <h2 className="classtitleskills">Compétences</h2>

                <div className="container">

                <div className="front">
                    <h3>Front</h3>
        
                    <ul>
                        <li className="HTML">
                            <span>HTML</span>
                                <div className="styleproghtml">
                                    <div className="progressionHtml">
                                        <span className="pourcentHtml">90%</span>
                                </div>
                            </div>
                        </li>
                        <li className="CSS">
                            <span>CSS</span>
                            <div className="styleprogcss">
                                    <div className="progressionCss">
                                        <span className="pourcentCss">80%</span>
                                </div>
                            </div>
                        </li>
                        <li className="JS">
                            <span>JavaScript</span>
                            <div className="styleprogjs">
                                    <div className="progressionJs">
                                        <span className="pourcentJs">60%</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div className="back">
                    <h3>Back</h3>
        
                    <ul>
                        <li className="python">
                            <span>Python</span>
                            <div className="notePython">
                                <div className="note1"></div>
                                <div className="note2"></div>
                                <div className="note3"></div>
                                <div className="note4"></div>
                                <div className="note5"></div>
                            </div>
                        </li>
                        <li className="java">
                            <span>Java</span>
                            <div className="noteJava">
                                <div className="note1"></div>
                                <div className="note2"></div>
                                <div className="note3"></div>
                                <div className="note4"></div>
                                <div className="note5"></div>
                            </div>
                        </li>
                        <li className="C">
                            <span>C</span>
                            <div className="noteC">
                                <div className="note1"></div>
                                <div className="note2"></div>
                                <div className="note3"></div>
                                <div className="note4"></div>
                                <div className="note5"></div>
                            </div>
                        </li>
                    </ul>
                </div>
        
                <div className="autre">
                    <h3>Autre</h3>
        
                    <ul>
                        <li className="figma">
                            <span>Figma</span>
                            <div className="noteFigma">
                                <div className="note1"></div>
                                <div className="note2"></div>
                                <div className="note3"></div>
                                <div className="note4"></div>
                                <div className="note5"></div>
                            </div>
                        </li>
                        <li className="anglais">
                            <span>Anglais(B2)</span>
                            <div className="noteAnglais">
                                <div className="note1"></div>
                                <div className="note2"></div>
                                <div className="note3"></div>
                                <div className="note4"></div>
                                <div className="note5"></div>
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