const form = document.getElementById("formularioDoacao");
form.addEventListener("submit", function (event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value.trim();
    let idade = document.getElementById("idade").value;
    let peso = document.getElementById("peso").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;
    let tipoSangue = document.getElementById("tipoSangue").value;
    
    if (!nome.includes(" ")) {
        alert("Informe seu nome e sobrenome");
        return;
    }

    if (!email.includes("@")) {
        alert("Email inválido");
        return;
    }

    if (idade < 16) {
        alert("Você precisa ter 16 anos ou mais para doar sangue");
        return;
    }

    if (peso < 50) {
        alert("O peso mínimo para doar sangue é de 50kg");
        return;
    }

    if (!/^[0-9]+$/.test(telefone)) {
        alert("O telefone deve conter apenas números");
        return;
    }

    if (!cidade) {
        alert("É obrigatório informar a sua cidade");
        return;
    }

    if (!estado) {
        alert("É obrigatório informar a seu estado");
        return;
    }

    if (!tipoSangue) {
        alert("Informe seu tipo sanguíneo");
        return;
    }


});