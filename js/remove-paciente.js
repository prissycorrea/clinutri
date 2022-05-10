var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){ 
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        paiDoAlvo.remove();
    }, 500)
    
})

//pacientes.forEach(function(paciente){
//    paciente.addEventListener("dblclick", function() { //evento de duplo clique
//        this.remove();
//    }) 
//})