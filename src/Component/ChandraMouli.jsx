import React, { useState } from "react";
import VickyVignesh from "./VickyVignesh";
function ChandraMouli (){

    // hook-it is imbuild react js function
    // state hook -starting useState-using data'S Storage

    const [count,setCount]= useState(0)

    const handleadd=()=>{
setCount(count+1)
    };



    return(
        <>
<h1> Cricket Player:Dhoni</h1>

<VickyVignesh/>

<h2>Trophy Count-{count}</h2>

<button onClick={handleadd}>Add Trophy List</button>
</>
    )
}
export default ChandraMouli