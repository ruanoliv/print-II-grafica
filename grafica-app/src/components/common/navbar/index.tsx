import Link from "next/link"

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                {/* <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
                </a> */}
                <a className="navbar-item">
                    <img src="#" alt="Logo qualquer pra não deixar vazio"/>
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="/">
                        Dashboard
                    </a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="#">
                            Cadastrar
                        </a>
                        <div className="navbar-dropdown is-boxed">
                            <Link href="/add/order" passHref>
                                <a className="navbar-item">
                                    Pedido
                                </a>
                            </Link>
                            <Link href="/add/customer" passHref>
                                <a className="navbar-item">
                                    Cliente
                                </a>
                            </Link>
                            <a className="navbar-item" href="/add/employee">
                                Funcionário
                            </a>
                        </div>
                    </div>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="#">
                            Pesquisar
                        </a>
                        <div className="navbar-dropdown is-boxed">
                            <Link href="/add/order" passHref>
                                <a className="navbar-item">
                                    Pedido
                                </a>
                            </Link>
                            <Link href="/add/customer" passHref>
                                <a className="navbar-item">
                                    Cliente
                                </a>
                            </Link>
                            <a className="navbar-item" href="/add/employee">
                                Funcionário
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" href="#"
                                    style={{
                                        background: "#780002"
                                    }}
                                >
                                    {/* <span className="icon">
                                        <i className="fas fa-download"></i>
                                    </span>
                                     */}
                                    <span>Contato</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

