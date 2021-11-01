import React from "react";
import { Link } from "react-router-dom";

export const Home = () =>{
    return(
        <div>
             <nav className="nav">
                <Link to="/musica" className="nav-link">Música favorita</Link>
                <Link to="/cidade" className="nav-link">Cidade favorita</Link>
            </nav>
        </div>
    );
};