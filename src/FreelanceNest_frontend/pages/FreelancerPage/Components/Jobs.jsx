import React, { useState } from "react";
import Card from "./Card";
import Data from "./Data"
import IcpCoin from "../assets/icon/icp-token.png"
import Buttons from "./Buttons"

function Jobs() {
    const [item, setItems] = useState(Data)
    const menuItems =[...new Set(Data.map((val) => val.category))]
    return (
        <div className="w-full h-full flex gap-12 flex-col mx-10">
            <div>
                <h1 className="text-white text-7xl font-bold font-sans">Seek and Find Your <br /> Freelancing Opportunities Here!</h1>
            </div>
            <Buttons />
            <Card item={item}/>
        </div>
  );
}

export default Jobs;
