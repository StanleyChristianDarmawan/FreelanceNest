import React from "react";

function Project() {
    const project = {
        name: "Project Name",
        status: "Ongoing",
        description: "Project Description",
        price: "10 ICP"
    };

    const appliedProjects = [
        { id: 1, name: "Applied Project 1", status: "Pending" },
        { id: 2, name: "Applied Project 2", status: "Pending" },
        // Tambahkan lebih banyak proyek yang telah diaplikasikan jika diperlukan
    ];

    return (
        <div className="w-full h-full flex flex-col items-center justify-center font-sans">
            <div className="border border-white p-8 rounded-lg bg-black w-4/5 mx-auto max-w-4xl mb-8">
                <h1 className="text-4xl font-bold mb-4 text-white">PROJECTS</h1>
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white">{project.name}</h2>
                    <p className="text-green-500 text-xl">Status: {project.status}</p>
                </div>
                <div className="border border-white p-4 mb-8 flex justify-between items-center">
                    <p className="text-xl text-white">{project.description}</p>
                    <p className="text-xl text-white">{project.price}</p>
                </div>
                <button className="bg-black border border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded w-full text-xl">
                    SUBMIT WORK
                </button>
            </div>
            <div className="w-4/5 mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-white">APPLIED</h2>
                <p className="text-xl mb-4 text-white">You have ({appliedProjects.length}) Pending Applications</p>
                {appliedProjects.map((appliedProject) => (
                    <div key={appliedProject.id} className="border border-white p-4 mb-4 rounded-lg bg-black">
                        <h3 className="text-xl font-bold text-white">{appliedProject.name}</h3>
                        <p className="text-green-500 text-lg">Status: {appliedProject.status}</p>
                    </div>
                ))}
                <button className="bg-black border border-white hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded text-xl">
                    View
                </button>
            </div>
        </div>
    );
}

export default Project;