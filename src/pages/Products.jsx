import { useState, useEffect } from "react";
import axios from "axios";

export default function Products() {

    //stato: caricamento lista dei prodotti 
    const [products, setProducts] = useState([]); 
    
    // FETCHING DEI DATI (useState / AXIOS) - caricamento della lista prodotti
    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data); //debug
                setProducts(res.data); //con axios i dati sono in res.data
            });
    }

    // esegue il FETCHING una sola volta (al primo render)
    useEffect(fetchProducts, []);

    return (
        <>
            <h2 className="mb-3">
                <i className="bi bi-cart-fill me-2 text-warning"></i>
                Products
            </h2>
            <p className="text-muted mb-0">
                Select from the available products.
            </p>
        </>
    );
}
