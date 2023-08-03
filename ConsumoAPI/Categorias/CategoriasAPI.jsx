import { showAlerta } from "../Funciones/funciones";


export async function ListarCategorias() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch("http://www.muebleriatroncoso.somee.com/api/Categorias", requestOptions);

        if (response.ok) {
            const data = await response.json();
            // Aquí puedes hacer lo que necesites con los datos
            return data;
        } 
    } catch (error) {
        // Capturamos cualquier error en la solicitud o en el procesamiento JSON
        showAlerta("Error en la solicitud", "error");
        console.log(error);
    }
}


export async function ActualizarGuardarC (metodo, parametros, url){
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
}