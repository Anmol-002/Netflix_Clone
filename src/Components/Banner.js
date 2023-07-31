import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import axios from "../axios";
import requests from "../Requests/Requests";
import { useNavigate } from "react-router-dom";

function Banner() {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fectchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fectchData();
  }, []);

  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button
            className="banner__button"
            onClick={() => navigate("/trailer")}
          >
            <FaPlay style={{ paddingTop: "2px" }} /> {"  "}Play
          </button>
          <button className="banner__button" onClick={() => navigate("/list")}>
            My List
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
