import React from "react";
import "./Card.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Card({ locations }) {
  var settings = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="carousel">
        {locations.map((data) => (
          <div key={data.id}>
            <div className="carousel1">
              <img src={data.url} alt="" />
              <h2>{data.title}</h2>
              <h4>{data.location}</h4>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
