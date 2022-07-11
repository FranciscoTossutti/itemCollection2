import React, { useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';



const ItemDetailConteiner = () => {

    const [data, setData ] = useState({});

    const { DetalleId } = useParams();

    useEffect(() => {
        const querydb = getFirestore();
        const querydoc = doc(querydb ,'productos', DetalleId);
        getDoc(querydoc)
        .then(res => setData({id: res.id, ...res.data() }))
    }, [DetalleId])

    return (
        <ItemDetail data={data} />
    );
}

export default ItemDetailConteiner;