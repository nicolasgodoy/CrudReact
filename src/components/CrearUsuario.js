import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUsuarioLocal } from "../storageService";
import { showToast } from "../utils/notifications";
import { getHoyInputFormat } from "../utils/dateUtils.js";

const CrearUsuarios = () => {
    const [Nombre, setNombre] = useState('');
    const [Apellido, setApellido] = useState('');
    const [FechaNacimiento, setFechaNacimiento] = useState('');
    const redirect = useNavigate(); // TE MANDA A LA UBICACION INICIAL


    const store = (e) => {
        e.preventDefault();
        saveUsuarioLocal({ Nombre: Nombre, Apellido: Apellido, FechaNacimiento: FechaNacimiento });
        showToast('success', 'Usuario creado con éxito');
        redirect('/');
    }

    const handleVolver = () => {
        redirect("/"); // Redirige a la grilla en la raíz
    };


    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-lg-6 mx-auto">
                    <div className="glass-card overflow-hidden">
                        <div className="p-4 bg-dark bg-opacity-25 border-bottom border-white border-opacity-10">
                            <h3 className="mb-0 fw-bold">Nuevo Registro</h3>
                        </div>
                        <div className="p-4">
                            <form onSubmit={store}>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small text-uppercase fw-bold">Nombre</label>
                                    <input type="text" id="Nombre" maxLength="50" className="form-control" placeholder="Ej. Juan" required={true} value={Nombre} onChange={(e) => setNombre(e.target.value)}></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-secondary small text-uppercase fw-bold">Apellido</label>
                                    <input type="text" id="Apellido" maxLength="50" className="form-control" placeholder="Ej. Pérez" required={true} value={Apellido} onChange={(e) => setApellido(e.target.value)} ></input>
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-secondary small text-uppercase fw-bold">Fecha de Nacimiento</label>
                                    <input
                                        type="date"
                                        id="FechaNacimiento"
                                        className="form-control"
                                        required={true}
                                        max={getHoyInputFormat()}
                                        value={FechaNacimiento}
                                        onChange={(e) => setFechaNacimiento(e.target.value)}
                                        onClick={(e) => e.target.showPicker()}
                                    ></input>
                                </div>

                                <div className="d-flex gap-3">
                                    <button className="btn btn-modern btn-modern-primary flex-grow-1">Guardar</button>
                                    <button type="button" className="btn btn-modern btn-modern-danger flex-grow-1" onClick={handleVolver}>Cancelar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CrearUsuarios
