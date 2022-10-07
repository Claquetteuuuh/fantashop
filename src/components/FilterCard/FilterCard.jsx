import React, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';
import "./filter_card.scss";

const FilterCard = ({ price,
  filter, onpricechange ,
  farmer,setfarmer,
  miner,setminer,
  tools,settools,
  pvp,setpvp,
  machines,setmachines,
  various,setvarious}) => {
  
  const handlefarmer = () => {
    setfarmer(!farmer);
  };
  const handleminer = () => {
    setminer(!miner);
  };
  const handletools = () => {
    settools(!tools);
  };
  const handlepvp = () => {
    setpvp(!pvp);
  };
  const handlemachines = () => {
    setmachines(!machines);
  };
  const handlevarious = () => {
    setvarious(!various);
  };
  return (
    <div className="filter__card-container">
      <div className="filter__card-content">
        <div className="title">
          <h1>Trier</h1>
        </div>
        <div className="price">
          <h3>Prix</h3>
          <div className="range__container">
            <p>0$</p>
            <input type="range" step="10" min="0" max="5000" defaultValue={price} onChange={onpricechange} />
            <p>5000$</p>
          </div>
        </div>
        <div className="categories">
          <h3>Catégories</h3>
          <div className="buttons">
            <button className={`farm ${farmer && "active"}`} onClick={handlefarmer}>
              <Icon className="icon" icon="fa6-solid:seedling" style={{ fontSize: "30px" }} />
              <span>Farming</span>
            </button>
            <button className={`miner ${miner && "active"}`} onClick={handleminer}>
              <Icon className="icon" icon="ic:baseline-diamond" style={{ fontSize: "30px" }} />
              <span>Minerais</span>
            </button>
            <button className={`tools ${tools && "active"}`} onClick={handletools}>
              <Icon className="icon" icon="fa-solid:tools" style={{ fontSize: "23px" }} />
              <span>Outils</span>
            </button>
            <button className={`pvp ${pvp && "active"}`} onClick={handlepvp}>
              <Icon className="icon" icon="charm:swords" style={{ fontSize: "30px" }} />
              <span>PvP</span>
            </button>
            <button className={`machi ${machines && "active"}`} onClick={handlemachines}>
              <Icon className="icon" icon="fluent:box-16-filled" style={{ fontSize: "30px" }} />
              <span>Machines</span>
            </button>
            <button className={`various ${various && "active"}`} onClick={handlevarious}>
              <Icon className="icon" icon="bi:three-dots" style={{ fontSize: "30px" }} />
              <span>Divers</span>
            </button>
          </div>
        </div>
        <button onClick={filter}>Fermer</button>
      </div>
    </div>
  );
};

export default FilterCard;
