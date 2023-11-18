document.body.style.zoom = "90%";

let count = 1

document.getElementById("radio1").checked = true

setInterval(function() {
	nextImage()
}, 4000)

function nextImage() {
	count++
 	if (count > 3) {
 		count = 1
 	}
 	document.getElementById("radio"+count).checked = true
}

function playSound() {
  const sound = new Audio("mumu_sound.mp3");
  sound.play();
}

function exibir_cortes() {
  var larguraJanela = 800; 
  var alturaJanela = 700;
  var posX = (window.innerWidth - larguraJanela) / 2;
  var posY = (window.innerHeight - alturaJanela) / 2;
  var janela = window.open("boi_marrom.jpg", "_blank", "width=" + larguraJanela + ",height=" + alturaJanela + ",left=" + posX + ",top=" + posY);
  if (janela) {
    janela.focus();
  }
}
