import React, { useEffect, useState } from "react";

import axios from "../axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  console.log(movie);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movie.map((movie) => {
          return <Card key={movie.id} {...movie} />;
        })}
      </div>
    </div>
  );
}

export default Row;
