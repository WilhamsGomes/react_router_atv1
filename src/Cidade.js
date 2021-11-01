import React from "react";
import { Link } from "react-router-dom";

export const Cidade = () =>{
    return(
        <div>
            <h1>Recife - PE</h1>
            <img width="60%" src="https://proddigital.com.br/wp-content/uploads/recife-pe.jpg"/>
            <br/>
            <br/>
            <Link to="/home" className="nav-link">Voltar para home</Link>
        </div>
    );
};