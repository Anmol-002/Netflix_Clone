import React from "react";

import { useSelector } from "react-redux";
import Nav from "../Components/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../Firebase";
import PlansScreen from "./PlansScreen";
function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="body">
        <h1>Edit Profile </h1>
        <div className="info">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
            alt="avatar"
          />
          <div className="details">
            <h2>{user.email}</h2>
            <div className="plans">
              <h3>Plans</h3>
              <PlansScreen name={"Premium"} description={"4K + HDR"} />
              <PlansScreen name={"Basic"} description={"1080px "} />
              <PlansScreen name={"Standard"} description={"720px "} />
              <button
                onClick={() => {
                  auth.signOut();
                }}
                className="signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
