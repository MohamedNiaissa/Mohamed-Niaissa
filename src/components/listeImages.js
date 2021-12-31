

let url = (indeximg) => {

    if(indeximg == 0){
        return 'https://mohamedniaissa.github.io/quizz/'
    }else if(indeximg == 1) {
        return 'https://mohamedniaissa.github.io/portfolioclone/'
    }else if(indeximg == 2){
        return 'https://github.com/MohamedNiaissa/Projet_java?organization=MohamedNiaissa&organization=MohamedNiaissa'
    }else if(indeximg == 3){
        return 'https://github.com/MohamedNiaissa/ProjetJavaAv'
    }else if(indeximg == 4){
        return 'https://github.com/MohamedNiaissa/chiffrelettres-dcedl-david-mohamed-angel-kevin'
    }else if(indeximg == 5){
        return 'https://mohamedniaissa.github.io/pfs/'
    }else if(indeximg == 6){
        return 'https://mohamedniaissa.github.io/Formulaire/'
    }

}
      

const Constimgs = () =>{


    const images = [
      'accueilquiz.png',
      'Portfolio.png',
      'Battle.png',
      'JavaFx.png',
      'CDL.png',
      'pfs.png',
      'Formulaire.png'
  
    ];
  
    <>
    <p>blablaaaaaaa</p>
    <div className="slide-container-listeimgs slide-container">
  
      {
        images.map((each, index) => <a href={url(index)} target="_blank"><img key={index} style={{width: "100%"}} src={each} /> </a> )
       
      }
  </div>
  </>
  }

  export default Constimgs;