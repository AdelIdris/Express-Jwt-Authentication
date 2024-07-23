import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import Protected from "./components/users/Protected.js";
import Home from "./components/Home.js";
import Register from "./components/users/Register.js";
import Login  from "./components/users/Login.js";

function App(){
 return (
        <>
             <BrowserRouter>
                <div
                    style={{
                        display: "flex",
                        background: "black",
                        padding: "5px 0 5px 5px",
                        fontSize: "20px",
                    }}
                >               
                    <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/users/register"
                            style={({ isActive =true }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Register
                        </NavLink>
                    </div>
					 <div style={{ margin: "10px" }}>
                        <NavLink
                            to="/users/login"
                            style={({ isActive =true }) => ({
                                color: isActive
                                    ? "greenyellow"
                                    : "white",
                            })}
                        >
                            Login
                        </NavLink>
                    </div>
                </div>
                <Routes>
                    <Route
                       
                        path="/"
                        element={<Home />}
                    />
                    <Route
                        
                        path="/users/register"
                        element={<Register />}
                    />
					 <Route
                        
                        path="/users/login"
                        element={<Login />}
                    />            
                    <Route
                        
                        path="/users/protected"
                        element={<Protected />}
                    />                           
                </Routes>
            </BrowserRouter>
        </>
    );
	
}
export default App;
