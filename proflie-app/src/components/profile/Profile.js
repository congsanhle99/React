import React, { useState } from "react";
import { profileData } from "./profile-data";
import { FaTrashAlt } from "react-icons/fa";
import "./Profile.scss";

function Profile() {
  const [profiles, setProfiles] = useState(profileData);
  const [search, setSearch] = useState("");
  const onDelete = (id) => {
    const newUser = profiles.filter((x) => x.id !== id);
    setProfiles(newUser);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <section className="profile-sec">
        <div className="container">
          <h2 className="--text-light">Profile App</h2>
          <div className="--form-control">
            <input
              type="text"
              className="--width-100"
              onChange={handleSearch}
              value={search}
              placeholder="Enter search term..."
            />
          </div>
          {profiles
            .filter((value) => {
              if (search === "") {
                return value;
              } else if (value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return value;
              }
            })
            .map((profile) => (
              <div key={profile.id} className="profile --card --flex-between">
                <img src={profile.img} alt="profile img" />
                <div className="desc">
                  <h4 className="--text-light">Name: {profile.name}</h4>
                  <p className="--text-light">Job: {profile.job}</p>
                </div>
                <FaTrashAlt className="icon" size={24} onClick={() => onDelete(profile.id)}></FaTrashAlt>
              </div>
            ))}
        </div>
      </section>
    </>
  );
}

export default Profile;
