import React, { useState} from "react";
import { Link } from "react-router-dom";
import Element from "./Element";

function Sidebar(props){
    const [activeMenu, setActiveMenu] = useState(0); // State untuk melacak menu aktif

    const handleMenuClick = (index) => {
      setActiveMenu(index); // Fungsi untuk mengatur menu aktif saat tombol diklik
    };
    return(
        <>
        <aside className="h-screen fixed">
            <nav className="h-full w-64 p-3.5 flex flex-col items-center rounded-tr rounded-br justify-between bg-customBlack border-r border-r-white border-opacity-25">
                <div className="w-64 p-3.5">
                    <div className="h-12 w-full border-b border-b-white">
                        <h2 className="text-white text-lg">FreelanceNest</h2>
                    </div>
                    <div className="h-auto w-full flex flex-col gap-2 mt-5">

                        <Link to="" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 0 ? 'bg-customGray' : ''}`}onClick={() => handleMenuClick(0)}>
                            <img src={Element[0].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 0 ? 'opacity-100' : 'opacity-70'}`}/>
                            <h3 className={`text-white text-xl font-medium ${activeMenu === 0 ? 'opacity-100' : 'opacity-70'}`}>{Element[0].menu}</h3>
                        </Link>

                        <Link to="jobs" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 1 ? 'bg-customGray' : ''}`}onClick={() => handleMenuClick(1)}>
                            <img src={Element[1].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 1 ? 'opacity-100' : 'opacity-70'}`}/>
                            <h3 className={`text-white text-xl font-medium ${activeMenu === 1 ? 'opacity-100' : 'opacity-70'}`}>{Element[1].menu}</h3>
                        </Link>
                        
                        <Link to="profile" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 2 ? 'bg-customGray' : ''}`}onClick={() => handleMenuClick(2)}>
                            <img src={Element[2].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 2 ? 'opacity-100' : 'opacity-70'}`}/>
                            <h3 className={`text-white text-xl font-medium ${activeMenu === 2 ? 'opacity-100' : 'opacity-70'}`}>{Element[2].menu}</h3>
                        </Link>

                    </div>
                </div>
                <div className="h-auto w-full self-end border-t border-t-white">

                    <Link to="logout" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray mt-2 ${activeMenu === 3 ? 'bg-customGray' : ''}`}onClick={() => handleMenuClick(3)}>
                        <img src={Element[3].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 3 ? 'opacity-100' : 'opacity-70'}`}/>
                        <h3 className={`text-white text-xl font-medium ${activeMenu === 3 ? 'opacity-100' : 'opacity-70'}`}>{Element[3].menu}</h3>
                    </Link>

                </div>
            </nav>
        </aside>
        </>
    );
};

export default Sidebar;