import styled from "styled-components";
import React from 'react';
import { PiArrowLeftBold } from "react-icons/pi";
import { PiShareFatLight } from "react-icons/pi";

const Navbar = () => {
    return (
        <DIV>
            <div className="navbar">
               <div className="backIcon">
               <PiArrowLeftBold />
               </div>
               <div className="details">
                <p>Sour House</p>
                <p>0km.39,8th Main Rd,KHB Block</p>
               </div>
               <div className="shareIcon">
               <PiShareFatLight />
               </div>
            </div>
        </DIV>
    );
}

export default Navbar;
/* Navbar.css */
export const DIV = styled.div`

.navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    top: 0px; 
    /* left: 0; */
    height: 70px;
    width: 430px;
    background-color: black;
    z-index: 10;
    margin: auto;
    transition: transform 1s ease-in-out; 
}



.navbar.visible {
    transform: translateY(0%);
}

.backIcon{
     font-size: 30px;
     width: 40px;
     margin-left: 10px;
    /* border: 1px solid red; */
}
.details{
  margin-right: 30px;
    /* border: 1px solid red; */
}
.details>p:nth-child(1){
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}
.details>p:nth-child(2){
  font-size: 14px;
 margin: 0;
 letter-spacing: 1px;
 color: #8a8181;
}

.shareIcon{
    font-size: 30px;
    border: 1px solid gray ;
    margin-left: 40px;
    margin-right: 20px;
    padding: 4px 20px;
    border-radius: 25px;
    background-color: #323131;
}


 `