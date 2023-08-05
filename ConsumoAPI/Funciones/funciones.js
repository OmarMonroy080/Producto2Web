import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export function showAlerta(mensaje, icono, foco = '') {
  onfocus(foco);
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: mensaje,
    icon: icono,
  });
}

function onfocus(foco) {
  if (foco !== '') {
    document.getElementById(foco).focus();
  }
}

export function esLink(cadena) {
  // Expresión regular para validar un enlace
  const enlaceRegex = /^(ftp|http|https):\/\/[^ "]+$/;

  // Expresión regular para validar una imagen con o sin parámetros de consulta
  const imagenRegex = /\.(jpg|jpeg|png|gif|bmp|webp)(\?.*)?$/i;

  // Comprobamos si la cadena cumple con ambos patrones
  return enlaceRegex.test(cadena) && imagenRegex.test(cadena);
}