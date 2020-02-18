import React, { Component } from 'react';

const TableHead = () => {
	return (
		<thead>
			<tr>
				<th>CODIGO</th>
				<th>NOME</th>
				<th>TELEFONE</th>
				<th colSpan="2">AÇÕES</th>
			</tr>
		</thead>
	);
}

const TableBody = (props) => {
	const dentistas = props.dentistas.map((dentista) => {
		return (
			<tr key= { dentista.codigo }>
				<td>{ dentista.codigo }</td>
				<td>{ dentista.nome }</td>
				<td>{ dentista.telefone }</td>
				<td><button onClick={ () => {props.consultarDentistar(dentista.codigo)} } className="btn btn-outline-warning">Editar</button></td>
				<td><button onClick={() => {if(window.confirm('Corfirma a exclusão ?')){props.excluirDentista(dentista.codigo)}}} className="btn btn-outline-danger">Excluir</button></td>
			</tr>
		);
	});	

	return(
		<tbody>
			{ dentistas }
		</tbody>
	);
}

class TabelaDentista extends Component {

	render() {

		//destructor usamos quando o nome do da varialvel é o mesmo da propriedade
		const { dentistas, excluirDentista, consultarDentistar } = this.props;
		console.log(dentistas)

		return (
			<div className="card mt-4">
				<div className="card-header">
					<h5>Lista de dentista</h5>
				</div>
				<div className="card-body">
					<table className="table table-hover">
						<TableHead />
						<TableBody dentistas={ dentistas } excluirDentista={ excluirDentista } consultarDentistar={ consultarDentistar } />
					</table>
				</div>
			</div>
		);
	}
}

export default TabelaDentista;