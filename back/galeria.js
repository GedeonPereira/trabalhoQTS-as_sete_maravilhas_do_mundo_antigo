class Card{
	constructor(elemento){
		this.card = elemento;
		this.botao = this.card.querySelector(".galeria__botao");
		this.texto = this.card.querySelector(".galeria__texto");
	}

	toggle(){
		this.card.classList.toggle("galeria__card--ativo");
		this.texto.classList.toggle("galeria__texto--ativo");
	}
}

function iniciar(){
	const cards = document.querySelectorAll(".galeria__card");

	cards.forEach(cardEl => {
		const card = new Card(cardEl);
		card.botao.addEventListener("click", () => card.toggle());
	});
}

document.addEventListener("DOMContentLoaded", iniciar);