import {  Link } from 'react-router-dom';

function NavBar({ variant }) {
    let links;

    if (variant === 'home') {
        links = (
            <>
                <li><Link to="">Works</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </>
        );
    } else if (variant === 'blog') {
        links = (
            <>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="">About</Link></li>
                <li><Link to="">Contact</Link></li>
            </>
        );
    }

    return (
        <div className={`navbar ${variant}-navbar`}>
            <Link to="/" className="logo"></Link>
            <div className="navbar-right">
                <nav className="nav">
                    <ul className="navigation">
                        {links}
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;
  