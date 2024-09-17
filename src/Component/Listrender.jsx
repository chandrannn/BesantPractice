import React, { useState } from "react";

function Listrender(){



    const Studentsdetails=[

        {
            name:"Chandran",
            age:25,
        },
        {
            name:"vasu",
            age:25,
            
        },
        {
            name:"naresh",
            age:25,
        },

    ];


    const [student,setstudent]=useState(Studentsdetails)
    return(

<div>
<h1>List</h1>
<ol>

{student.map((data)=>{
<li>{data.name}--{data.age}
</li>

})}
</ol>


</div>

    );
}
export default Listrender