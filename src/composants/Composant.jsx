import React from "react";
import { useState,useEffect } from "react";

function Composant({name,age}){
   let [nom,setnom]=useState(0)

   let changer=()=>{    
       setnom(nom + 1);
   }


   useEffect(()=>{    
    document.querySelector("h2").innerHTML=` ${nom}`
  
}       )

return(
   

<>
<h2>allasam </h2>
<h1 >je suis {name} j'ai {age} ans tu peux m'appeler {nom} </h1>

<button onClick={changer}>modifier</button>
</>

)
}
export default Composant;

