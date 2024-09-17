import React, { useState } from "react";
import "./BP.css";

function BirthdayProject() {

    const [Bdaylist, setBdaylist] = useState([
       

        {
            No: 1,
            Name: "Undertaker",
            Age: 59,
            image: "https://assets-global.website-files.com/63bb7d51076d755de475e3a3/66236934b46e97fb33da6780_63be73060d178c0717c74e2b_49-The-Undertaker.jpeg",
        },
        {
            No: 2,
            Name: "Kane",
            Age: 57,
            image: "https://www.wwe.com/f/styles/gallery_img_l/public/all/2021/03/001_RAW_10201998_0053--0ccfff7166ac18aa306c84416e22d263.jpg",
        },
        {
            No: 3,
            Name: "Randy Ortan",
            Age: 44,
            image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Randy_Orton_08.jpg",
        },
        {
            No: 4,
            Name: "Rey",
            Age: 49,
            image: "https://m.media-amazon.com/images/M/MV5BNGRhNmFhNjQtMGEwNi00NWZiLTk2NzAtNjVlMWU3MWJjMDczXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        },
        {
            No: 5,
            Name: "John cena",
            Age: 47,
            image:"https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/07/John-Cena-13.jpg?size=*:900.jpg",
        },


    ]);
    
    const handleclear=()=>{
        setBdaylist([])
    }


    return(

        <div>
            <h1>{Bdaylist.length} Birthday List</h1>
            
            {Bdaylist.map((da) => (

                <div>
                    <img className="img" src={da.image} />
                    <h2>{da.Name}-{da.Age} years</h2>
                    

                </div>

            ))}
            <button onClick={handleclear}>Clear all</button>
        </div>
        
    );
}
export default BirthdayProject