export const calcularEdad = (fechaNacimiento) => {
    if (!fechaNacimiento) return "N/A";

    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    return edad >= 0 ? edad : 0;
};

export const formatearFecha = (fecha) => {
    if (!fecha) return "Sin fecha";
    const [year, month, day] = fecha.split('-');
    return `${day}/${month}/${year}`;
};

export const getHoyInputFormat = () => {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = String(hoy.getMonth() + 1).padStart(2, '0');
    const day = String(hoy.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};
