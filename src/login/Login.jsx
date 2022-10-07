import './Login.scss';
import React, { useState ,useEffect} from "react";
const Login = ({setAccessToken, token}) => {

  useEffect( () => {
      setAccessToken(JSON.parse(token[0]).access_token)
  },[])
 

  return (
    <main className="success__login">
    <img className="success" src="./images/icons/success.svg" alt="icon" />
    <h1>Connexion Réussie !</h1>
    <p>Merci de votre confiance !</p>
    <a href="/">
      <img className="icon" src="./images/icons/home-white.svg" alt="icon" />
      <span>Retourner à l'accueil</span>
    </a>
  </main>

  )
}

export default Login