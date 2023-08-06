
import { showAlerta } from "../Funciones/funciones";



export async function ListarVentas() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch("http://www.muebleriatroncoso.somee.com/api/Ventas/ListarVentas", requestOptions);
    const data = await response.json();
    const mensaje = data.mensaje;

    // Si el mensaje es "ok", significa que la solicitud fue exitosa
    if (mensaje === "ok") {
      return data.response;
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


export async function ActualizarGuardarV(metodo, parametros, url) {
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
      if ( mensaje =="ok") {
        showAlerta(mensaje, "success");
      }
    } catch (error) {
      showAlerta("Error en la solicitud", "error");
      console.log(error);
    }
  };