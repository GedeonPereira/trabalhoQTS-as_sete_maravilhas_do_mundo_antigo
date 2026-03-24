class Formulario{
	constructor(){
		this.form = document.getElementById("form");
		this.nome = document.getElementById("nome");
		this.email = document.getElementById("email");
		this.mensagem = document.getElementById("mensagem");
	}

	validar(){
		if(this.nome.value === "" || this.email.value === "" || this.mensagem.value === ""){
			alert("Preencha todos os campos!");
			return false;
		}

		return true;
	}

	enviar(event){
		event.preventDefault();

		if(this.validar()){
			alert("Mensagem enviada com sucesso!");
			this.form.reset();
		}
	}
}

function iniciar(){
	const formulario = new Formulario();
	formulario.form.addEventListener("submit", (e) => formulario.enviar(e));
}

document.addEventListener("DOMContentLoaded", iniciar);