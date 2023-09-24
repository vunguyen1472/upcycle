import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Sell from "./pages/Sell";
import Confirmed from "./pages/Confirmed";
import UserInfo from "./pages/UserInfo";
import About from "./pages/About";
import Responsibility from "./pages/Responsibility";
import Styles from "./pages/Styles";
import ClothesProcessingProcedure from "./pages/ClothesProcessingPrrocedure";
import Condition from "./pages/Condition";

const App = () => {
    return <div>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>
            <Route path='/sell' Component={Sell}/>
            <Route path='/confirmed' Component={Confirmed}/>
            <Route path='/user' Component={UserInfo}/>
            <Route path='/about' Component={About}/>
            <Route path='/responsibility' Component={Responsibility}/>
            <Route path='/styles' Component={Styles}/>
            <Route path='/clothes-processing-procedure' Component={ClothesProcessingProcedure}/>
            <Route path='/condition' Component={Condition}/>
        </Routes>
    </div>;
}
 
export default App;