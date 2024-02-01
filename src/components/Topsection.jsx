import styled from "styled-components";
import { FaDirections } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { PiBowlFoodThin } from "react-icons/pi";
import { BiLike } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { BiFoodTag } from "react-icons/bi";
import { FoodList } from "./FoodList";
export const Topsection = () => {
  return (
    <DIV>
      {/* image slidper section */}
      <div className="imageSlider">
        {/* <img
          className="sliderImg"
          src="https://wallpapercave.com/wp/wp3376127.jpg"
          alt=""
        /> */}
      </div>

      {/* Address section white background */}

      <div className="addressSection">
        <div className="addTopSection">
          <div className="addNameFollow">
            <h3>Sour House</h3>
            <button id="followBtn">Follow</button>
          </div>
          <div className="fullAddress">
            <p>0km</p>
            <FaDirections />
            <p className="dottedP">39,8th Main Rd,KHB Block KO...</p>
          </div>
        </div>
        <div className="addBottomSection">
          <p>Stack Hogr Coins with each yummy recommendation!</p>
          <button id="recoBtn">+ Reco</button>
        </div>
      </div>

      <div>
        {/* hotel follow reco rating seccion */}

        <div className="followRatingSection">
          {/* follow */}
          <div>
            <div className="frsDIV">
              <p>1</p>
              <FaHeart className="heartIcon" />
            </div>
            <p style={{ margin: "1px", fontSize: "14px" }}>Follower</p>
          </div>

          <div className="vLineDiv"></div>
          {/* reco */}
          <div>
            <div className="frsDIV">
              <p>1</p>
              <FaPlay className="playIcon" />
            </div>
            <p style={{ margin: "1px", fontSize: "14px" }}>Reco</p>
          </div>
          <div className="vLineDiv"></div>
          {/* rating */}

          <div>
            <div className="frsDIV">
              <p>--</p>
              <FaStar className="startIcon" />
            </div>
            <p style={{ margin: "1px", fontSize: "14px" }}>Rating</p>
          </div>
        </div>

        {/* RECO MENU section */}

        <div className="menuRecoSection">
          <div>
            <div className="biLikeIconDiv">
              <BiLike className="menuLikeIcon" />
            </div>
            <p>Reco</p>
          </div>

          <div>
            <div className="piBowlIconDiv">
              <PiBowlFoodThin className="menuMenuIcon" />
            </div>
            <p>Menu</p>
          </div>
        </div>

        {/* serach section */}

        <div className="searchDiv">
          <IoSearch className="searchIcon" />
          <input id="searchIp" type="text" placeholder="search in sour house" />
        </div>

        {/* veg non-veg select section */}

        <div className="foodSelectSection">
          <div>
            <BiFoodTag className="vegSelect" />

            <p>veg</p>
          </div>
          <div>
            <BiFoodTag className="nonVegSelect" />
            <p>Non-Veg</p>
          </div>
        </div>
      </div>
    </DIV>
  );
};

export const DIV = styled.div`
  .sliderImg {
    width: 100%;
  }
  p {
    margin: 5px;
  }

  h3 {
    padding: 0%;
    margin: 0%;
  }

  /*  */
  .addressSection {
    width: 85%;

    background-color: white;
    color: black;
    margin: auto;
    padding: 14px;
    border-radius: 25px;
    margin-top: 10px;
  }
  .addTopSection {
    width: 100%;
    border-bottom: 1px dashed grey;
    padding-bottom: 10px;
  }

  .addNameFollow {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .addNameFollow > h3 {
    font-size: 25px;
  }

  #followBtn {
    border: none;
    font-size: 15px;
    color: #ed008c;
    background-color: white;
    font-weight: bold;
  }

  .fullAddress {
    display: flex;
    align-items: center;
  }

  .dottedP {
    border-bottom: 1px dashed black;
  }

  .addBottomSection {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .addBottomSection > P {
    width: 80%;
    font-size: 16px;
    margin: 5px;
    margin-top: 10px;
    color: grey;
  }

  #recoBtn {
    width: 36%;
    margin-top: 5px;
    background-color: #cff406;
    height: 45px;
    border-radius: 10px;
    border: 1px solid;
    font-weight: 600;
    font-size: 17px;
  }
  /*  */
  .followRatingSection {
    width: 93%;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    align-items: center;
    border: 1px solid grey;
    border-radius: 20px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .frsDIV {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .frsDIV p {
    margin: 0%;
    font-size: 20px;
    margin-top: -2px;
    margin-right: 2px;
  }
  .heartIcon {
    width: 15px;
    margin-top: 2px;
    color: #ed008c;
  }
  .playIcon {
    width: 12px;
    margin-top: 2px;
    color: #cff406;
  }
  .startIcon {
    width: 16px;
    margin-top: 2px;
    color: #e2cc02;
  }

  .vLineDiv {
    width: 1px;
    height: 15px;
    background-color: grey;
    margin: 0%;
    padding: 0%;
  }

  /*  */

  .menuRecoSection {
    display: flex;
    margin-left: 10px;
    padding: 10px;
    margin-top: 20px;
    gap: 20px;
    /* position: sticky;
    top: 3%; */
  }

  .menuLikeIcon {
    width: 40px;
    font-size: 35px;
    // border: 1px solid #2d2d2d;
    border-radius: 3px;
  }
  .menuMenuIcon {
    font-size: 35px;
    border: none;
    background-color: #8c1359;
    border-radius: 3px;
  }

  /* .menuRecoSection div:nth-child(2) {
    margin-left: 20px;
  } */

  .piBowlIconDiv {
    width: 40px;
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: #8c1359;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 15px;
  }
  .biLikeIconDiv {
    height: 40px;
    align-items: center;
    //background-color: white;
    width: 40px;
    display: flex;
    justify-content: center;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 15px;
  }

  /*  */

  .searchDiv {
    width: 90%;
    height: 35px;
    margin: auto;
    display: flex;
    align-items: center;
    border: 1px solid grey;
    border-radius: 10px;
    padding: 5px;
  }

  #searchIp {
    background-color: black;
    border: none;
    color: grey;
  }

  #searchIp:focus {
    outline: none;
  }

  .searchIcon {
    width: 35px;
    font-size: 30px;
  }
  /*  */

  .foodSelectSection {
    display: flex;
    margin-top: 10px;
  }

  .foodSelectSection > div {
    display: flex;
    align-items: center;
    margin-left: 13px;
    padding: 5px;
    border: 1px solid #2d2d2d;
    border-radius: 10px;
  }

  .vegSelect {
    // background-color: green;
    color: #266e26;
  }

  .nonVegSelect {
    //background-color: red;
    color: #9f1717;
  }
  .foodSelectSection > div {
    height: 20px;
  }

  .foodSelectSection > div > p {
    margin-left: 10px;
  }
`;
