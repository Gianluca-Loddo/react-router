import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

// import stile card (grandezza massima immagini)
import './Products.css'

export default function Products() {
    // recupero id prodotto da visualizzare (rotta dinamica)
    const { id } = useParams();

    // navigazione programmatica (useNavigate)
    const navigate = useNavigate();


    //stato: caricamento lista dei prodotti 
    const [products, setProducts] = useState([]);

    // stato: caricamento singolo prodotto
    const [product, setProduct] = useState({
        title: "",
        price: "",
        category: "",
        image: "",
        description: "",
    });

    // FETCHING DEI DATI -LISTA- (useState / AXIOS) - caricamento della lista prodotti
    function fetchProducts() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data); //debug
                setProducts(res.data); //con axios i dati sono in res.data
            });
    }

    // FETCHING DEI DATI -SINGOLO PRODOTTO- (useState / AXIOS) - caricamento del singolo prodotto
    function fetchProduct() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => {
                console.log(res.data); //debug
                setProduct(res.data);
            });
    }

    // Se l'URL contiene id -> fetch del DETTAGLIO
    // Altrimenti -> fetch della LISTA (else)
    useEffect(() => {
        if (id) {
            fetchProduct();
        } else {
            fetchProducts();
        }
    }, [id]);


    // DETTAGLIO (se c'è :id nella URL) 
    if (id) {
        return (
            <>
                <h2 className="mb-1">
                    <i className="bi bi-bag-check-fill me-2 text-warning"></i>
                    Product detail
                </h2>
                <p className="text-muted mb-3">Information about the selected product.</p>

                <div className="row g-3">
                    <div className="col-12 col-md-5">
                        <div className="card">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="card-img-top object-fit-contain"
                                style={{ height: 240 }}
                            />
                        </div>
                    </div>

                    <div className="col-12 col-md-7">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="text-muted small mb-2">{product.category}</p>
                                <p className="card-text">{product.description}</p>
                                <span className="badge text-bg-primary">€ {product.price}</span>

                                <div className="mt-3">
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary btn-sm"
                                        onClick={() => navigate(-1)}
                                    >
                                        Back
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }



    // LISTA (se non c'è ID) 
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
                                <div className="mt-2">
                                    <Link to={`/products/${p.id}`} className="btn btn-outline-primary btn-sm">
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
