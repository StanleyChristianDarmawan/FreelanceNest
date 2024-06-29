import React, { useState, useRef } from "react";
import Statistics from "./Statistics";
import PP from "../assets/icon/profile-removebg-preview.png";
import { FaCamera } from "react-icons/fa"; // Pastikan Anda sudah menginstal react-icons
import IcpCoin from "../assets/icon/icp-token.png"


const Profile = () => {
  const [bio, setBio] = useState("Lorem ipsum dolores...");
  const [links, setLinks] = useState(["Link 1", "Link 2", "Link 3"]);
  const [profilePhoto, setProfilePhoto] = useState(PP);
  const [isEditing, setIsEditing] = useState(false);

  const fileInputRef = useRef(null);

  const handleBioChange = (e) => {
    setBio(e.target.value);
  };

  const handleLinkChange = (e, index) => {
    const newLinks = [...links];
    newLinks[index] = e.target.value;
    setLinks(newLinks);
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageClick = () => {
    if (isEditing) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center rounded-md bg-black">
      <div className="w-1/2 p-6 shadow-md rounded-lg">
        <div className="flex flex-col items-start h-full">
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-48 h-48 rounded-full cursor-default"
                onClick={handleImageClick}
              />
              {isEditing && (
                <>
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 cursor-pointer"
                    onClick={handleImageClick}
                  >
                    <FaCamera className="text-white text-3xl" />
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                </>
              )}
            </div>
            <h2 className="font-sans text-4xl text-white font-bold">George Hansel</h2>
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
          <div className="mt-6 flex w-full justify-between">
            {isEditing ? (
              <button
                className="border-white border w-32 hover:bg-white hover:text-black font-medium text-white p-4 rounded-lg text-xl"
                onClick={() => setIsEditing(false)}
              >
                Save
              </button>
            ) : (
              <button
                className="border-white border w-44 hover:bg-white hover:text-black font-medium text-white p-4 rounded-lg text-xl"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
            <div className="flex justify-center items-center text-white">
              <p className="text-lg flex items-center gap-2">Your Balance:<img className="w-6 h-6" src={IcpCoin} alt="" />500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
