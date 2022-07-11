import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCartContext } from '../Context/CartContext';


const ItemDetail = ({ data }) => {

    const [carrito, setCarrito] = useState(false);
    const {addProduct} = useCartContext();


    const onAdd = (cantidad) => {
        setCarrito(true);
        addProduct(data, cantidad);
    }

    return (
        <div className="conteiner">
        <section className="card">
                <h1>{data.titulo}</h1>
                <img src={data.img}></img>
                <br></br>
                <span>${data.precio}</span>
        </section>
        {
            carrito
            ? <Link to="/Cart">Finalizar Compra</Link>
            :<ItemCount initial={1} stock={10} onAdd={onAdd} />
        }
        </div>
    );
}

export default ItemDetail;