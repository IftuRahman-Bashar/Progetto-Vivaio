const elencoAlberi = [
    {
        nome: "Acer palmatum",
        descrizione: "Albero ornamentale molto apprezzato per le sue foglie palmate che in autunno assumono colori vivaci dal rosso al dorato. Ama la luce filtrata e terreni ben drenati.",
        fileImg: "Acer.jpg"
    },
    {
        nome: "Betula pendula",
        descrizione: "Conosciuta come betulla bianca, presenta una corteccia chiara e foglie leggere che creano un effetto luminoso. Cresce rapidamente e tollera bene il freddo.",
        fileImg: "Betula.jpg"
    },
    {
        nome: "Quercus robur",
        descrizione: "La quercia comune è un albero maestoso e longevo, con foglie lobate e una chioma ampia. Richiede spazio e terreni profondi.",
        fileImg: "Quercus.jpg"
    },
    {
        nome: "Prunus serrulata",
        descrizione: "Il celebre ciliegio giapponese, noto per la sua spettacolare fioritura rosa primaverile. Ama posizioni soleggiate e terreni freschi.",
        fileImg: "Prunus.jpg"
    }
];

const elencoArbusti = [
    {
        nome: "Hydrangea macrophylla",
        descrizione: "Arbusto ornamentale con grandi infiorescenze colorate. Ama terreni freschi e leggermente acidi.",
        fileImg: "Hydrangea.jpg"
    },
    {
        nome: "Lavandula angustifolia",
        descrizione: "La classica lavanda, profumata e resistente alla siccità. Perfetta per bordure e giardini mediterranei.",
        fileImg: "Lavanda.jpg"
    },
    {
        nome: "Buxus sempervirens",
        descrizione: "Il bosso è un arbusto sempreverde molto utilizzato per siepi formali e bordure. Tollera bene la potatura e mantiene una forma compatta e ordinata. Cresce lentamente ma è estremamente longevo e resistente.",
        fileImg: "Buxus.jpg"
    },
    {
        nome: "Rosa rugosa",
        descrizione: "Arbusto rustico e resistente, noto per i suoi fiori profumati e le bacche decorative. Si adatta bene a terreni poveri e sabbiosi, ideale per giardini naturali e siepi informali.",
        fileImg: "Rosa.jpg"
    }
];

function generaBox(lista, containerId, cartella) {
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