var totalPersonajes = 52; // aproximado, la API tiene 52 personajes
var personajes = [];

// Conexión general con la API
async function Conexion(filtroFamilia) {
  if (filtroFamilia == "All") {
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();
    return data;
  } else {
    // Filtrar por familia (simula el filtro tipo de Pokémon)
    const res = await fetch("https://thronesapi.com/api/v2/Characters");
    const data = await res.json();

    const personajesFamilia = data.filter(
      p => p.family && p.family.toLowerCase() === filtroFamilia.toLowerCase()
    );

    return personajesFamilia;
  }
}

// Carga inicial (solo una vez)
async function General() {
  if (personajes.length === 0) {
    personajes = await Conexion("All");
  }
  Home(); // Mostrar la pantalla principal
}

// Aplicar filtro (por familia)
async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "";
  personajes = await Conexion(Elfiltro);
  const listaHTML = generarLista(personajes);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
