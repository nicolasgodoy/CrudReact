import Swal from 'sweetalert2';

// Configuración del Toast (notificación sutil abajo a la derecha)
const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#0f172a',
    color: '#ffffff',
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
});

export const showToast = (icon, title) => {
    Toast.fire({
        icon,
        title
    });
};

export const confirmDelete = async (nombre) => {
    const result = await Swal.fire({
        title: '¿Estás seguro?',
        text: `Vas a eliminar a ${nombre}. Esta acción no se puede deshacer.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#f43f5e',
        cancelButtonColor: '#6366f1',
        confirmButtonText: 'Sí, eliminar',
        cancelButtonText: 'Cancelar',
        background: '#0f172a',
        color: '#ffffff',
        customClass: {
            popup: 'glass-card',
            confirmButton: 'btn-modern',
            cancelButton: 'btn-modern'
        }
    });
    return result.isConfirmed;
};
