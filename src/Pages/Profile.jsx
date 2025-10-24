import React, { useState } from "react";
import { useAuth } from "../Contexts/useAuth";

const Profile = () => {
  const { user, updateUserProfile } = useAuth();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile({ displayName, photoURL });
    setEditing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="bg-linear-to-r from-green-200 via-blue-200 to-purple-300 shadow-md rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">My Profile</h1>

        <div className="flex flex-col items-center mb-4">
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="avatar"
            className="w-24 h-24 rounded-full border mb-2"
          />
          <p className="text-lg font-semibold">
            {user?.displayName || "No Name"}
          </p>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {!editing ? (
          <button
            onClick={() => setEditing(true)}
            className="btn btn-primary w-full"
          >
            Update Profile
          </button>
        ) : (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-gray-700">Display Name</label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700">Photo URL</label>
              <input
                type="text"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex gap-2">
              <button type="submit" className="btn btn-success flex-1">
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-outline flex-1"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
