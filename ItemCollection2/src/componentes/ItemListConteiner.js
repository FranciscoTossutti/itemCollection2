import React, {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

/* const productos = [
{
    id : 1,
    img : jbl,
    titulo : "Jbl Charge",
    precio : 22.99,
    categoria : "Auriculares",
},
{
    id : 2,
    img : jbl4,
    titulo : "Jbl Charge2",
    precio : 18.99,
    categoria : "Parlantes"
},
{
    id : 3,
    img : jbP,
    titulo : "Jbl Charge3",
    precio : 35.99,
    categoria : "Parlantes"
},
];
*/

const ItemListConteiner = ({ texto }) => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos'); 

        if (categoriaId) {
            const queryFilter = query(queryCollection, where('categoria', '==', categoriaId));
            getDocs(queryFilter)
            .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
        } else {
            getDocs(queryCollection)
            .then(res => setData(res.docs.map(producto => ({id: producto.id, ...producto.data() }))))
        }

    }, [categoriaId])

    return (
        <ItemList data={data} />
    )
}

export default ItemListConteiner;
