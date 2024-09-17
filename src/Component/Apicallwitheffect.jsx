import React, { useEffect, useState } from "react";

function Apicallwithreact(){

    const[count,setcount]=useState(0)

    const handlecount=()=>{

        setcount(count+1)
    }

    useEffect(()=>{

        console.log("chand");
        return()=>{

            console.log("Loged out");
            
        }
        
    },[count])

    return(

        <div>
        <h1>Chandran -{count}</h1>
        <propscomp  name={["dho","vir","roh"]}/>

        <button onClick={handlecount}>add</button>
        
        </div>
    )



}
export default Apicallwithreact 