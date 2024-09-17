import axios from "axios";
import React, { useEffect, useState } from "react";
const Usefetchapi=(url)=>{

    const[data,setdata]=useState([]);

    const handlefetch=async()=>{

        let res=await axios.get(url);

        setdata(res.data);

    };

    useEffect(()=>{

        handlefetch()

    },[url]);

    
return{data};
};
export default Usefetchapi