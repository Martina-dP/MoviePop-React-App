import React from "react";

function Paginado2 ({ProxMPerPage, ProxMovies, paginado}) { 
    const pageNum2 = []
    for (let i = 1; i <= Math.ceil(ProxMovies/ProxMPerPage); i++) { 
        pageNum2.push(i)
    }

    return (
        <nav >
        </nav>
    )
}

export default Paginado2;