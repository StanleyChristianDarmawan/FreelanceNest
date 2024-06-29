import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Data from "./Data";
import IcpCoin from "../assets/icon/icp-token.png";
import Buttons from "./Buttons";

function Jobs() {
    const [items, setItems] = useState(Data);
    const menuItems = ["All", ...new Set(Data.map((val) => val.category))];
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/detailjob/${id}`);
    };

    const filterItems = (category) => {
        if (category === "All") {
            setItems(Data);
        } else {
            const filteredItems = Data.filter((item) => item.category === category);
            setItems(filteredItems);
        }
    };

    return (
        <div className="w-full h-full flex gap-12 flex-col mx-8">
            <div>
                <h1 className="text-white text-7xl font-bold font-sans">Seek and Find Your <br /> Freelancing Opportunities Here!</h1>
            </div>
            <div className="flex gap-4">
                {menuItems.map((category, index) => (
                    <button 
                        key={index} 
                        onClick={() => filterItems(category)} 
                        className="bg-black text-white px-4 py-2 rounded border border-white hover:bg-white hover:text-black"
                    >
                        {category}
                    </button>
                ))}
            </div>
            <Card item={items} onCardClick={handleCardClick} />
        </div>
    );
}

export default Jobs;
