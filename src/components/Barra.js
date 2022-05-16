import './styles/barra.css'
import { Link} from "react-router-dom";
const Barra = () => {
    return (
        <header id="header">
            <div class="container__header">
                <div class="logo"></div>
                <div class="container__nav">
                    <nav id="nav">
                        <ul>
                            <li><Link to="/Mint" class="select">Mint</Link></li>
                            <li><a href="#">ABOUT US</a></li>
                            <li><a href="#">HOW IT WORK</a></li>
                            <li><a href="#">CONTACT US</a></li>
                        </ul>
                    </nav>
                    <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
                </div>
            </div>
        </header>
    );
}

export default Barra;