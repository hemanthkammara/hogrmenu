import styled from "styled-components";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { BiFoodTag } from "react-icons/bi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";

export const CategoryCard = ({ e }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <DIV>
      <div className="foodOne">
        <p style={{ margin: "0px", fontSize: "18px", fontWeight: "600" }}>
          {e.title}
        </p>

        <div className="foodOnePrice">
          <div>
            <BiFoodTag style={{ color: e.type == "Veg" ? "green" : "red" }} />
            <p
              style={{ marginLeft: "5px", fontSize: "16px", fontWeight: "600" }}
            >
              ₹ {e.price}
            </p>
          </div>
          <button className="addBtn">Add</button>
        </div>

        <button onClick={openModal} className="moreDetailsBtn">
          More Details <TfiArrowCircleRight className="moreBtnIcon" />
        </button>
      </div>
      <div style={{ height: "0.5px", backgroundColor: "#37373a" }}></div>
      {/* <hr /> */}
      {/*  */}
      <div>
        {/* <button onClick={openModal}>Open Modal</button> */}

        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <div className="modal-header">
                <h2>{e.title}</h2>
                <button className="closeBtn" onClick={closeModal}>
                  Close
                </button>
              </div>
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <BiFoodTag
                    style={{ color: e.type == "Veg" ? "green" : "red" }}
                  />
                  <p style={{ marginLeft: "5px" }}>₹ {e.price}</p>
                </div>
                <p>{e.description}</p>
              </div>
              <div className="modal-footer">
                {/* <button onClick={closeModal}>Close</button> */}
                {/* <button>Secondary Action</button> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </DIV>
  );
};
export const DIV = styled.div`
  width: 100%;
  margin: auto;

  .foodOne {
    /* width: 90%; */
    margin: auto;
    padding: 2% 5%;
  }

  hr {
    background-color: green;
    color: red;
  }

  .addBtn {
    width: 20%;
    height: 25px;
    color: grey;
    border: 1px solid grey;
    border-radius: 5px;
  }

  .moreDetailsBtn {
    color: grey;
    border: 1px solid grey;
    width: 35%;
    height: 25px;
    /* text-align: center; */
    border-radius: 5px;
    position: relative;
    font-size: 14px;
  }
  .moreBtnIcon {
    background-color: black;
    color: white;
    border-radius: 50%;
    position: absolute;
    top: 20%;
    margin-left: 5px;
  }

  .foodOnePrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .foodOnePrice > div {
    display: flex;
    align-items: center;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
  }

  .modal {
    background-color: #272525;
    color: white;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    padding: 10px;
    max-width: 400px;
    width: 90%;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  /* .modal-body {
  margin-bottom: 10px;
  
} */

  .modal-footer {
    display: flex;
    justify-content: flex-end;
  }

  /* button {
  padding: 8px 16px;
  margin-left: 8px;
  cursor: pointer;
} */

  .closeBtn {
    width: 20%;
    height: 25px;
    border-radius: 10px;
    color: grey;
    border: 1px solid grey;
  }
`;
