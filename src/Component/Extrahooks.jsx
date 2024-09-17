import React, { useEffect, useLayoutEffect, useRef } from "react"; 

function Extrahooks(){



    const inputref=useRef(null)
    useEffect(()=>{
        inputref.current.focus()
    },[])

    useEffect(()=>{
console.log(useEffect);

    },[])

    useLayoutEffect(()=>{
        console.log(useLayoutEffect);
        
    })

return(
    <div>
        <h1>useref</h1>
        <input ref={inputref} placeholder='Enter your name' />
        <button>add</button>
    </div>
)

}
export default Extrahooks