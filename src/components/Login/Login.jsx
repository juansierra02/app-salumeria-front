import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAuthContext } from '../Auth/Auth';

import './Login.css';

//import { NavegacionAdmin } from './NavegacionAdmin'

function Login() {
    const [usu, setUsu] = useState("");
    const [pas, setPas] = useState("");
    const navigate = useNavigate();
    const { login } = useAuthContext()

    const iniciarSesion = (e) => {
        e.preventDefault()


        var txtusu = document.getElementById('txtusu').value;
        var txtpas = document.getElementById('txtpas').value;
        if (txtusu.length === 0 || txtpas.length === 0) {
            alert("Complete los datos faltantes!!");
        } else {
            if (usu === "admin" && pas === "123") {
                login()
                navigate('/listarPedido');
            } else {

                alert("Error de Usuario y/o Contraseña");
                document.getElementById('txtusu').value = "";
                document.getElementById('txtpas').value = "";
                document.getElementById('txtusu').focus();
            }
        }
    }


    return (
        <div className="container text-center">
            <div className="row col  justify-content-center">
                <div className="col-6 border m-5 div-contenedor">
                    <h2 className="m-4">Login</h2>
                    <form id="form_login" onSubmit={iniciarSesion}>
                        <div>
                            {/* <h1 style={{ color: "blue", textalign: "center" }}>LOGIN</h1> */}
                            <label htmlFor="txtusu"><strong>Username</strong></label>
                            <input type="text" id="txtusu" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setUsu(e.target.value)} required />
                        </div>
                        <div>
                            <label htmlFor="txtpas"><strong>Password</strong></label>
                            <input type="password" id="txtpas" style={{ textAlign: "center" }} className="form-control" onChange={(e) => setPas(e.target.value)} required />
                        </div><br />
                        <button type="submit" className="btn btn-primary">Login</button>
                        {/* <input type="submit" className="btn btn-primary" value="Login" onClick={iniciarSesion} /> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login