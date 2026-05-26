function mandar(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var numero = document.getElementById("numero").value

    var conteudo = "Olá\n"
    conteudo += "Nome:" + nome + "\n"
    conteudo += "Email:" + email + "\n"
    conteudo += "Número:" + numero + "\n"

    var link = `https://web.whatsapp.com/${contato}?text=${encodeURIComponent(conteudo)}`
}