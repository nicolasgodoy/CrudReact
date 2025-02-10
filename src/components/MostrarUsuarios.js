import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

//const url = "https://localhost:44330/api/Usuario";
const url = "http://www.apiangularapp.somee.com/api/Usuario"

// Terminar de estilizar y intentar subirlo a produccion para ponerlo en el portfolio 

const MostrarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    },[]);

    const getUsuarios = async() => {
        const respuesta = await axios.get(url);
        setUsuarios(respuesta.data);
    }
    const deleteUsuarios = async(ID) => {
        const params = {headers: {'Content-Type':'application/json'}};
        await axios.delete(`${url}/${ID}`,params); // EL ID SE PONE ACA PARA QUE IMPACTE DIRECTAMENTE A LA URL
        getUsuarios();
    }



  return (
    <div className="container-fluid">
        <div className="row mt-3">
            <div className="col-md-4 offset-md-4">
                <h1 className="col-md-12 mb-3">Crud con React y Asp.Net..</h1>
                <div className="d-grid mx-auto">
                    <Link to='/create' className="btn btn-dark">Crear</Link>
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr> <th>#</th><th>Usuario</th><th>Nombre</th><th>Edad</th> </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {usuarios.map( (usuario, i) => (
                                <tr key={usuario.ID}>
                                    <td>{(i+1)}</td>
                                    <td>{usuario.Nombre}</td>
                                    <td>{usuario.Apellido}</td>
                                    <td>{usuario.Edad}</td>
                                    <td>
                                        <Link to={`/edit/${usuario.ID}`} className="btn btn-warning m-1">Editar</Link>
                                        <button className="btn btn-danger m-1" onClick={() => deleteUsuarios(usuario.ID)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default MostrarUsuarios;


