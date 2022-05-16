import './styles/porque.css'
import oceano from './img/oceano.gif'
const Porque = () => {
    return (
        <div>
            {/* <div class="main-features">
                <div class="auto-container">
                    <div class="title.box text-right">
                        <h1>¿Por qué cuidar de los oceános?</h1>
                        <p>En la temperatura de sus aguas se reflejan las consecuencias </p>
                        <p>del calentamiento global y en sus fondos llenos de plástico </p>
                        <p>se acumulan los deshechos de nuestro consumo desmesurado. Respetar a los</p>
                        <p> océanos significa salvar no solo a los seres que en viven en el planeta,</p>
                        <p>sino cuidar el clima, afectado directamente por las masas de agua del </p>
                        <p>planeta.Todas las acciones llevadas a cabo para salvar los océanos son pocas.</p>
                        <p>Por ello se ha creado nuestro programa para llenar esta brecha: una organización</p>
                        <p>nacional dedicada a la protección de los mares mediante diversas</p>
                        <p>campañas estratégicas que buscan lograr cambios políticos. Abordando problematicas</p>
                        <p>actuales como la recuperacion de las pesquerias,</p>
                        <p>la promoción de las energías limpias y la creación de áreas marinas protegidas.</p>
                        <h3><i>nuestros océanos, nuestro futuro</i></h3>
                    </div>
                </div>
            </div> */}
            {/* <h1>¿Por qué cuidar de los oceános?</h1> */}
            
            <div className='main_'>
                <div className='text1'>
                    <h3>PORQUE ES IMPORTANTE EL PLANETA?</h3>

                </div>
                
                <div className='main'>
                    <div className='imagen'>
                        <img className='img_' src={oceano}/>
                    </div>
                    {/* aqui van los acordeones */}
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ¿SON NECESARIO?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>Los oceanos son muy necesarios</strong> proque contribuyen enormemente en la conservación del equilibrio ambiental ya que gracias a los procesos que se desarrollan en él, son la fuente de oxígeno más grande del planeta, incluso más grande que los bosques y las selvas. 
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    ¿El humano daña el oceano?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>El humano es la espcie mas destuctiva del mundo</strong> En la temperatura del oceano se reflejan las consecuencias del calentamiento global y los fondos llenos de plásticose acumulan los deshechos de nuestro consumo desmesurado.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    NO NOS QUEDAREMOS SIN HACER NADA
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>El oceano debe de ser respetado </strong> , no solo para  salvar el ecosistema marino, si no para salvar nuestro planeta tierra!
                                    <br/>por lo que nosotros hemos creado esta DAO, donde todas las ganancias seran usadas para la limpia de oceanos en campanañas de las que tu puedes formar parte!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <br />

            <div class="image">
                <div>
                    <video source src="movie.mp4" type="video/mp4" />
                </div>

            </div> */}
        </div>
    );
}
 
export default Porque;