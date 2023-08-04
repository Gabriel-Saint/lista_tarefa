function adicionarTarefa() {

    var tarefaInput = document.getElementById("tarefa");
    var tarefaTexto = tarefaInput.value;

    if (tarefaTexto !== "") {
        var lista = document.getElementById("listaTarefas");
        var novaTarefa = document.createElement("li");
        novaTarefa.innerHTML = `
        <span>${tarefaTexto}</span>
        <div class="btn"><button class="concluida" onclick="marcarConcluida(this)"><img src="https://cdn-icons-png.flaticon.com/128/2/2128.png" alt=""></button>
        <button class="apagar" onclick="apagarTarefa(this)"><img src="https://cdn-icons-png.flaticon.com/128/6932/6932392.png" alt=""></button> </div>
        
        `;
        lista.appendChild(novaTarefa);
        tarefaInput.value = "";
    }
}

function marcarConcluida(botao) {
    var tarefa = botao.parentNode;
    var tarefaTexto = tarefa.querySelector("span");
    tarefaTexto.classList.toggle("completed");
}

function apagarTarefa(botao) {
    novaTarefa.remove();
}

