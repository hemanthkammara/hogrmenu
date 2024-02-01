import logo from "./logo.svg";
import "./App.css";
import { Topsection } from "./components/Topsection";
import { FoodCategory } from "./components/FoodCategory";
import { ImageSlider } from "./components/ImageSlider";
import { FoodList } from "./components/FoodList";
import Navbar from "./components/Navbar";
import React, { useEffect, useState } from "react";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {scrollPosition > 300 ? <Navbar /> : ""}
      <div>
        <ImageSlider />
        <Topsection />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
