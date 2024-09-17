import React, { useState } from "react";

function Mydata() {

    const [data, setdata] = useState([

        {
            name: "Mahi",
            role: "captain",
            img: "https://cdn.britannica.com/25/222725-050-170F622A/Indian-cricketer-Mahendra-Singh-Dhoni-2011.jpg",
        },
        {
            name: "virat",
            role: "vice captain",
            img: "https://www.hindustantimes.com/static-content/1y/cricket-logos/players/virat-kohli.png",
        },
        {
            name: "rohit",
            role: "player",
            img: "https://static.toiimg.com/thumb/msid-111741230,width-1280,height-720,resizemode-4/111741230.jpg",
        },
    ]);
        return(
        <div>

            <h1>one Piece</h1>
            {data.map((ch) => (

                <div>
                    <img height={200} width={200} src={ch.img} />
                    <h1>
                        {ch.name} - {ch.role}
                        </h1>

                </div>
            ))}
        </div>
    );
}
export default Mydata;