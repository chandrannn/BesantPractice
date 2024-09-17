import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";



function GroceryComp(){
    const [Grocerydata,setGrocerydata]=useState([])
    const [input,setinput]=useState("")

    const handlefetch= async ()=>{
        let res=await axios.get("http://localhost:3000/todoList")
        setGrocerydata(res.data)
        
    };
    useEffect(()=>{
        handlefetch()
    },[])
    const handleinput=(e)=>{
        setinput(e.target.value)
    }
    const handlepost=async()=>{
        let body={
            Grocery:input,
        };
        let post=await axios.post("http://localhost:3000/todoList",body)
        alert("success")
        handlefetch();

    
        
    };
    const handledelete= async(id)=>{
        console.log("delete fun",id);
        
        let de=await axios.delete(`http://localhost:3000/todoList/${id}`)
        handlefetch();
    };

        const handleedit=async(a)=>{
            
let rs=prompt("enter your text",Grocerydata[a].Grocery)

let body={
    id:Grocerydata[a].id,
    Grocery:rs
}
let update=await axios.put(`http://localhost:3000/todoList/${Grocerydata[a].id}`,body)
        handlefetch();
    };

return(
<div>
{/* http://localhost:3000/todoList */}
    <h1>Grocery List</h1>
    <input onChange={handleinput} placeholder="Enter Your Grocery Products" />

    
    <button onClick={handlepost}>Submit</button>


    {Grocerydata.map((da,i)=>(



<div>

<h2>
    {""}
    
    {i+1}.{da.Grocery}</h2>
    <span onClick={()=>handleedit(i)}><FaEdit /></span>
    <span onClick={()=>handledelete(da.id)}><RiDeleteBin6Line /></span>

</div>

    ))}
    

    
</div>

);
}

export default GroceryComp