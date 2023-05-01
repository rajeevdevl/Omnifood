import Logo from '../../content/img/omnifood-logo.png'
import './Header.css'

const Header = () => {
    return (
    <header className="header">
        <img src={Logo} className="logo" alt="Omnifood logo"/>
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li><a href="#" className="main-nav-link">Section 1</a></li>
                <li><a href="#" className="main-nav-link">Section 2</a></li>
                <li><a href="#" className="main-nav-link">Section 3</a></li>
                <li><a href="#" className="main-nav-link">Section 4</a></li>
                <li><a href="#" className="main-nav-link">Section 5</a></li>
                <li><a href="#" className="main-nav-link nav-cta">Section 6</a></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;