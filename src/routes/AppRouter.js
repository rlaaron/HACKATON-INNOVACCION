import { Routes, Route, BrowserRouter} from "react-router-dom";
import App from "../App";
import Formulario from "../components/Formulario";
import Hola from "../components/Hola";
import Mint from "../components/Mint";
import { useState } from 'react';

const AppRouter = () => {
    const [accounts, setAccounts] = useState([]);
    return (  
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App/>}/>
            <Route path='/Inicio' element = {<Hola/>}/>
            <Route path='/Formulario' element = {<Formulario/>}/>
            <Route path='/Mint' element = {<Mint accounts={accounts} setAccounts={setAccounts}/>}/>
        </Routes>
    </BrowserRouter>
    );
}
 
export default AppRouter;