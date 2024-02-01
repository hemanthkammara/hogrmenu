import styled from "styled-components";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { BiFoodTag } from "react-icons/bi";
import { TfiArrowCircleDown } from "react-icons/tfi";
import { useState } from "react";
import { CategoryCard } from "./CategoryCard";
export const CategoryList = ({ name, arr }) => {
  const [show, setShow] = useState(true);

  return (
    <DIV>
      <div className="catDiv">
        <p className="catNameP">
          {name} ({arr.length})
        </p>
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
      {show &&
        arr.map((e) => {
          return <CategoryCard key={e.id} e={e} />;
        })}

      {!show && <hr />}
    </DIV>
  );
};
export const DIV = styled.div`
  width: 100%;
  margin: auto;

  .catDiv {
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }

  button {
    padding: 0%;
    background-color: black;
    border: none;
    color: white;
  }

  .arrowIcon {
    background-color: black;
    color: white;
    font-size: 30px;
  }

  .catNameP {
    font-weight: 600;
    border: 1px solid gray;
    padding: 3px 10px;
    border-radius: 10px;
  }
`;
