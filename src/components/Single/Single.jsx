import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "../../data";
//styles
import "./single.scss";

function Single() {
  const { id } = useParams();
  const [dataState, setDataState] = useState(data);
  const roomFound = dataState.find((item) => item.id == id);
  console.log(roomFound);
  return (
    <div className="single">
      <div className="single-container">
        <img src={roomFound.img} alt="" />
        <div className="single-info">
        <h1>{roomFound.title[0].toUpperCase() + roomFound.title.slice(1)}</h1>
        {roomFound.title === "single" && (
          <p>
            A room assigned to one person. May have one or more beds. The room
            size or area of Single Rooms are generally between 37 m² to 45 m².
          </p>
        )}
        {roomFound.title === "double" && (
          <p>
            A room assigned to two people. May have one or more beds. The room
            size or area of Double Rooms are generally between 40 m² to 45 m².
          </p>
        )}
        {roomFound.title === "triple" && (
          <p>
            A room that can accommodate three persons and has been fitted with
            three twin beds, one double bed and one twin bed or two double beds.
            The room size or area of Triple Rooms are generally between 45 m² to
            65 m².
          </p>
        )}
        {roomFound.title === "quad" && (
          <p>
            A room assigned to four people. May have two or more beds. The room
            size or area of Quad Rooms are generally between 70 m² to 85 m².
          </p>
        )}
        {roomFound.title === "queen" && (
          <p>
            A room with a queen-sized bed. May be occupied by one or more
            people. The room size or area of Queen Rooms are generally between
            32 m² to 50 m².
          </p>
        )}
        {roomFound.title === "king" && (
          <p>
            A room with a king-sized bed. May be occupied by one or more people.
            The room size or area of King Rooms are generally between 32 m² to
            50 m².
          </p>
        )}
        <button>Book</button>
        </div>
      </div>
    </div>
  );
}

export default Single;
