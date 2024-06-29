import React, { useState } from "react";

function Logout() {
    const [confirm, setConfirm] = useState(true); // Langsung menampilkan pertanyaan
    const [logoutAllDevices, setLogoutAllDevices] = useState(false);

    const handleLogout = () => {
        // Logika untuk logout
        console.log("User logged out");
        if (logoutAllDevices) {
            console.log("Logged out from all devices");
        }
    };

    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <div className="bg-black p-60 rounded shadow-md w-300 flex flex-col justify-center items-center"> {/* Perbesar padding dan lebar */}
                <h1 className="text-8xl font-bold mb-16 text-white">Are you sure?</h1> {/* Perbesar ukuran teks */}
                <p className="mb-16 text-white text-4xl">Please confirm if you want to logout</p> {/* Perbesar ukuran teks */}
                <div className="flex gap-16"> {/* Perbesar jarak antar tombol */}
                    <button 
                        onClick={() => setConfirm(false)} 
                        className="bg-black text-white text-lg py-8 px-16 rounded border border-white hover:bg-white hover:text-black"
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleLogout} 
                        className="bg-black text-white text-lg py-8 px-16 rounded border border-white hover:bg-white hover:text-black"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Logout;