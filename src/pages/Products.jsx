import { useState, useEffect } from "react";
import axios from "axios";

// import stile card (grandezza massima immagini)
import './Products.css'

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


            {/*Griglia di card Bootstrap*/}
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                {products.map((p) => (
                    <div key={p.id} className="col">
                        <div className="card h-100">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="card-img-top object-fit-contain product-img"
                            />
                            <div className="card-body">
                                <h6 className="card-title">{p.title}</h6>
                                <p className="card-text text-muted small mb-2">{p.category}</p>
                                <span className="badge text-bg-primary">€ {p.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
