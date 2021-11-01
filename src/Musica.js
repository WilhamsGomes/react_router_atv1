import React from "react";
import { Link } from "react-router-dom";

export const Musica = () =>{
    return(
        <div>
            <h1>L7NNON - Mais Que Isso 💰</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eLeKs3DxuL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br/>
            <br/>
            <Link to="/home" className="nav-link">Voltar para home</Link>
        </div>
    );
};