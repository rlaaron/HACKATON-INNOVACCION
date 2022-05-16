import { Routes, Route, BrowserRouter} from "react-router-dom";
import App from "../App";
import Formulario from "../components/Formulario";
import Mint from "../components/Mint";
import { useState } from 'react';
import Porque from "../components/Porque";
import Como from "../components/Como";

const AppRouter = () => {
    const [accounts, setAccounts] = useState([]);
    return (  
        <BrowserRouter>
        <Routes>
            <Route path='/' element = {<App/>}/>
            <Route path='/Porque' element = {<Porque/>}/>
            <Route path='/Pasos' element = {<Como/>}/>
            <Route path='/Formulario' element = {<Formulario/>}/>
            <Route path='/Mint' element = {<Mint accounts={accounts} setAccounts={setAccounts}/>}/>
        </Routes>
    </BrowserRouter>
    );
}
 
export default AppRouter;