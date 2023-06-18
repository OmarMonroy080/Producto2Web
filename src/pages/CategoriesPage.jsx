import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CategoriesPage = () => {
  // useEffect(() => {
  //   $('#MyTable').DataTable({
  //     dom: 'Bfrtip',
  //     buttons: {
  //       buttons: [
  //         {
  //           extend: 'csv',
  //           titleAttr: 'Descargar CSV',
  //           className: 'btn btn-outline-primary',
  //           text: '<i class="fas fa-file-csv"></i>',
  //           orientation: 'landscape',
  //         },
  //         {
  //           extend: 'pdf',
  //           titleAttr: 'Descargar PDF',
  //           className: 'btn btn-outline-danger',
  //           text: '<i class="fas fa-file-pdf"></i>',
  //           orientation: 'landscape'
  //         },
  //         {
  //           extend: 'excel',
  //           titleAttr: 'Descargar Excel',
  //           className: 'btn btn-outline-success',
  //           text: '<i class="fas fa-file-excel"></i>',
  //           orientation: 'landscape',
  //         },
  //       ],
  //       dom: {
  //         button: {
  //           className: 'btn',
  //         },
  //       },
  //     },
  //     language: {
  //       "aria": {
  //         "sortAscending": "Activar para ordenar la columna de manera ascendente",
  //         "sortDescending": "Activar para ordenar la columna de manera descendente"
  //       },
  //       "autoFill": {
  //         "cancel": "Cancelar",
  //         "fill": "Rellene todas las celdas con <i>%d&lt;\\\/i&gt;<\/i>",
  //         "fillHorizontal": "Rellenar celdas horizontalmente",
  //         "fillVertical": "Rellenar celdas verticalmente"
  //       },
  //       "buttons": {
  //         "collection": "Colección",
  //         "colvis": "Visibilidad",
  //         "colvisRestore": "Restaurar visibilidad",
  //         "copy": "Copiar",
  //         "copyKeys": "Presione ctrl o u2318 + C para copiar los datos de la tabla al portapapeles del sistema. <br \/> <br \/> Para cancelar, haga clic en este mensaje o presione escape.",
  //         "copySuccess": {
  //           "1": "Copiada 1 fila al portapapeles",
  //           "_": "Copiadas %d fila al portapapeles"
  //         },
  //         "copyTitle": "Copiar al portapapeles",
  //         "csv": "CSV",
  //         "excel": "Excel",
  //         "pageLength": {
  //           "-1": "Mostrar todas las filas",
  //           "1": "Mostrar 1 fila",
  //           "_": "Mostrar %d filas"
  //         },
  //         "pdf": "PDF",
  //         "print": "Imprimir"
  //       },
  //       "decimal": ",",
  //       "emptyTable": "No se encontraron resultados",
  //       "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
  //       "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
  //       "infoFiltered": "(filtrado de un total de _MAX_ registros)",
  //       "infoThousands": ",",
  //       "lengthMenu": "Mostrar _MENU_ registros",
  //       "loadingRecords": "Cargando...",
  //       "paginate": {
  //         "first": "Primero",
  //         "last": "Último",
  //         "next": "Siguiente",
  //         "previous": "Anterior"
  //       },
  //       "processing": "Procesando...",
  //       "search": "Buscar:",
  //       "searchBuilder": {
  //         "add": "Añadir condición",
  //         "button": {
  //           "0": "Constructor de búsqueda",
  //           "_": "Constructor de búsqueda (%d)"
  //         },
  //         "clearAll": "Borrar todo",
  //         "condition": "Condición",
  //         "data": "Data",
  //         "deleteTitle": "Eliminar regla de filtrado",
  //         "leftTitle": "Criterios anulados",
  //         "logicAnd": "Y",
  //         "logicOr": "O",
  //         "rightTitle": "Criterios de sangría",
  //         "title": {
  //           "0": "Constructor de búsqueda",
  //           "_": "Constructor de búsqueda (%d)"
  //         },
  //         "value": "Valor",
  //         "conditions": {
  //           "date": {
  //             "after": "Después",
  //             "before": "Antes",
  //             "between": "Entre",
  //             "empty": "Vacío",
  //             "equals": "Igual a",
  //             "not": "Diferente de",
  //             "notBetween": "No entre",
  //             "notEmpty": "No vacío"
  //           },
  //           "number": {
  //             "between": "Entre",
  //             "empty": "Vacío",
  //             "equals": "Igual a",
  //             "gt": "Mayor a",
  //             "gte": "Mayor o igual a",
  //             "lt": "Menor que",
  //             "lte": "Menor o igual a",
  //             "not": "Diferente de",
  //             "notBetween": "No entre",
  //             "notEmpty": "No vacío"
  //           },
  //           "string": {
  //             "contains": "Contiene",
  //             "empty": "Vacío",
  //             "endsWith": "Termina con",
  //             "equals": "Igual a",
  //             "not": "Diferente de",
  //             "notEmpty": "Nop vacío",
  //             "startsWith": "Inicia con"
  //           },
  //           "array": {
  //             "equals": "Igual a",
  //             "empty": "Vacío",
  //             "contains": "Contiene",
  //             "not": "Diferente",
  //             "notEmpty": "No vacío",
  //             "without": "Sin"
  //           }
  //         }
  //       },
  //       "searchPanes": {
  //         "clearMessage": "Borrar todo",
  //         "collapse": {
  //           "0": "Paneles de búsqueda",
  //           "_": "Paneles de búsqueda (%d)"
  //         },
  //         "count": "{total}",
  //         "emptyPanes": "Sin paneles de búsqueda",
  //         "loadMessage": "Cargando paneles de búsqueda",
  //         "title": "Filtros Activos - %d",
  //         "countFiltered": "{shown} ({total})"
  //       },
  //       "select": {
  //         "1": "%d fila seleccionada",
  //         "_": "%d filas seleccionadas",
  //         "cells": {
  //           "1": "1 celda seleccionada",
  //           "_": "$d celdas seleccionadas"
  //         },
  //         "columns": {
  //           "1": "1 columna seleccionada",
  //           "_": "%d columnas seleccionadas"
  //         }
  //       },
  //       "thousands": ",",
  //       "zeroRecords": "No se encontraron resultados",
  //       "datetime": {
  //         "previous": "Anterior",
  //         "hours": "Horas",
  //         "minutes": "Minutos",
  //         "seconds": "Segundos",
  //         "unknown": "-",
  //         "amPm": [
  //           "am",
  //           "pm"
  //         ],
  //         "next": "Siguiente"
  //       },
  //       "editor": {
  //         "close": "Cerrar",
  //         "create": {
  //           "button": "Nuevo",
  //           "title": "Crear Nuevo Registro",
  //           "submit": "Crear"
  //         },
  //         "edit": {
  //           "button": "Editar",
  //           "title": "Editar Registro",
  //           "submit": "Actualizar"
  //         },
  //         "remove": {
  //           "button": "Eliminar",
  //           "title": "Eliminar Registro",
  //           "submit": "Eliminar",
  //           "confirm": {
  //             "_": "¿Está seguro que desea eliminar %d filas?",
  //             "1": "¿Está seguro que desea eliminar 1 fila?"
  //           }
  //         },
  //         "error": {
  //           "system": "Ha ocurrido un error en el sistema (<a target=\"\\\" rel=\"\\ nofollow\" href=\"\\\">Más información&lt;\\\\\\\/a&gt;).&lt;\\\/a&gt;<\/a>"
  //         },
  //         "multi": {
  //           "title": "Múltiples Valores",
  //           "info": "Los elementos seleccionados contienen diferentes valores para este registro. Para editar y establecer todos los elementos de este registro con el mismo valor, hacer click o tap aquí, de lo contrario conservarán sus valores individuales.",
  //           "restore": "Deshacer Cambios",
  //           "noMulti": "Este registro puede ser editado individualmente, pero no como parte de un grupo."
  //         }
  //       }
  //     }
  //   });
  // }, []);

  return (
    <>
      <h1>Categorias</h1>
      <Link className="btn btn-primary mb-3" to="create">
        <i className="fas fa-plus-circle"></i> Crear categoria
      </Link>

      <table
        id="MyTable"
        className="table table-striped table-hover table-borderless shadow align-middle text-center"
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Fecha alta</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td>data...</td>
            <td className="d-flex justify-content-center g-3">
              <a className="btn btn-info mx-1 disabled">
                <i className="fas fa-info-circle"></i> data...
              </a>
              <a className="btn btn-warning mx-1">
                <i className="fas fa-edit"></i> data...
              </a>
              <a className="btn btn-danger mx-1">
                <i className="fas fa-minus-circle"></i> data...
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CategoriesPage;
