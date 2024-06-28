import React from "react";

function Buttons({menuItems}){
    return(
        <div>
            <div className="flex flex-row gap-4">
                <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black">All Project</button>
                <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black">Website Development</button>
                <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black">Graphic Design</button>
                <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black">Video Editing</button>
                <button className="border-2 border-white text-white font-sans p-1 rounded-md hover:bg-white hover:text-black">Other</button>
            </div>
        </div>
    );
};

export default Buttons;