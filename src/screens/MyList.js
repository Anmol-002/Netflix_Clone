import React from "react";
import Nav from "../Components/Nav";
import { FaPlay } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart, useDispatchCart } from "../Components/ContextReducer";
import Card from "../Components/Card";

function MyList() {
  let data = useCart();
  let dispatch = useDispatchCart();
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original";
  if (data.length === 0) {
    return (
      <div>
        <Nav />
        <div
          className="mylist"
          style={{ height: "100vh", textAlign: "center" }}
        >
          <h1>WatchList is Empty!</h1>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        // height: `{${length} ? "100%" : "100vh"}`,
        minHeight: "100vh",
        maxHeight: "100%",
        textAlign: "center",
        backgroundColor: "black",
      }}
    >
      <Nav />
      <div
        className="mylist"
        // style={{ height: `{${length} ? "100%" : "100vh"}` }}
      >
        <h1>WatchList </h1>
        <section className="work">
          {data.map((movie, index) => {
            return (
              <div className="graphic">
                <div className="contain">
                  <div className="image">
                    <img
                      src={`${base_url}${movie.poster_path}`}
                      alt={movie.name}
                    />
                  </div>
                  <div class="theory">
                    <div className="list__contents">
                      <button
                        className="buttons"
                        onClick={() => navigate("/trailer")}
                      >
                        <FaPlay style={{ paddingTop: "2px" }} /> {"  "}Play
                      </button>
                      <button
                        className="buttons"
                        onClick={() => {
                          dispatch({ type: "REMOVE", index: index });
                        }}
                      >
                        Delete from List
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default MyList;
