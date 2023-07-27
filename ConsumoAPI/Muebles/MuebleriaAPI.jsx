import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { showAlerta } from "../Funciones/funciones";
const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        return response;
    }
  };

  return { read };
};

export function ListarMuebles(url) {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((json) => json);

  return getSuspender(promise);
};

export async function ActualizarGuardarM(metodo, parametros, url) {
  const requestOptions = {
    method: metodo,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parametros),
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    const mensaje = data.mensaje;
    showAlerta(mensaje, "success");
    if (mensaje === "ok aki estamos" || mensaje =="ok") {
      // Si el mensaje es "ok aki estamos", significa que la actualización fue exitosa
      window.location.reload(); // Recarga la página actual
    }
  } catch (error) {
    showAlerta("Error en la solicitud", "error");
    console.log(error);
  }
};

export function BorrarMueble(id, name) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
      title:'¿Seguro de eliminar el producto '+name+' ?',
      icon: 'question',text:'No se podrá dar marcha atrás',
      showCancelButton:true,confirmButtonText:'Si, eliminar',cancelButtonText:'Cancelar'
  }).then((result) =>{
      if(result.isConfirmed){
          deleteProductOnServer(id)
      }
      else{
          show_alerta('El producto NO fue eliminado','info');
      }
  });

  const deleteProductOnServer = async (id) => {
    try {
      const response = await fetch(`http://www.muebleriatroncoso.somee.com/api/Mueble/Eliminar/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json(); // Leer el contenido de la respuesta

        if (data.mensaje === 'ok') {
          showAlerta('El producto fue eliminado correctamente', 'success');
          window.location.reload(); // Recarga la página actual

        } else {
          showAlerta('No se pudo eliminar el producto', 'error');
        }
      } else if (response.status === 400) {
        // Cuando el servidor devuelve BadRequest (código 400), significa que el mueble no fue encontrado
        showAlerta('Producto no encontrado', 'error');
      } else {
        showAlerta('Error en la solicitud', 'error');
      }
    } catch (error) {
      showAlerta('Error en la solicitud', 'error');
      console.log(error);
    }
  };
};

