import React, { useState } from "react";
function Inputcomp() {

    const [inputname, setinputname] = useState("")
    const [inputEmailID, setEmailID] = useState("")
    const [inputContactNumber, setinputContactNumber] = useState("")
    const [inputQualification, setQualification] = useState("")
    const [inputAddress, setAddress] = useState("")




    const handleinput = (e) => {
        setinputname(e.target.value)


    }

    const handleEmailID = (v) => {
        setEmailID(v.target.value)
    }


    const handleContactNumber = (n) => {
        setinputContactNumber(n.target.value)
    }

    const handleAddress = (t) => {
        setAddress(t.target.value)
    }
    const handleQualification = (s) => {
        setQualification(s.target.value)
    }

    return (

        <div>

            <h1>Name:{inputname}</h1>
            <input onChange={handleinput} placeholder='Enter your name' />

            <br />
            <br />

            <h2>Email ID:{inputEmailID}</h2>
            <input onChange={handleEmailID} placeholder='Enter your email id' />
            <br />
            <br />

            <h3>Contact Number:{inputContactNumber}</h3>
            <input onChange={handleContactNumber} placeholder='Enter your contact number' />
            <br />
            <br />

            <h4>Qualification:{inputQualification}</h4>
            <input onChange={handleQualification} placeholder="Enter your qualification" />

            <br />
            <br />

            <h5>Address:{inputAddress}</h5>
            <input onChange={handleAddress} placeholder='Enter your address'/>



        </div>
    )
}
export default Inputcomp