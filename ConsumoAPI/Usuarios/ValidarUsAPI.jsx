import { showAlerta } from "../Funciones/funciones";



export async function ValidarLogin(metodo, parametros, url) {
    //const [Logeado, setLogueado] = useState({ isLoggedIn: false, idUsuario: "", nombre: "" });
    var logueado = { isLoggedIn: false, idUsuario: "", nombre: "" };
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

        if (mensaje === "Ingreso exitoso") {
            logueado.isLoggedIn = true;
            logueado.idUsuario = data.idUsuario;
            logueado.nombre = data.nombre
            showAlerta('Bienvenido ' + data.nombre, 'success');
        }
    } catch (error) {
        if (response.status === 400) {
            showAlerta("Correo o contraseña Incorrectos");
        }
        else {
            showAlerta("Error al enviar la solicitud");
        }
        console.log(error);
    }

    return logueado;
}


export async function ListarUsuarios() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    try {
        const response = await fetch("http://www.muebleriatroncoso.somee.com/api/Usuario/Usuarios", requestOptions);
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



export async function ActualizarGuardarU(metodo, parametros, url) {
    let response;
    const requestOptions = {
        method: metodo,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(parametros),
    };

    try {
        response = await fetch(url, requestOptions);
        const data = await response.json();
        const mensaje = data.mensaje;
        if (mensaje == "ok aki estamos" || mensaje == "ok" || mensaje == "Actualizado!") {
            showAlerta(mensaje, "success");
            // Si el mensaje es "ok aki estamos", significa que la actualización fue exitosa
        }
    } catch (error) {
        if (response.status === 400) {
            showAlerta("Correo ya registrado");
        }
        else {
            showAlerta("Error al enviar la solicitud");
        }
    }
};

export async function BorrarUsuario(id) {
    try {
        const response = await fetch(`http://www.muebleriatroncoso.somee.com/api/Usuario/Eliminar/${id}`, {
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
