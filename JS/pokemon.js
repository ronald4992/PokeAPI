async function Pokemon(id){
       
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await res.json();

        console.log(data)
        
        let tipopoke ="";
        for (let i=0; i < data.types.length; i++){
                tipopoke += `<span>${data.types[i].type.name}</span>`;
        }
document.getElementById("uno").classList.add(data.types[0].type.name)
        root.innerHTML = ` <section class="c-detalle">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" height="120" width="auto">
        <p>${data.name}</p>
        <p>${data.id}</p>
        <p>${tipopoke}</p>
        <p>Altura: ${data.height / 10} m / Peso: ${data.weight / 10} kg</p>
        <p>hp: ${data.stats[0].base_stat}</p>
        <p>Velocidad: ${data.stats[5].base_stat}</p>
        <p>Ataque: ${data.stats[1].base_stat} Defensa: ${data.stats[2].base_stat}</p>
        <p>Ataque Especial: ${data.stats[3].base_stat} Defensa Especial: ${data.stats[4].base_stat}</p>
        
    </section>`
}


Pokemon(94)