import React,{useState} from "react";
import { useEffect } from "react";
import "./end_section.scss";

const EndSection = () => {
  const [maj,setMaj] = useState("");
  const [grades,setgrades] = useState("");
  const onClick = () => {

    fetch('https://api.fantashop.fr/news/add_maj/' + maj)
    alert("mise a jour ajoutée")
  }
  useEffect(() => {
    fetch('https://api.fantashop.fr/users/get_grades')
    .then(res => res.json())
    .then(data => {
      setgrades(data)
    })
  },[])
  return (
    <section className="end__container">
      <div className="box">
        <h1 className="title">Actions</h1>
        <div className="btns">
          <button disabled>Maintenance</button>
          <button disabled>Normal Stats</button>
        </div>
      </div>
      <div
        className="box"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h1 className="title" style={{ marginBottom: "0" }}>
          Mise à jour
        </h1>
        <input
          type="text"
          name="name"
          placeholder="Nom de la mise à jour"
          required
          onChange={(e) => setMaj(e.target.value)}
        />
        <div className="btn__add">
          <button onClick={onClick}>Add</button>
        </div>
      </div>
      <div className="box">
        <h1 className="title">Nos Gradés</h1>
        <div className="box__grades">
          <div className="grade">
            <h1 className="number">{grades.premium}</h1>
            <img src="./images/badges/market-premium.svg" alt="grade" width={50} />
          </div>
          <div className="grade">
            <h1 className="number">{grades.vip}</h1>
            <img src="./images/badges/market-vip.svg" alt="grade" width={50} />
          </div>
          <div className="grade">
            <h1 className="number">{grades.mvp}</h1>
            <img src="./images/badges/market-mvp.svg" alt="grade" width={50} />
          </div>
          <div className="grade">
            <h1 className="number">{grades.mvpplus}</h1>
            <img src="./images/badges/market-mvp-plus.svg" alt="grade" width={50} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EndSection;
