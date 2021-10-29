import React, { useState } from 'react'; 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Rating.module.css"
import ReactStars from 'react-stars'
import {getMovies, filterRating} from "../../Action/Action"


export function Rating() {

    const allMovies = useSelector ((state) => state.movies)
    console.log("ROMA", allMovies)


    const filtrado = useSelector ((state) => state.search)
    console.log("filtor", filtrado)


    const dispatch = useDispatch()

    useEffect(() =>{ 
        dispatch(getMovies());
        dispatch(filterRating());
    },[])

    function handleClick(e) {
        e.preventDefault()
        dispatch(getMovies())
    }

    const ratingChanged = (newRating) => {
        dispatch(filterRating(newRating));
      }


    return(
        <div className={style.contenedor}>
            <div>
                <h3>Rating</h3>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    half={false}
                    size={30}
                    color2={'#ffd700'} />,
            </div>
            <div>
                <button onClick={handleClick}>Limpiar filtro</button>
            </div>
        </div>    
    )
  
};

export default Rating;