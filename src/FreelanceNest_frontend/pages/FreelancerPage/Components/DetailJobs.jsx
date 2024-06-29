import React from "react";
import { useParams, useNavigate } from "react-router-dom"; // Ganti useHistory dengan useNavigate
import Data from "./Data"; // Ganti dengan data yang Anda gunakan
import PP from "../assets/icon/profile-removebg-preview.png";
import IcpCoin from "../assets/icon/icp-token.png"; // Pastikan path ini benar

function DetailJobs() {
  const { id } = useParams();
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const job = Data.find((item) => item.id === parseInt(id));

  if (!job) return <div>Job not found</div>;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border border-white p-16 rounded-lg bg-customBlack w-4/5 mx-auto max-w-4xl"> {/* Ubah w-3/5 menjadi w-4/5 */}
        <div className="flex items-center mb-12">
          <img src={PP} alt="Company Logo" className="w-48 h-48 mr-12" /> {/* Perbesar ukuran gambar */}
          <div>
            <h2 className="text-6xl font-sans font-bold text-white">{job.company}</h2> {/* Perbesar ukuran teks */}
            <p className="text-gray-600 text-3xl">{job.category}</p> {/* Perbesar ukuran teks */}
          </div>
        </div>
        <p className="ml-4 mb-6 font-sans text-white text-3xl">{job.desc}</p> {/* Perbesar ukuran teks */}
        <p className="ml-4 mb-6 font-sans text-white text-3xl">{job.status}</p> {/* Perbesar ukuran teks */}
        <p className="ml-4 mb-6 font-sans text-white text-3xl">{job.selectionPhase}</p> {/* Perbesar ukuran teks */}
        <p className="ml-4 mb-6 font-sans text-white text-3xl">{job.appliedFreelancers} 12 Freelancers has applied</p> {/* Perbesar ukuran teks */}
        <div className="flex items-center mb-12 ml-5">
          <h3 className="text-7xl font-bold text-white">{job.price}</h3> {/* Perbesar ukuran teks */}
          <img src={IcpCoin} alt="ICP Coin" className="w-20 h-20 ml-6" /> {/* Perbesar ukuran gambar */}
        </div>
        <button className="bg-black border-white border hover:bg-white hover:text-black text-white py-4 px-8 rounded-lg w-full text-xl">APPLY</button> {/* Perkecil ukuran tombol */}
        <button 
          className="bg-black border-white border hover:bg-white hover:text-black text-white py-4 px-8 rounded-lg w-full text-xl mt-4" // Perkecil ukuran tombol
          onClick={() => navigate('/jobs')}
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default DetailJobs;