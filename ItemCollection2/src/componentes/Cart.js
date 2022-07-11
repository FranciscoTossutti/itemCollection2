import { addDoc, collection, getFirestore } from "firebase/firestore";
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {

    const { cart, totalPrecio} = useCartContext();

    const orden = {
        comprador: {
            nombre: 'Tomas',
            email: 'tomas@gmail.com',
            telefono:'12345',
            direccion:'cabildo123'
        },
        items: cart.map(product => ({id: product.id, titulo: product.titulo, precio: product.precio, cantidad: product.cantidad})),
        total: totalPrecio(),
    }


    const emitirCompra = () => {
        const db = getFirestore();
        const orderCollection = collection(db,'order');
        addDoc(orderCollection,orden)
        .then(({id}) => console.log(id))
    }


    if ( cart.length === 0) {
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link to='/'>Comprar</Link>
            </>
        );
    }

    return (
        <>
        {
            cart.map(product => <CartItem key={product.id} product = {product} />)
        }
        <button onClick={emitirCompra}></button>
        </>
    );
}

export default Cart;