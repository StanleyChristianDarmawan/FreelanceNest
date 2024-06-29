import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Element from "./Element";

function Sidebar(props) {
    const [activeMenu, setActiveMenu] = useState(0); // State untuk melacak menu aktif

    // Load active menu from localStorage when the component mounts
    useEffect(() => {
        const savedActiveMenu = localStorage.getItem('activeMenu');
        if (savedActiveMenu !== null) {
            setActiveMenu(parseInt(savedActiveMenu, 10));
        }
    }, []);

    const handleMenuClick = (index, event) => {
        if (!event.ctrlKey) {
            setActiveMenu(index); // Fungsi untuk mengatur menu aktif saat tombol diklik
            localStorage.setItem('activeMenu', index); // Save the active menu to localStorage
        }
    };

    return (
        <>
            <aside className="h-screen fixed">
                <nav className="h-full w-64 p-3.5 flex flex-col items-center rounded-tr rounded-br justify-between bg-customBlack border-r border-r-white border-opacity-25">
                    <div className="w-64 p-3.5">
                        <div className="h-12 w-full border-b border-b-white">
                            <h2 className="text-white text-lg">FreelanceNest</h2>
                        </div>
                        <div className="h-auto w-full flex flex-col gap-2 mt-5">
                            <Link to="home" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 0 ? 'bg-customGray' : ''}`} onClick={(e) => handleMenuClick(0, e)}>
                                <img src={Element[0].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 0 ? 'opacity-100' : 'opacity-70'}`} />
                                <h3 className={`text-white text-xl font-medium ${activeMenu === 0 ? 'opacity-100' : 'opacity-70'}`}>{Element[0].menu}</h3>
                            </Link>

                            <Link to="jobs" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 1 ? 'bg-customGray' : ''}`} onClick={(e) => handleMenuClick(1, e)}>
                                <img src={Element[1].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 1 ? 'opacity-100' : 'opacity-70'}`} />
                                <h3 className={`text-white text-xl font-medium ${activeMenu === 1 ? 'opacity-100' : 'opacity-70'}`}>{Element[1].menu}</h3>
                            </Link>

                            <Link to="project" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 3 ? 'bg-customGray' : ''}`} onClick={(e) => handleMenuClick(3, e)}>
                                <img src={Element[3].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 3 ? 'opacity-100' : 'opacity-70'}`} />
                                <h3 className={`text-white text-xl font-medium ${activeMenu === 3 ? 'opacity-100' : 'opacity-70'}`}>{Element[3].menu}</h3>
                            </Link>

                            <Link to="profile" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray ${activeMenu === 2 ? 'bg-customGray' : ''}`} onClick={(e) => handleMenuClick(2, e)}>
                                <img src={Element[2].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 2 ? 'opacity-100' : 'opacity-70'}`} />
                                <h3 className={`text-white text-xl font-medium ${activeMenu === 2 ? 'opacity-100' : 'opacity-70'}`}>{Element[2].menu}</h3>
                            </Link>

                        </div>
                    </div>
                    <div className="h-auto w-full self-end border-t border-t-white">
                        <Link to="logout" className={`w-full h-16 flex items-center gap-2.5 rounded-lg hover:bg-customGray active:bg-customDarkerGray mt-2 ${activeMenu === 4 ? 'bg-customGray' : ''}`} onClick={(e) => handleMenuClick(4, e)}>
                            <img src={Element[4].icon} alt="icon" className={`ml-4 w-7 ${activeMenu === 4 ? 'opacity-100' : 'opacity-70'}`} />
                            <h3 className={`text-white text-xl font-medium ${activeMenu === 4 ? 'opacity-100' : 'opacity-70'}`}>{Element[4].menu}</h3>
                        </Link>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
