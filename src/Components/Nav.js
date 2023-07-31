import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons";
import { useNavigate } from "react-router-dom";
function Nav({ search, setsearch, searchData }) {
  const [show, handleshow] = useState(false);
  const navigate = useNavigate();
  const transitionNavBar = () => {
    if (window.scrollY > 50) {
      handleshow(true);
    } else {
      handleshow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div class="nav__contents">
        <div className="netflix">
          <img
            onClick={() => navigate("/")}
            className="nav__logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix"
          />
        </div>
        <div>
          <button className="mylist_button" onClick={() => navigate("/list")}>
            My List
          </button>
          <img
            onClick={() => navigate("/profile")}
            className="nav__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
