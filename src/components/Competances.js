import React from "react";
import '../css/competances.css'

const Competances = () => {

        return(
            <div className="competances">
                <h2 className="classtitleskills" id="titleskills">Compétences</h2>

                <div className="container">

                    <div data-aos="fade" className="front">
                        <h3>Front</h3>
            
                        <ul>
                            <li className="HTML">
                                <span>HTML</span>
                                <div className="noteHTML">
                                    <div className="styleproghtml">
                                        <div className="progressionHtml">
                                            <span className="pourcentHtml">90%</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="CSS">
                                <span>CSS</span>
                                <div className="noteCSS">
                                    <div className="styleprogcss">
                                            <div className="progressionCss">
                                                <span className="pourcentCss">80%</span>
                                            </div>
                                        </div>
                                </div>
                            </li>
                            <li className="React">
                                <span>ReactJS</span>
                                <div className="noteReact">
                                    <div className="styleprogReact">
                                        <div className="progressionReact">
                                            <span className="pourcentReact">40%</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div  data-aos="fade" className="back">
                        <h3>Back</h3>
            
                        <ul>
                            <li className="python">
                                <span>Python</span>
                                <div className="notePython">
                                <div className="styleprogPy">
                                    <div className="progressionPy">
                                        <span className="pourcentPy">70%</span>
                                    </div>
                                </div>
                                </div>
                            </li>
                            <li className="java">
                                <span>Java</span>
                                <div className="noteJava">
                                    <div className="styleprogJa">
                                        <div className="progressionJa">
                                            <span className="pourcentJa">65%</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="JS">
                                <span>JavaScript</span>
                                <div className="noteJavaScript">
                                    <div className="styleprogJs">
                                        <div className="progressionJs">
                                            <span className="pourcentJs">60%</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            
                    <div  data-aos="fade" className="autre">
                        <h3>Autre</h3>
            
                        <ul>
                            <li className="figma">
                                <span>Figma</span>
                                <div className="noteFigma">
                                <div className="styleprogFig">
                                    <div className="progressionFig">
                                        <span className="pourcentFig">55%</span>
                                    </div>
                                </div>                        
                                </div>
                            </li>
                            <li className="anglais">
                                <span>Anglais(B2)</span>
                                <div className="noteAnglais">
                                    <div className="styleprogAng">
                                        <div className="progressionAng">
                                            <span className="pourcentAng">40%</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }





export default Competances