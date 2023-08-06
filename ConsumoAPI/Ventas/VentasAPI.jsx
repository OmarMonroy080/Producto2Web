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
    throw error; // Re-lanzamos el error para que el componente que llama a esta función pueda manejarlo
  }
}

export async function ActualizarVenta(parametros, url) {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(parametros),  
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    const mensaje = data.mensaje;
    if (mensaje === "ok") {
      showAlerta(mensaje, "success");
    }
  } catch (error) {
    showAlerta("Error en la solicitud", "error");
    console.log(error);
    throw error; // Re-lanzamos el error para que el componente que llama a esta función pueda manejarlo
  }
}

export async function EliminarVenta(idVenta) {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(`http://www.muebleriatroncoso.somee.com/api/Ventas/Eliminar/${idVenta}`, requestOptions);
    const data = await response.json();
    const mensaje = data.mensaje;
    if (mensaje === "ok") {
      showAlerta(mensaje, "success");
    }
  } catch (error) {
    showAlerta("Error en la solicitud", "error");
    console.log(error);
    throw error; // Re-lanzamos el error para que el componente que llama a esta función pueda manejarlo
  }
}
const guardarVenta = async (idMueble, idUsuario) => {
  const parametros = {
    idMueble: idMueble,
    idUsuario: idUsuario,
  };

  try {
    const response = await fetch("http://www.muebleriatroncoso.somee.com/api/Ventas/Guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(parametros),
    });

    const data = await response.json();
    const mensaje = data.mensaje;
    if (mensaje === "ok") {
      showAlerta("Venta guardada exitosamente", "success");
    }
  } catch (error) {
    showAlerta("Error al guardar la venta", "error");
    console.log(error);
  }
};
