import { createContext, useContext, useEffect } from "react";
import { reducer } from "../Reducer/reducer";
import { useReducer } from "react";
import axios from "axios";

const movieContext = createContext();

let initialstate = {
  movies: [],
  moviescategory: [],
  newmovies: [],
};

const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const getMovies = async () => {
    try {
      let movie = await axios.get(
        "https://65d0dfe7ab7beba3d5e3d412.mockapi.io/moives/application"
      );

      dispatch({ type: "SET_MOVIES", payload: movie.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <movieContext.Provider value={{ ...state }}>
      {children}
    </movieContext.Provider>
  );
};

// custom hook

const useMovie = () => {
  return useContext(movieContext);
};

export { MovieProvider, movieContext, useMovie };
