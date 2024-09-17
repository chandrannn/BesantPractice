import React, { useState } from "react";
function propscomp(){

const [datas,setdatas]=useState(props.names)
    return(

        <div>

            {datas.map((d)=>(
<h1>{d}</h1>
                
            ))}
        </div>
    )
}
export default propscomp