import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsuariosLocal, deleteUsuarioLocal } from "../storageService";

const MostrarUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        getUsuarios();
    }, []);

    const getUsuarios = () => {
        const data = getUsuariosLocal();
        setUsuarios(data);
    }
    const deleteUsuarios = (ID) => {
        deleteUsuarioLocal(ID);
        getUsuarios();
    }



    return (
        <div className="container py-5">
            <div className="row mb-5">
                <div className="col-lg-8 mx-auto text-center">
                    <h1 className="display-4 fw-bold mb-3" style={{ background: 'var(--primary-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Gestión de Usuarios
                    </h1>
                    <p className="text-secondary mb-4">CRUD Moderno con React & LocalStorage</p>
                    <div className="d-flex justify-content-center">
                        <Link to='/create' className="btn btn-modern btn-modern-primary px-4">
                            Nuevo Usuario
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-10 mx-auto">
                    <div className="glass-card p-4">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="text-center">#</th>
                                        <th>Nombre completo</th>
                                        <th className="text-center">Edad</th>
                                        <th className="text-end">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {usuarios.length > 0 ? (
                                        usuarios.map((usuario, i) => (
                                            <tr key={usuario.ID}>
                                                <td className="text-center text-secondary" data-label="#">{(i + 1)}</td>
                                                <td className="fw-semibold" data-label="Nombre">
                                                    {usuario.Nombre} {usuario.Apellido}
                                                </td>
                                                <td className="text-center" data-label="Edad">{usuario.Edad} años</td>
                                                <td className="text-end action-buttons" data-label="Acciones">
                                                    <Link to={`/edit/${usuario.ID}`} className="btn btn-modern btn-modern-warning btn-sm me-2">
                                                        Editar
                                                    </Link>
                                                    <button className="btn btn-modern btn-modern-danger btn-sm" onClick={() => deleteUsuarios(usuario.ID)}>
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5 text-secondary text-uppercase" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>
                                                No hay usuarios registrados
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MostrarUsuarios;


