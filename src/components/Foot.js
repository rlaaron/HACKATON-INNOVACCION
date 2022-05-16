import './styles/foot.css'
const Foot = () => {
    return (
        <footer>
            <div class="container__footer">

                <div class="box__footer">
                    <div class="logo">
                        <img src="./img/logo-magtimus.png" alt="" />
                    </div>
                    <div class="terms">
                        Hagamos el cambio, el planeta es de todos, juntos haremos la diferencia
                    </div>
                </div>

                <div class="box__footer">
                    <h2>Soluciones</h2>
                    <a href="#">Coleccion</a>
                    <a href="#">Reclutamienro</a>
                    <a href="#">Proyecto con empresas</a>
                </div>
                <div class="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="#"><i class="fab fa-facebook-square"></i> Facebook</a>
                    <a href="#"><i class="fab fa-twitter-square"></i> Twitter</a>
                    <a href="#"><i class="fab fa-linkedin"></i> Open Sea</a>
                    <a href="#"><i class="fab fa-instagram-square"></i> Etherscan</a>
                </div>
            </div>
        </footer>
    );
}
 
export default Foot;