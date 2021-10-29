import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"; 
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDetails } from "../../Action/Action"
import style from "./Details.module.css"

export default function Details(props) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDetails(props.match.params.id))
    },[dispatch])

    const MoviesDetail = useSelector ((state) => state.detail)
    console.log("DETALLES", MoviesDetail)

    const IMG_API = "https://image.tmdb.org/t/p/w500"

    return(
        <div className={style.todo}>
            <div className={style.total} >
                <div>
                    <img className={style.img} src = {IMG_API + MoviesDetail.poster_path} alt = "img not found" />
                </div>
                <div className={style.info}>
                    <h2 className={style.titulo}> {MoviesDetail.original_title }</h2>
                    <h3 className={style.descripcion}> {MoviesDetail.overview}</h3>
                    <h3 className={style.fecha}> Release Date : {MoviesDetail.release_date}</h3>
                    <h3 className={style.puntos}> Assessment : {MoviesDetail.vote_average} </h3>
                </div>    
            </div>
            <Link to = "/">
                <button className={style.boton}> Back to Home </button>
            </Link>
       </div>
    )
}