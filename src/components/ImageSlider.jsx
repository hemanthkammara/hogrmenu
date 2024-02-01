import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://th.bing.com/th?id=OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    "https://th.bing.com/th?id=OIP.kTvs-fiEdCw7rldk41rhKwHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <DIV className="imageslider">
      {/* <button onClick={goToPrevious}>Previous</button> */}

      <div className="imagecontainer">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
      <div className="btnDiv">
        <button
          onClick={() => {
            setCurrentImageIndex(0);
          }}
          className={currentImageIndex === 0 ? "active" : "notActive"}
        ></button>
        <button
          onClick={() => {
            setCurrentImageIndex(1);
          }}
          className={currentImageIndex === 1 ? "active" : "notActive"}
        ></button>
      </div>
      {/* <button onClick={goToNext}>Next</button> */}
    </DIV>
  );
};

export const DIV = styled.div`
  .imageslider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .imagecontainer {
    width: 100%;
    max-width: 100%;
    height: 250px;
    overflow: hidden;
    border-image: linear-gradient(#0003, #000) 0 fill;
  }

  .imagecontainer img {
    width: 100%;
    height: auto;
    border-image: linear-gradient(#0003, #000) 0 fill;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 5px;
    border-radius: 5px;
    margin: 0px 5px;
  }

  .btnDiv {
    position: absolute;
    top: 30%;
    left: 45%;
  }

  .active {
    background-color: white;
  }

  .notActive {
    background-color: grey;
  }
`;
