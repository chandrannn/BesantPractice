import React, { useState } from "react";

function Apicall(){
    const [apidata,setapidata]=useState([])



    const handlefetch= async()=>{
        let res =await fetch("https://jsonplaceholder.typicode.com/todos")
        let data=await res.json()
        console.log(data);
        setapidata(data)
        
    }

    return(
        <div>

            <h1>Api call</h1>
            <button onClick={handlefetch}>Click</button>
            {apidata.map((da)=>(
            <div>

                <h1>{da.title}</h1>
                <h1>{da.price}</h1>

<img src={da.image} />

                </div>
            ))}
        </div>
    )
}
export default Apicall