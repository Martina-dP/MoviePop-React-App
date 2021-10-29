import React from "react";
import style from "./Cards.module.css"
import { Link } from "react-router-dom";

function Cards({ id, poster_path, vote_average, title}){

console.log("IDIDIDID", id)

    const IMG_API = "https://image.tmdb.org/t/p/w500"

    return(
        <div>
            <Link to = {`/${id}`} >
                <img  className={style.img} value="info" src = {IMG_API + poster_path} alt="img not found" />
            </Link>
            <h3 className={style.titulo}>{title}</h3>
            <h3>{vote_average}</h3>
        </div>
     
    )} 

export default Cards;