import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Sell from "./pages/Sell";
import Confirmed from "./pages/Confirmed";
import UserInfo from "./pages/UserInfo";

const App = () => {
    return <div>
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/login' Component={Login}/>
            <Route path='/sell' Component={Sell}/>
            <Route path='/confirmed' Component={Confirmed}/>
            <Route path='/user' Component={UserInfo}/>
        </Routes>
    </div>;
}
 
export default App;