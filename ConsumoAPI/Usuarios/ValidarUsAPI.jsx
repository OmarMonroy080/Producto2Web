import {showAlerta} from "../Funciones/funciones";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



export async function ValidarLogin(metodo, parametros, url) {
    //const [Logeado, setLogueado] = useState({ isLoggedIn: false, idUsuario: "", nombre: "" });
    var logueado ={ isLoggedIn: false, idUsuario: "", nombre: "" };
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
            logueado.isLoggedIn= true;
            logueado.idUsuario = data.idUsuario;
            logueado.nombre = data.nombre
            showAlerta('Bienvenido ' + data.nombre, 'success');
        } else if (response.status === 400) {
            showAlerta('Correo o Contraseña Incorrectos', 'error');
        }
    } catch (error) {
        showAlerta("Error en la solicitud", "error");
        console.log(error);
    }

    return logueado;
}


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
