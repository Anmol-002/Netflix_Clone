import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart, useDispatchCart } from "./ContextReducer";
function Card({ id, poster_path, name }) {
  const [buttonText, setButtonText] = useState("Add to List");
  let dispatch = useDispatchCart();
  let data = useCart();
  const navigate = useNavigate();
  const [css, setcss] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";

  // let timeout;
  let isAddedToList = data.some((item) => item.id === id);
  const handleCart = async () => {
    if (!isAddedToList) {
      await dispatch({
        type: "ADD",
        id: id,
        title: name,
        poster: poster_path,
      });
    }
    console.log(data);
  };
  useEffect(() => {
    isAddedToList = data.some((item) => item.id === id);
    if (isAddedToList) {
      setButtonText("Added to List");
    }
  });

  return (
    <div className="graphic">
      <div
        className="contain_new"
        onMouseOver={() => setcss(true)}
        onMouseOut={() => setcss(false)}
      >
        <div className="image_new">
          {css ? (
            <img
              src={`${base_url}${poster_path}`}
              alt={name}
              style={{ height: "220px", width: "190px" }}
            />
          ) : (
            <img
              src={`${base_url}${poster_path}`}
              alt={name}
              style={{ height: "260px", width: "190px" }}
            />
          )}
        </div>

        <div class="theory_new">
          <div className="list__contents">
            <button className="buttons" onClick={() => navigate("/trailer")}>
              <FaPlay style={{ paddingTop: "2px" }} /> {"  "}Play
            </button>
            <button className="buttons" onClick={handleCart}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
