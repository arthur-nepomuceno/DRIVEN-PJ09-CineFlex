import {BrowserRouter, Routes, Route} from "react-router-dom";
import "../styles/reset.css"
import "../styles/style.css"
import Top from "./Top";
import Movies from "./Movies";
import Sessions from "./Sessions";
import Seats from "./Seats";
import Success from "./Success";

export default function App(){
    return(
        <BrowserRouter>
            <Top/>
            <Routes>
                <Route path="/" element={<Movies/>}/>
                <Route path="/sessions/:movieID" element={<Sessions/>}/>
                <Route path="/seats/:sessionID" element={<Seats/>}/>
                <Route path="/success" element={<Success/>}/>
            </Routes>
        </BrowserRouter>
    );
}