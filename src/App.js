import "./App.css";
import Navbars from "./Component/Navbars/Navbar";
import { movieContext, useMovie } from "./Context/MovieContext";
import { Route, Routes } from "react-router-dom";
import Main from "./Component/Main";
import VideoPlayer from "./Component/VideoPlayer/VideoPlayer";


function App() {
  const data = useMovie();
  console.log(data, "movies data");

  return (
    <div className="container-fluid">
      <Navbars />
      <Routes>
      
      <Route path="/" element={<Main/>}/>
      <Route path="/movie/:id" element={<VideoPlayer/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
