import React from 'react'; 
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getMoviesProximas  } from "../../Action/Action"
import Cards from '../Cards/Cards';
import Nav from '../Nav/Nav';
import Nav2 from '../Nav2/Nav2';
import Rating from '../Rating/Rating';
import Paginado from '../Paginado/Paginado';
import Paginado2 from '../Paginado2/Paginado2';
import style from "./Home.module.css";

export function Home() {

    const allMovies = useSelector ((state) => state.movies)
   
    const [currentPage, setCurrentPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(6) 
    const indexOfLast = currentPage * moviesPerPage
    const indexOfFirst = indexOfLast - moviesPerPage
    const currentMovie = allMovies.slice(indexOfFirst, indexOfLast)

    const ProxMovies = useSelector ((state) => state.proximasM)
    console.log("chau", ProxMovies)

    const [currentPage2, setCurrentPage2] = useState(1);
    const [ProxMPerPage, setProxMPerPage] = useState(6) 
    const indexOfLastProx = currentPage2 * ProxMPerPage
    const indexOfFirstProx = indexOfLastProx - ProxMPerPage
    const currentProxMovie = ProxMovies.slice(indexOfFirstProx, indexOfLastProx)


    const paginado = (pageNum) => {
        setCurrentPage(pageNum)
    }

    const paginado2 = (pageNum2) => {
        setCurrentPage2(pageNum2)
    }

    const dispatch = useDispatch()

    useEffect(() =>{ 
        dispatch(getMovies());
        dispatch(getMoviesProximas());
    },[])

    const handlePage = (event) => {
        event.preventDefault();
        if (event.target.name === "next") {
          if (currentPage >= Math.ceil(allMovies.length / moviesPerPage))
            return alert("This is the last page");
            setCurrentPage(currentPage + 1);
        }
    
        if (event.target.name === "prev") {
          if (currentPage === 1) {
            return alert("This is the first page");
          }
          setCurrentPage(currentPage - 1);
        }
      };

      const handlePage2 = (event) => {
        event.preventDefault();
        if (event.target.name === "proximo") {
          if (currentPage2 >= Math.ceil(ProxMovies.length / ProxMPerPage))
            return alert("This is the last page");
            setCurrentPage2(currentPage2 + 1);
        }
    
        if (event.target.name === "anterior") {
          if (currentPage2 === 1) {
            return alert("This is the first page");
          }
          setCurrentPage2(currentPage2 - 1);
        }
      };

    return(
    <div className = {style.conteiner}>
        <Nav/>
        <Rating/>
            <div className = {style.fila} >
                <h3 className = {style.titulo} >Populares</h3>
                <div className = {style.cartas}   >
                {currentMovie.length > 0 ?
                currentMovie.map((el) => {
                    return(
                    <Cards
                        key = {el.id}
                        id = {el.id}
                        poster_path = {el.poster_path}
                        vote_average = {el.vote_average}
                        title = {el.title}
                        />
                    )
                    }) :  <p>no existe la pelicula</p>
                    }
                </div>
                <div className={style.btn}>
                    <button className={style.btnPrev} onClick={handlePage} name="prev"> Prev </button>
                    <button className={style.btnNext} onClick={handlePage} name="next">next</button>
                </div>
                <div className = {style.paginado}>
                <Paginado 
                    moviesPerPage = {moviesPerPage}
                    allMovies = {allMovies.length}
                    paginado = {paginado}
                />
                </div>
            </div>
            <div className = {style.fila} >
                <h3 className = {style.titulo} >Proximos estrenos</h3>
                <div className = {style.cartas}   >
                {currentProxMovie.length > 0 ?
                currentProxMovie.map((el) => {
                    return(
                    <Cards
                        key = {el.id}
                        poster_path = {el.poster_path}
                        />
                    )
                    }) :  <p>no existe la pelicula</p>
                    }
                </div>
                <div className={style.btn}>
                    <button className={style.btnPrev} onClick={handlePage2} name="anterior"> Prev </button>
                    <button className={style.btnNext} onClick={handlePage2} name="proximo">next</button>
                </div>
                <div className = {style.paginado}>
                <Paginado2 
                    ProxMPerPage = {ProxMPerPage}
                    ProxMovies = {ProxMovies.length}
                    paginado = {paginado2}
                />
                </div>
                {/* <div>
                {allMovies.length > 0 ?
                allMovies.map((el) => {
                    return(
                    <Cards
                        key = {el.id}
                        id = {el.id}
                        poster_path = {el.poster_path}
                        vote_average = {el.vote_average}
                        />
                    )
                    }) :  <p>no existe la pelicula</p>
                    }
                </div> */}
            </div>
        <Nav2/>
    </div>    
    )
  
};

export default Home;