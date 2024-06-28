import React from "react";
import IcpCoin from "../assets/icon/icp-token.png"

function Card({item}){
    return(
        <div>
            <div className="flex gap-10 flex-wrap">
                {item.map((val) => (
                    <div key={val.id} className="w-64 h-80 bg-customLighterBlack rounded-md flex flex-wrap border border-white border-opacity-15 cursor-pointer">
                        <div className="flex w-full h-1/5 border-b border-b-white flex-row items-center gap-2">
                            <img src={val.img} alt="" className="w-16 ml-2"/>
                            <div className="flex flex-col mr-2">
                                <h2 className="font-sans text-customDarkerWhite font-semibold text-xl">{val.company}</h2>
                                <p className="font-sans font-normal text-customDarkerWhite">{val.category}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full h-4/5 mx-8 justify-evenly">
                            <p className="font-sans font-medium
                             text-customDarkerWhite text-lg">{val.title}</p>
                            <p className="font-sans font-normal text-customDarkerWhite text-sm">{val.desc}</p>
                            <p className="font-sans font-light text-customDarkerWhite text-xs">{val.status}</p>
                            <div className="flex flex-row items-center gap-2">
                                <img className="w-10" src={IcpCoin} alt="" />
                                <p className="font-sans text-customDarkerWhite font-semibold text-lg">{val.price}</p>
                            </div>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;