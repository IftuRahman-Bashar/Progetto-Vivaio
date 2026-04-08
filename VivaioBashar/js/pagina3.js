function generaBox(stringa ,containerId) {
    const container = document.getElementById(containerId);

    fetch("http://192.168.4.59:8000/" + stringa + "").then(
        response => response.json()
        ).then((piante) => {
            piante.forEach(pianta => {
                const box = document.createElement("div");
                box.className = "plant_box";
        
                box.innerHTML = `
                    <img src="http://172.0.0.1:5501/images/${pianta.fileImg}">
                    <span class="plant_description">
                        <b>${pianta.nome}:</b> ${pianta.descrizione}
                    </span>
                `;
        
                container.appendChild(box);
            });
        }).catch(error => console.log("Si è verificato un errore!"))
}

generaBox("elencoBonsaiA","bonsaiA");
generaBox("elencoBonsaiB","bonsaiB");
