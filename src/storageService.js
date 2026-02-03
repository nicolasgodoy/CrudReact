const STORAGE_KEY = 'crud_react_users';

export const getUsuariosLocal = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

export const saveUsuarioLocal = (usuario) => {
    const usuarios = getUsuariosLocal();
    const nuevoUsuario = {
        ...usuario,
        ID: usuario.ID || Date.now().toString()
    };
    usuarios.push(nuevoUsuario);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
    return nuevoUsuario;
};

export const updateUsuarioLocal = (id, usuario) => {
    const usuarios = getUsuariosLocal();
    const index = usuarios.findIndex(u => u.ID.toString() === id.toString());
    if (index !== -1) {
        usuarios[index] = { ...usuario, ID: id };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(usuarios));
        return usuarios[index];
    }
    return null;
};

export const deleteUsuarioLocal = (id) => {
    const usuarios = getUsuariosLocal();
    const nuevosUsuarios = usuarios.filter(u => u.ID.toString() !== id.toString());
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nuevosUsuarios));
};

export const getUsuarioByIdLocal = (id) => {
    const usuarios = getUsuariosLocal();
    return usuarios.find(u => u.ID.toString() === id.toString());
};
