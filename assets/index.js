const limite = 5
const min = 80
let km = document.getElementById('valorA')
const local = document.getElementById('valorB')
let valor = ""
let resultado = ""
let result = ""


function arrancada(){
if (km.value <= 5 && km.value != 0){
		result = min
	valor = ("O valor do frete será R$" + result + " reais !" + "\n" + "Verificar o deslocamento!")
	}else if(km.value > 5  && km.value < 300) {
		result = (km.value - 5) * 2.80 + 80
	valor = ("O valor do frete será R$" + result + " reais !" + "\n" + "Verificar o deslocamento!")
  }else if(km.value > 5  && km.value > 300 && km.value < 500) {
		result = (km.value - 5) * 2.80 + 180
	valor = ("O valor do frete será R$" + result + " reais !" + "\n" + "Verificar o deslocamento!")
	} else if(km.value >= 500 ){
		valor = ("Infelizmente não fazemos frete nessa distancia!")
	}
  return alert(valor)
}

function desloca(){
if(local.value > 5 && local.value != 0){
  deslocamento = (local.value - 5) * 1.50
  resultado = ("Deslocamento é: " + deslocamento + " reais!")
}
  return alert (valor + "\n" + resultado)

}

