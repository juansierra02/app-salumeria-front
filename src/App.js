import { Routes, Route, BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./components/Auth/Auth";
import Navegacion from "./components/Navegacion/Navegacion";
import Home from "./pages/Home/Home";
import ListarPedido from "./pages/Listar/ListarPedido";
import CrearPedido from "./pages/Crear/CrearPedido";
import EditarPedido from "./pages/Editar/EditarPedido";
import Login from "./components/Login/Login";
import RutasPublicas from "./components/Rutas/RutasPublicas";
import RutasPrivadas from "./components/Rutas/RutasPrivadas";
import Logout from "./components/Rutas/Logout";
import Footer from "./components/Footer/Footer2"

import "./App.css";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Navegacion />
                <Routes>
                    <Route element={<RutasPublicas />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/CrearPedido" element={<CrearPedido />} />
                        <Route path="/Login" element={<Login />} />
                    </Route>
                    <Route element={<RutasPrivadas />}>
                        <Route path="/:id" element={<EditarPedido />} />
                        <Route
                            path="/listarPedido"
                            element={<ListarPedido />}
                        />
                        <Route path="/logout" element={<Logout />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;
