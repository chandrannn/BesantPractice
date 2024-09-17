import React, { useState } from "react";
function NameChange(){

    const[name,setname]=useState("Virat")
    const handlename=()=>{

        setname("Dhoni")

        if(name=="Dhoni"){

setname("Virat")
        }else{
            setname("Dhoni")
        }
    }
    

    return(

<div>


<h1>Name: {name}</h1>

<button onClick={handlename}>Name Change</button>
</div>



    )
}
export default NameChange