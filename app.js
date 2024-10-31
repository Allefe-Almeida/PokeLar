const modal = document.getElementById("modal");

function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    let alert = document.getElementById("results")
    let nomeInclui = "";
    let tipoInclui = "";
    let resultados = "";

    if (!campoPesquisa) {
        alert.innerHTML = ""; // Limpa o alert
        section.innerHTML = ""; // Limpa a section
        for (let dado of dados) {
            section.innerHTML += gerarResultadoHTML(dado); // Mostra todos os resultados
        }
        return;
    }

    for (let dado of dados) {
        // Verifica se o nome inclui o texto da pesquisa
        nomeInclui = dado.nome.toLowerCase().includes(campoPesquisa.toLowerCase());

        // Verifica se algum tipo inclui o texto da pesquisa
        tipoInclui = dado.tipo.some(tipo => tipo.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().includes(campoPesquisa.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()));

        // Verifica se o número inclui o texto da pesquisa
        numeroInclui = dado.numero.includes(campoPesquisa);

        // Se o nome, tipo ou número inclui o texto da pesquisa, gera o HTML do resultado
        if (nomeInclui || tipoInclui || numeroInclui) {
            resultados += gerarResultadoHTML(dado);
        }
    }

    if (!resultados) {
        alert.innerHTML = "Nada foi encontrado.";
        section.innerHTML = "";
        return
    }

    section.innerHTML = resultados;
    alert.innerHTML = ""
}

function gerarResultadoHTML(dado) {

    return `
        <div class="item-resultado" data-dado='${JSON.stringify(dado)}' onclick="abrirModal(this);">

            <img src=${dado.imagem} alt="${dado.nome}" >
                <p class="pkm-num">Nº ${dado.numero}</p>
                <p class="pkm-nome">${dado.nome}</p>
                
                
                <div class="tipos">
                    ${gerarTiposHTML(dado.tipo)}
                </div>
                <!--  
                <p class="descricao">${dado.descricao}</p>
                -->

        </div>
    `;
}

function gerarTiposHTML(tipos) {
    let tiposHTML = "";
    for (let tipo of tipos) {
        tiposHTML += `<span class="tipo ${tipo.toLowerCase()}">${tipo}</span>`;
    }
    return tiposHTML;
}

document.getElementById("campo-pesquisa").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // Chama a função de pesquisa
        pesquisar();
    }
});

function abrirModal(elemento) {
    const dado = JSON.parse(elemento.getAttribute('data-dado'));
    const tipo = dado.tipo[0].toLowerCase(); // assume que o primeiro tipo é o principal
    const tipoColor = getTipoColor(tipo); // função para obter a cor do tipo
    modal.style.setProperty('--tipo-color', tipoColor); // define a variável CSS --tipo-color

    const modalContent = `
    <div class="modal-container">
        <div class="modal-tittle">
            <h2>${dado.nome}  Nº ${dado.numero}</h2>

            <button id="close-modal" onclick="fecharModal()">
                <span class="material-symbols-outlined">close</span>
            </button>
        </div>

        <img src="${dado.imagem}" alt="${dado.nome}">
        
        <div class="tipos">
            ${gerarTiposHTML(dado.tipo)}
        </div>
        <h2 class="pkm-descricao">Descrição:</h2>
        <hr>
        <p>${dado.descricao}</p>
    </div>
    `;

    console.log(dado);
    modal.innerHTML = modalContent;
    modal.style.display = 'flex'
}

function fecharModal(){
    modal.style.display = 'none'
}

modal.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none'
    }
})

function getTipoColor(tipo) {
    switch (tipo) {
        case 'aço':
            return '#b8b8d0';
        case 'água':
            return '#6890f0';
        case 'dragão':
            return '#7038f8';
        case 'elétrico':
            return '#f8d030';
        case 'fada':
            return '#f0b6bc';
        case 'fantasma':
            return '#705898';
        case 'fogo':
            return '#f08030';
        case 'gelo':
            return '#98d8d8';
        case 'inseto':
            return '#a8b820';
        case 'lutador':
            return '#c03028';
        case 'normal':
            return '#a8a878';
        case 'pedra':
            return '#b8a038';
        case 'planta':
            return '#78c850';
        case 'psíquico':
            return '#f85888';
        case 'rocha':
            return '#b8a038';
        case 'sombrio':
            return '#705848';
        case 'terrestre':
            return '#e0c068';
        case 'venenoso':
            return '#a040a0';
        case 'voador':
            return '#a890f0';
        default:
            return '#FFFFFF'; // cor padrão caso o tipo não seja encontrado
    }
}