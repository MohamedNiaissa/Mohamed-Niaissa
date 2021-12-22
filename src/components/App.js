import React from "react";
import Header from "./Header";
import Presentation from "./Presentation";
import Formation from "./Formation";
import Competances from "./Competances";
import Realisation from "./Realisation";
import Slideshow from './Slide';


class Pageweb extends React.Component{
    render(){
        return(

            <>

                <Header />
                <Presentation />
                <Formation />
                <Competances />
                <Realisation />

                <Slideshow />

            </>
        )
    }

}




export default Pageweb