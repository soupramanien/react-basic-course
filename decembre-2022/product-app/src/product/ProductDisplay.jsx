import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { Link, Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setError, setProducts, setStatus } from '../redux/actionCreators';

export default function ProductDisplay() {
    const { data: products, status, error } =
        useFetch("http://localhost:3000/data.json");

    const dispatch = useDispatch()
    useEffect(() => {
        if (products) {
            dispatch(setProducts(products))
        }
        dispatch(setError(error))
        dispatch(setStatus(status))
    }, [products, error, status, dispatch]);

    return (
        <div className="container">
            <Link to="/products">Liste de produits</Link>
            <Link to="/products/add">Ajouter un produit</Link>
            {error !== null ?
                <p className="">network error</p> :
                null}
            {status !== "success" && error === null ?
                <p className="">Loading...</p> :
                null}
            <Outlet />

        </div>
    )
}