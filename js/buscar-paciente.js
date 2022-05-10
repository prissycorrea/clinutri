var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest(); //responsável por fazer requisições
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes") //abre a página que contém os dados com o método get
    xhr.addEventListener("load", function() {
        if(xhr.status == 200) {
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente)
            })
        } else {
            console.log(xhr.status)
            console.log(xhr.responseText)
            var erroAjax = document.querySelector("#erro-ajax")
            erroAjax.classList.remove("invisivel")
        }
    })
    xhr.send()
})