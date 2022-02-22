var num
var resp = 8
var i
var m = 10
var mn = 0

var nome = prompt("nome:")
for (i = 0; i < 4; i++) {

    num = prompt(nome+ " informe um valor que esteja entre " + mn + " e " + m)
    if (num == resp) {
        alert(" Parabéns!" +nome+" a resposta é: " + resp)
        i = 8
    }
    else {
        m--
        mn++
        alert("que pena! você errou, " + nome + ", o numero é entre " + mn + " e " + m)
    }
    if (i == 3) {
        alert("Infelizmente você não conseguiu acertar, " + nome + ", o numero correto é: " + resp)
    }
}
