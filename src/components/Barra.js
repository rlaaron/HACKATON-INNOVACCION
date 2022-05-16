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
                            <li><Link to="/Porque" class="select">¿Porque Cuidar el mar?</Link></li>
                            <li><Link to="/Pasos" class="select">Proceso</Link></li>
                            
                            <li><Link to="/Mint" class="select">Mas</Link></li>
                        </ul>
                    </nav>
                    <div class="btn__menu" id="btn_menu"><i class="fas fa-bars"></i></div>
                </div>
            </div>
        </header>
    );
}

export default Barra;