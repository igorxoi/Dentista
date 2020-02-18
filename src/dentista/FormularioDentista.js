import React, { Component } from 'react'

class FormularioDentista extends Component {

	constructor(props) {
		super(props)

		this.stateInicial = {
			codigo: '',
			nome: '',
			cro: '',
			telefone: '',
			email: ''
		}

		//seta o state inicial das variaveis
		this.state = this.stateInicial;
	}

	//função que manipula a entrada do usuario
	//event é um parametro que sabe o evento que aconteceu com o user
	inputHandler = (event) => {
		//nome das const tem que ser o mesmo dentro do target
		const { name, value } = event.target;

		/*
		outra forma de fazer a mesma coisa de cima, só q com o nome diferente
		const nome_atributo = event.target.name;
		*/

		//name está entre [] pq ele é uma propriedade. devemos usar o [] para todas os nomes de variavel
		//cujo o nome está rezervado para comandos da liguagens 
		this.setState({ [name]: value });
	}

	//função que o onClick do botão chama
	enviarDados = () => {
		//estamos chamando dentros da função a função enviar dados dentro dessa function que foi passado pela props 
		//console.log(this.state)
		this.props.enviarDados(this.state);
		this.setState(this.stateInicial)
	}

	render() {

		//esse é um jeito novo de pegar variaveis do state e colocar dentro de outra variavel, o nome
		//dos campos dentro da matrix tem que ser o mesmo nome da variavel declarada dentro do state
		const { codigo, nome, cro, telefone, email } = this.state;

		//outra forma de fazer a mesma ação é
		//const nome = this.state.nome;

		return (
			<div className="card mt-4">
				<div className="card-header">
					<h5>Cadastro de dentistas</h5>
				</div>
				<div className="card-body">
					<div className="form-group">
						<form>
							{/* formularioooooo */}
							<label htmlFor="codigo">Codigo:</label>
							<input type="text" className="form-control" id="codigo" name="codigo" value={codigo} onChange={this.inputHandler}></input>

							<label htmlFor="nome">Nome:</label>
							<input type="text" className="form-control" id="nome" name="nome" value={nome} onChange={this.inputHandler}></input>

							<label htmlFor="cro">CRO:</label>
							<input type="text" className="form-control" id="cro" name="cro" value={cro} onChange={this.inputHandler}></input>

							<label htmlFor="telefone">Telefone:</label>
							<input type="text" className="form-control" id="telefone" name="telefone" value={telefone} onChange={this.inputHandler}></input>

							<label htmlFor="email">Email:</label>
							<input type="text" className="form-control" id="email" name="email" value={email} onChange={this.inputHandler}></input>

							<button className="btn btn-outline-success form-control mt-4" type="button" onClick={ this.enviarDados }>Enviar</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default FormularioDentista;