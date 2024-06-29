import React, { useState } from "react";
import Statistics from "./Statistics";
import PP from "../assets/icon/profile-removebg-preview.png";

const Profile = () => {
  const [bio, setBio] = useState("Lorem ipsum dolores...");
  const [links, setLinks] = useState(["Link 1", "Link 2", "Link 3"]);
  const [isEditing, setIsEditing] = useState(false);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleLinkChange = (e, index) => {
    const newLinks = [...links];
    newLinks[index] = e.target.value;
    setLinks(newLinks);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full h-full flex rounded-md bg-black">
      <div className="w-1/2 p-6 shadow-md rounded-lg">
        <div className="flex flex-col items-start h-full">
          <div className="flex items-center mb-6">
            <img src={PP} alt="Profile" className="w-48 h-48 rounded-full" />
            <h2 className="font-sans text-4xl text-white font-bold ml-4">George Hansel</h2>
          </div>
          <div className="w-full">
            <h3 className="text-2xl text-white font-semibold mb-4">BIO</h3>
            {isEditing ? (
              <textarea
                className="w-full h-56 bg-gray-200 p-4 rounded-lg resize-none mb-0"
                value={bio}
                onChange={handleBioChange}
              />
            ) : (
              <p className="w-full h-56 bg-gray-200 p-4 rounded-lg overflow-auto mb-1.5">{bio}</p>
            )}
          </div>
          <div className="w-full mt-6">
            <h3 className="text-2xl text-white font-semibold mb-4">SOCIAL ACCOUNTS</h3>
            {isEditing ? (
              <div className="flex flex-col">
                {links.map((link, index) => (
                  <input
                    key={index}
                    className="bg-gray-200 p-4 mb-4 rounded-lg text-lg"
                    value={link}
                    onChange={(e) => handleLinkChange(e, index)}
                  />
                ))}
              </div>
            ) : (
              <ul className="list-none">
                {links.map((link, index) => (
                  <li key={index} className="bg-gray-200 p-4 mb-4 rounded-lg text-lg">
                    {link}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-6">
            {isEditing ? (
              <button
                className="border-white border w-32 hover:bg-white hover:text-black font-medium text-white p-4 rounded-lg text-xl"
                onClick={handleSaveClick}
              >
                Save
              </button>
            ) : (
              <button
                className="border-white border w-44 hover:bg-white hover:text-black font-medium text-white p-4 rounded-lg text-xl"
                onClick={handleEditClick}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 p-6 bg-customLighterBlack border border-white border-opacity-25 m-8 shadow-md rounded-lg ml-4">
        <Statistics />
      </div>
    </div>
  );
};

export default Profile;
