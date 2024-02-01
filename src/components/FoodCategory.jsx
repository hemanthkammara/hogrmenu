import styled from "styled-components";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { BiFoodTag } from "react-icons/bi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";
export const FoodCategory = () => {
  const [show, setShow] = useState(true);
  const [showTwo, setShowTwo] = useState(true);
  return (
    <DIV>
      <div className="foodCategory">
        <div className="foodCategoryOne">
          <p>Breads (1)</p>

          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <TfiArrowCircleUp className="arrowIcon" />
            ) : (
              <TfiArrowCircleDown className="arrowIcon" />
            )}
          </button>
        </div>

        <div className="showFood" style={{ display: show ? "block" : "none" }}>
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag className="foodIcon" />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
        </div>
        {show ? "" : <hr></hr>}
        {/* new category */}
        <div className="foodCategoryOne">
          <p>Pastry (1)</p>

          <button
            onClick={() => {
              setShowTwo(!showTwo);
            }}
          >
            {showTwo ? (
              <TfiArrowCircleUp className="arrowIcon" />
            ) : (
              <TfiArrowCircleDown className="arrowIcon" />
            )}
          </button>
        </div>

        <div
          className="showFood"
          style={{ display: showTwo ? "block" : "none" }}
        >
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
          <div className="foodOne">
            <h3>Focaccia</h3>

            <div className="foodOnePrice">
              <div>
                <BiFoodTag />
                <p>$ 124</p>
              </div>
              <button className="addBtn">Add</button>
            </div>

            <button className="moreDetailsBtn">
              More Details <TfiArrowCircleRight />
            </button>
            <hr />
          </div>
        </div>
        {showTwo ? "" : <hr></hr>}
      </div>
    </DIV>
  );
};
export const DIV = styled.div`
  .foodCategory {
    /* display: flex;
flex-direction: column;
justify-content: space-around;
align-items: ; */
    width: 93%;
    margin: auto;
  }

  button {
    padding: 0%;
    background-color: black;
    border: none;
    color: white;
  }

  .foodCategoryOne {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
  }
  .foodIcon {
    color: green;
  }
  .arrowIcon {
    background-color: black;
    color: white;
    font-size: 30px;
  }
  .addBtn {
    width: 20%;
    color: #433c3c;
    border: 1px solid #433c3c;
    border-radius: 5px;
  }

  .moreDetailsBtn {
  }

  .foodOnePrice {
    display: flex;
    justify-content: start;
  }

  .foodOnePrice > div {
    display: flex;
    align-items: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .container {
    display: flex;
    flex-wrap: wrap;
  }

  .animated-item {
    animation: fadeIn 0.5s ease forwards;
  }
`;
