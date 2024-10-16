const scoreDiv = document.querySelector("div.scoreboard"); // Encontrar el div del marcador en nuestro HTML

let encabezadosDeTabla =  ["id", "First Name", "Last Name", "e-mail", "image"];

const crearTablaDeMarcadores = () => {
  while (scoreDiv.firstChild) scoreDiv.removeChild(scoreDiv.firstChild); // Elimina todos los hijos del div de marcadores (si los hay)
  let tablaDeMarcadores = document.createElement('table'); // Crea la tabla
  tablaDeMarcadores.className = 'tablaDeMarcadores';
  let cabeceraDeTabla = document.createElement('thead'); // Crea el grupo de la cabecera de la tabla
  cabeceraDeTabla.className = 'cabeceraDeTabla';
  let filaDeCabeceraDeTabla = document.createElement('tr'); // Crea la fila que contendrá los encabezados
  filaDeCabeceraDeTabla.className = 'filaDeCabeceraDeTabla';
  // Itera sobre todos los strings en el array encabezadosDeTabla y agrega las celdas de encabezado a la fila de la cabecera
  encabezadosDeTabla.forEach(encabezado => {
    let celdaEncabezado = document.createElement('th'); // Crea la celda de encabezado actual durante una iteración específica
    celdaEncabezado.innerText = encabezado;
    filaDeCabeceraDeTabla.append(celdaEncabezado); // Agrega la celda de encabezado actual a la fila de la cabecera
  });

  cabeceraDeTabla.append(filaDeCabeceraDeTabla); // Agrega la fila de la cabecera al grupo de cabecera de la tabla
  tablaDeMarcadores.append(cabeceraDeTabla);
  let cuerpoDeTabla = document.createElement('tbody'); // Crea el grupo de cuerpo de la tabla
  cuerpoDeTabla.className = "cuerpoDeTabla";
  tablaDeMarcadores.append(cuerpoDeTabla); // Agrega el cuerpo de la tabla al grupo de la tabla
  scoreDiv.append(tablaDeMarcadores); // Agrega la tabla al div del marcador
};

// La función a continuación aceptará un único usuario y su índice para crear el ranking global

const agregarUsuarios = (usuario, indiceUsuario) => {
  const tablaDeMarcadores = document.querySelector('.tablaDeMarcadores'); // Encontrar la tabla que creamos
  let filaCuerpoDeTabla = document.createElement('tr'); // Crear la fila actual de la tabla
  filaCuerpoDeTabla.className = 'filaCuerpoDeTabla';
  let celdaRanking = document.createElement('td');
  celdaRanking.innerText = indiceUsuario;
  let celdaNombre = document.createElement('td');
  celdaNombre.innerText = usuario.first_name;
  let celdaApellido = document.createElement('td');
  celdaApellido.innerText = usuario.last_name;
  let celdaCorreo = document.createElement('td');
  celdaCorreo.innerText = usuario.email;
  let celdaAvatar = document.createElement('td');
  let imagenAvatar = document.createElement('img');
  imagenAvatar.src = usuario.avatar;
  celdaAvatar.appendChild(imagenAvatar);
  filaCuerpoDeTabla.append(celdaRanking, celdaNombre, celdaApellido, celdaCorreo, celdaAvatar); // Agrega las 5 celdas a la fila de la tabla
  tablaDeMarcadores.append(filaCuerpoDeTabla); // Agrega la fila actual al cuerpo de la tabla
};

const obtenerUsuarios = (pagina = 1) => {
  const URL = 'https://reqres.in/api/users?delay=3&page=' + pagina + 'Links';
  fetch(URL)
    .then(res => res.json())
    .then(res => {
      const usuarios = res.data;
      crearTablaDeMarcadores(); // Limpia el div de marcadores si tiene algún nodo hijo, crea y agrega la tabla
      // Itera sobre todos los objetos en el array de usuarios y agrega cada uno al cuerpo de la tabla
      for (const usuario of usuarios) {
        let indiceUsuario = usuarios.indexOf(usuario) + 1; // Índice del usuario en el array para el ranking global (ya están ordenados en el backend)
        agregarUsuarios(usuario, indiceUsuario); // Crea y agrega cada fila al cuerpo de la tabla
      }
    });
};
