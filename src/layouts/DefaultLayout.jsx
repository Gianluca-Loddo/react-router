import { Outlet, NavLink } from "react-router-dom";

export default function DefaultLayout() {
    return (
        <>
            {/*Navbar Bootstrap con NavLink: evidenzia automaticamente il link attivo aggiungendo la classe "active"*/}
            <nav className="navbar navbar-expand bg-light border-bottom">
                <div className="container">
                    <spa className="navbar-brand">React-Router Store</spa>
                    <div className="navbar-nav gap-2">
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>

                        <NavLink className="nav-link" to="/products">
                            Prodotti
                        </NavLink>

                        <NavLink className="nav-link" to="/about">
                            Chi Sono
                        </NavLink>
                    </div>
                </div>
            </nav>
            {/* OUTLET : per le pagine figlie */}
            <main className="container py-4">
                <Outlet />
            </main>
        </>
    );
}
