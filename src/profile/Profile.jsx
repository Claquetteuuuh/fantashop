import React, { useState ,useEffect} from "react";
import { MediumTitle } from "../components/Components";
import "./Profile.scss";

const Profile = ({ accessToken }) => {
  const [user, setUser] = useState(undefined);
  const [member, setmeber] = useState(undefined);
  const [Money, setmoney] = useState(0);
  const [orders, setorders] = useState([]);

  const handleLogOut = () => {
    localStorage.setItem("access_token", undefined);
    window.location = "/";
  };
  if (!accessToken) {
    window.location = "/mustconnect";
  }
  useEffect( () => {
    fetch("https://api.fantashop.fr/users/getuser/" + accessToken)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        
        fetch("https://api.fantashop.fr/users/getdata/" + accessToken)
          .then((res) => res.json())
          .then((data) => {
            setmeber(data);

            fetch("https://api.fantashop.fr/" + `orders/getorders/${accessToken}`)
            .then(res => res.json()).
            then(o => {
              setorders(o)
              let money = 0;
              for (var i of o) {
                
                fetch("https://api.fantashop.fr/shop/item/" + i.item)
                .then((res) => res.json())
                .then((item) => {
                  money = money + parseInt(item.price * i.quantity)
                  setmoney(money)
                });
              }
              
              
            })
            
            
      });
      });
  },[]);
  
  function formatSecond(seconds) {
    if(seconds < 60) {
      return "actif depuis " + seconds + " secondes"
    }
    if(seconds < (60*60)) {
      return "actif depuis " + parseInt(seconds/60) + " minutes"
    }
    if(seconds < (60*60*24)) {
      return "actif depuis " + parseInt(seconds/60/60) + " heures"
    }
    if(seconds < (60*60*24*30)) {
      return "actif depuis " + parseInt(seconds/60/60/24) + " jours"
    }
    if(seconds < (60*60*24*30*12)) {
      return "actif depuis " + parseInt(seconds/60/60/24/30) + " mois"
    }
    return "actif depuis " + parseInt(seconds/60/60/24/30/12) + " ans"
  }

  return (
    <>
      <main className="profile__container">
        <MediumTitle>Mon Profile</MediumTitle>
        <div className="profile__content">
          <div className="left">
            <div className="user">
              <img
                className="profile"
                src={user && 
                  "https://cdn.discordapp.com/avatars/" + user.id + "/" + user.avatar + ".png"
                }
                alt="avatar"
              />
              <div className="user__text">
                <div className="text">
                  <h1>{user && user.username}#{user && user.discriminator}</h1> 
                  <p>{member && formatSecond((new Date() - Date.parse(member.created))/1000)}</p>
                </div>
                <div className="badges">
                {member &&
                    member.discord.roles.includes("699204373414281256") &&
                  <img
                    className="badge"
                    src="./images/badges/fonda.svg"
                    alt=""
                    width={30}
                  />
                  }
                {member &&
                    member.discord.roles.includes("699335302002638899") &&
                  <img
                    className="badge"
                    src="./images/badges/admin.svg"
                    alt=""
                    width={30}
                  />
                  }
                  {member &&
                    member.discord.roles.includes("927007947853275236") &&
                  <img
                    className="badge"
                    src="./images/badges/dev.svg"
                    alt=""
                    width={30}
                  />
                  }
                {member &&
                    member.discord.roles.includes("713368042058285076") &&
                  <img
                    className="badge"
                    src="./images/badges/staff.svg"
                    alt=""
                    width={30}
                  />
                  }
                  {member &&
                    member.discord.roles.includes("861370086878609449") &&
                  <img
                    className="badge"
                    src="./images/badges/market-premium.svg"
                    alt=""
                    width={30}
                  />
                  }
                  {member &&
                    member.discord.roles.includes("861370085787828242") &&
                  <img
                    className="badge"
                    src="./images/badges/market-vip.svg"
                    alt=""
                    width={30}
                  />
                  }
                  {member &&
                    member.discord.roles.includes("861370081421950977") &&
                  <img
                    className="badge"
                    src="./images/badges/market-mvp.svg"
                    alt=""
                    width={30}
                  />
                  }
                  {member &&
                    member.discord.roles.includes("861370080700137523") &&
                  <img
                    className="badge"
                    src="./images/badges/market-mvp-plus.svg"
                    alt=""
                    width={30}
                  />
                  }
                  
                  
                </div>
              </div>
            </div>
            <div className="logout">
              <button onClick={handleLogOut}>
                <img src="./images/icons/logout.svg" alt="logout" />
                <span>Se déconnecter</span>
              </button>
            </div>
          </div>
          <div className="right">
            <div className="boxContainer">
                <div className="box">
                  <h1 className="number">{member && member.orders.length}</h1>
                  <p>Commandes</p>
              </div>
              <div className="box">
                <h1 className="number">{Money && Money} $</h1>
                <p>D'argent dépensé au total sur le FantaShop</p>
              </div>
              <div className="box">
                <h1 className="number">{member ? parseInt((Money / ((parseInt((new Date() - Date.parse(member.created))/1000/60/60/24)) == 0 ? 1 : (parseInt((new Date() - Date.parse(member.created))/1000/60/60/24))))) + "$" : "0$"}</h1>
                <p>D’argent dépensé chaque jour sur le FantaShop</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;