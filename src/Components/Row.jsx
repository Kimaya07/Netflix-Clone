import { useEffect, useState } from "react";
import axios from "../api";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error(`Error fetching ${title}:`, error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const base_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="ml-5 text-white">
      <h2 className="text-xl md:text-2xl font-semibold mb-3">{title}</h2>
      
      <div className="flex overflow-y-hidden overflow-x-scroll space-x-2 p-5 scrollbar-hide">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`${
                  isLargeRow ? "max-h-64 md:max-h-80" : "max-h-28 md:max-h-36"
                } object-contain mr-2 transition-transform duration-450 hover:scale-110 cursor-pointer rounded-sm`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name || movie.title}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;