import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <h2 className="mb-3">
                <i className="bi bi-house-door-fill me-2 text-primary"></i>
                Home
            </h2>
            <p className="text-muted mb-0">Welcome to the mini e-commerce!</p>

            {/* Esempio di utilizzo LINK: porta ai prodotti */}
            <Link to="/products" className="btn btn-primary btn-sm">
                View Products!
            </Link>
        </>
    );
}
