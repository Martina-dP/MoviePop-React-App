import React from "react";
import style from "./Nav.module.css"

export default function Nav() {
  return (
    <div className={style.todo}> 
        <div className={style.marca}>
            <p>MoviePop +</p>
        </div>
        <div className={style.btns}>
            <button>Login</button>
            <button>Check in</button>
        </div>
        <h1 className={style.titulo}> We have your favorite movies </h1>
        <h3 className={style.titulo1}> Watch it whenever you want, wherever you want </h3>
    </div>
  );
}