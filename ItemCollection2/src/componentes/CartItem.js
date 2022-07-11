import React from "react";
import { useCartContext } from "../Context/CartContext";


const CartItem = ({ product }) => {

    const {EliminarP} = useCartContext();

    return (
        <div className="CartItem">
            <img src={product.img}></img>
            <div>
                <p>Titulo: {product.titulo}</p>
                <p>Cantidad {product.cantidad}</p>
                <p>Precio ${product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={() => EliminarP(product.id)}>Eliminar</button>
            </div>
        </div>
    )

}

export default CartItem;