import React from "react";
import { useCartContext } from "../Context/CartContext";

const CartWidget = () => {

    const { totalProductos } = useCartContext();

    return (
        <>
        <i class="bi bi-bag-fill carrito"></i>
        <span> {totalProductos() || ''} </span>
        </>
    );
}

export default CartWidget;  