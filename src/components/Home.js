import Barra from './Barra';
import Foot from './Foot';
import './styles/home.css'
import nft from './img/ajolotelaunch.png'

const Home = () => {
    return (
        <>
            <div class="container_all" id="container__all">
                <div class="cover">
                    <div class="bg_color"></div>
                    <div class="wave w1"></div>
                    <div class="wave w2"></div>
                    <div class="container__cover">
                        <div class="container__info">
                            <h1>SALVA AL </h1>
                            <h2>OCENAO</h2>
                            <p>Somos una fundacion que busca la proteccion y preservacion del oceano.
                                <br/>Todas las ganancias generadas con nuestra coleccion NFT, seran ocupadas para las campañas de limpieza, donde TU! puedes ser voluntario.
                                <br/>Puedes inscribirte aqui abajo si deseas ser voluntario 😀👇️!
                            </p>
                            <br/>
                            <div className='links'>
                                <a><button className='boton'>REGISTRARME</button></a>
                                <a href='https://rinkeby.etherscan.io/address/0xa3c3BB460fe327F6C25a12f4ECA1083DB4A5ab1D' target = '_blank' className='boton' rel="noreferrer">Etherscan</a>
                                <a href='https://testnets.opensea.io/collection/salva-al-oceano' target = '_blank' className='boton' rel="noreferrer">OpenSea</a>
                            </div>
                        </div>
                        <div><img src={nft} className='nft' /></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;