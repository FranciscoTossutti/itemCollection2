import React, { useContext } from "react";
import { Link } from 'react-router-dom';

const Item = ({ info }) => {

    return (
            <div className="conteiner">
                <Link className="card" to={`/detalle/${info.id}`}>
                    <h1>{info.titulo}</h1>
                    <img src={info.img}></img>
                    <br></br>
                    <span>${info.precio}</span>
                </Link>
            </div>
    );
}

export default Item;