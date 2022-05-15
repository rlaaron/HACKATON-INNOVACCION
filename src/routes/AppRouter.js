import { Routes, Route, BrowserRouter} from "react-router-dom";
import App from "../App";
import Formulario from "../components/Formulario";
import Hola from "../components/Hola";

const AppRouter = () => {
    return (  
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App/>}/>
            <Route path='/Inicio' element = {<Hola/>}/>
            <Route path='/Formulario' element = {<Formulario/>}/>
        </Routes>
    </BrowserRouter>
    );
}
 
export default AppRouter;