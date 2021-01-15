function equacaofinal(a, b, c) {
        modal.style.display = "block";
       
      
    a = parseInt(document.getElementById("a").value);

    b = parseInt(document.getElementById("b").value);

    c = parseInt(document.getElementById("c").value)

    if (delta(a, b, c) > 0) {
        document.getElementById("resul").innerHTML = "O Valor de x1 é: " + x1(a, b, delta(a, b, c))
        document.getElementById("val b").innerHTML = "O Valor de x2 é: " + x2(a, b, delta(a, b, c))
        document.getElementById("val h").innerHTML = "O Valor de delta é: " + delta(a,b,c)
    } else {
        alert("O delta é negativo ou o os valores não foram definidos")
    }

    function delta(a, b, c) {
        return (b ** 2) - (4 * a * c);

    }

    function x1(a, b, valordelta) {
        return (-b + Math.sqrt(valordelta)) / (2 * a)
    }

    function x2(a, b, valordelta) {
        return (-b - Math.sqrt(valordelta)) / (2 * a)

    }

}

var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];



span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}







