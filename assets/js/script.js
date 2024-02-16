/* 
Case Sensitive = Reconhece letras maiúsculas e minúsculas

por Tag:getElementByTagName()
por Id:getElementById()
por Nome: getElementByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
 */

let nome = window.document.getElementById("nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = "90%";
email.style.width = "90%";

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length <3) {
        txt.innerHTML = "Nome Inválido"
        txt.style.color = "red"
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1) {
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    }else{
        txtEmail.innerHTML = "Nome Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100) {
        txtAssunto.innerHTML = "Texto muito longo. Digite no máximo 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"

    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!")
    }else {
        alert("Preencha o formulário corretamente antes de enviar!")    }
}