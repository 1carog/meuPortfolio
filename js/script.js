let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 2000)

function nextImage(){
    count++;
    if(count>3){
        count = 1;
    }

     document.getElementById("radio"+count).checked = true;
}

document.getElementById("formContato").addEventListener("submit", function(event){
    event.preventDefault(); // impede envio real

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensagem = document.getElementById("mensagem").value.trim();

    // Validação simples
    if(nome === "" || email === "" || mensagem === ""){
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Validação de formato de e-mail
    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)){
        alert("Digite um e-mail válido (ex: usuario@dominio.com).");
        return;
    }

    // Simulação de envio
    alert("Mensagem enviada com sucesso!");
    document.getElementById("formContato").reset();
});
