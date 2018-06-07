var div = document.getElementById('log');
var texto = ' Olá, Seja bem vindo a minha SinglePage ';

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever(texto, div);



  $('.menu-toggle').click(function() {
    $('.menu-toggle').toggleClass('active');
    $('nav').toggleClass('active');
  })
