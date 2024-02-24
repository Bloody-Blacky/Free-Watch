import React from "react";
import Slider from "react-slick";
import { useMovie } from "../../Context/MovieContext";
import { Link } from "react-router-dom";

const NewMoviesSlider = () => {

  let { newmovies } = useMovie();

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 9,
          slidesToScroll: 9,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
          
        <div>
            <div className="head_title text-capitalize my-3">
              {<h5>Latest & Trending</h5>}
            </div>
            <div className="slider-container my-4">
              <Slider {...settings}>
                {
                newmovies?.reverse()
                  .map((currValue, indexs) => {
                    return (
                      <>
                        <div>
                        <Link to={`/movie/${currValue.id}`}>
                          <div className="card">
                            <div className="card-body p-0">
                              <img
                                src={currValue.images}
                                className="w-100 h-100 img_latest img-fluid"
                              ></img>
                            </div>
                          </div>
                          </Link>
                        </div>
                      </>
                    );
                  })}
              </Slider>
            </div>
          </div>
  
  );
};

export default NewMoviesSlider;
