import React from "react";
import { useParams } from "react-router-dom";
import Data from "./Data"; // Ganti dengan data yang Anda gunakan

function DetailJobs() {
  const { id } = useParams();
  const job = Data.find((item) => item.id === parseInt(id));

  if (!job) return <div>Job not found</div>;

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.desc}</p>
      {/* Tampilkan detail pekerjaan lainnya sesuai kebutuhan Anda */}
    </div>
  );
}

export default DetailJobs;
