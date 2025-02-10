import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

//const url = "https://localhost:44330/api/Usuario";
//const url = "http://www.apiangularapp.somee.com/api/Usuario"

const EditarUsuario = () => {
    const[Nombre, setNombre] = useState('');
    const[Apellido, setApellido] = useState('');
    const[Edad, setEdad] = useState('');
    const {ID} = useParams();
    
    const redirect = useNavigate(); // TE MANDA A LA UBICACION INICIAL

    useEffect(() => {
        const getUsuario = async() =>{
            const params = {headers:{'Content-Type':'application/json'}};
            const respuesta = await axios.get(`${url}/${ID}`, params);
            setNombre(respuesta.data.Nombre);
            setApellido(respuesta.data.Apellido);
            setEdad(respuesta.data.Edad);
            
        }
        getUsuario();
    },[])

    const handleVolver = () => {
        redirect("/"); // Redirige a la grilla en la raíz
    };

    const Editar = async(e) => {
        e.preventDefault();
        await axios.put(url,{ID:ID,Nombre:Nombre,Apellido:Apellido,Edad:Edad})
        redirect('/');
    }


  return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="card">
                    <div className="card-header bg-dark text-white">Editar Productos</div>
                    <div className="card-body">
                        <form onSubmit={Editar}>
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

export default EditarUsuario
