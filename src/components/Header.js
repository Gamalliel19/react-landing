import '../components/css/header.css';

const Header = () => {

    return ( 
        <header>
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Mandalore</Link>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/produk">Produk</Link>
                        </li>
                        <li>
                            <Link to="/batik-daerah">Batik Daerah</Link>
                        </li>
                        <li>
                            <Link to="/pengalaman">Pengalaman</Link>
                        </li>
                    </ul>
                </nav>
                <div className="phonenumber">
                    <Link to="/">+62899952888</Link>
                </div>
            </div>
        </header>
     );
}
 
export default Header;

