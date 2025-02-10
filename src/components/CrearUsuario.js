import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://dominioAngular.somee.com/api/Usuario"
//const url = "https://localhost:44330/api/Usuario";
// CREAR METODO POST CREARUSUARIO EN EL BACKEND PARA QUE ME ANDE ACA Y PASARLE CREAR USUARIO EN VEZ DE USUARIO Y LO MISMO PARA DELETE

const CrearUsuarios = () => {
    const[Nombre, setNombre] = useState('');
    const[Apellido, setApellido] = useState('');
    const[Edad, setEdad] = useState('');
    const redirect = useNavigate(); // TE MANDA A LA UBICACION INICIAL


    const store = async(e) => {
        e.preventDefault();
        await axios.post(url, {Nombre:Nombre,Apellido:Apellido,Edad:Edad});
    }

    const handleVolver = () => {
        redirect("/"); // Redirige a la grilla en la raíz
    };


  return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Añadir Productos</div>
                    <div className="card-body">
                        <form onSubmit={store}>
                            <label>Nombre</label>
                            <input type="text" id="Nombre" maxLength="50" className="form-control" required={true} value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
                            <label>Apellido</label>
                            <input type="text" id="Apellido" maxLength="50" className="form-control" required={true} value={Apellido} onChange={(e) => setApellido(e.target.value)} ></input>
                            <label>Edad</label>
                            <input type="number" id="Edad" maxLength="10" className="form-control" required={true} value={Edad} onChange={(e) => setEdad(e.target.value)}></input>
                        
                        <button className="btn btn-success mt-3 m-2 col-4">Guardar</button>
                        <button className="btn btn-dark mt-3 m-2 col-4" onClick={handleVolver}>Volver</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default CrearUsuarios
