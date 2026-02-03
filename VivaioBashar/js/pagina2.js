function generaBox(lista, containerId) {
    const container = document.getElementById(containerId);

    for (const pianta of lista) {
    const box = document.createElement("div");
    box.className = "plant_box";

    box.innerHTML = `
        <img src="img/Alberi e Arbusti/${pianta.fileImg}">
        <span class="plant_description">
            <b>${pianta.nome}:</b> ${pianta.descrizione}
        </span>
    `;

    container.appendChild(box);
}
}

generaBox(elencoAlberi, "listaAlberi");
generaBox(elencoArbusti, "listaArbusti");
