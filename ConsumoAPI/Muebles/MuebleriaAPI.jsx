
import { showAlerta } from "../Funciones/funciones";



export async function ListarMuebles() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch("http://www.muebleriatroncoso.somee.com/api/Mueble/Muebles", requestOptions);
    const data = await response.json();
    const mensaje = data.mensaje;

    // Si el mensaje es "ok", significa que la solicitud fue exitosa
    if (mensaje === "ok") {
      return data;
    } else {
      // Si el mensaje no es "ok aki estamos", algo salió mal, lanzamos una excepción con el mensaje del servidor
      throw new Error(mensaje);
    }
  } catch (error) {
    // Capturamos cualquier error en la solicitud o en el procesamiento JSON
    showAlerta("Error en la solicitud", "error");
    console.log(error);
  }

}


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
    if (mensaje === "ok aki estamos" || mensaje =="ok") {
      showAlerta(mensaje, "success");
    }
  } catch (error) {
    showAlerta("Error en la solicitud", "error");
    console.log(error);
  }
};

export async function BorrarMueble(id, name) {
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

