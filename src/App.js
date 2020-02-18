import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './dentista/TabelaDentista'; 
import axios from 'axios';
import Formulario from './dentista/FormularioDentista'
import Navbar from './componentes/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends Component{

  state = {
    dentistas: []
  };

  /* depois da montagem do objeto */
  componentDidMount(){
    axios.get('http://localhost:8080/odonto/dentistas')
      .then((res) => {
        const dentistas = res.data;
        console.log(dentistas);
        this.setState({dentistas});
      })
  }

  //envia os dados para o formulario
  enviarDados = (dentista) => {
    //axios com post precisa de no minimo dois parametros, o primeiro era a url, e o segundo é o objeto
    axios.post('http://localhost:8080/odonto/dentistas', dentista)
      .then((res) => {
        console.log(res.data);
        //função spread
        //altera o estado do state, acrescentando no array de dentista, o ultimo dentista adicionado - que ta no res.data
        this.setState({ dentistas: [...this.state.dentistas, res.data] })
      })
  }

  //apagar o dentista do banco
  excluirDentista = (codigo) => {

    const dentistasAtual = this.state.dentistas;

    axios.delete('http://localhost:8080/odonto/dentistas/' + codigo)
      .then((res) => {
        if(res.status === 204){
          this.setState({ 
            dentistas: dentistasAtual.filter((dentista) => {
              return dentista.codigo !== codigo;
            })
          })
        }
      })    
  }

  consultarDentistar = (codigo) => {
    const dentista = this.state.dentistas.filter((dentista) => {
      return dentista.codigo === codigo;
    })
    console.log(dentista);
  }

  render(){
    return (
      // é uma fragmento de tela 
      <Fragment>
        {/* está passando a função enviarDados para o formulario */}
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Formulario enviarDados = {this.enviarDados} />
            </div>
            <div className="col-md-8">
              <Tabela dentistas = { this.state.dentistas } excluirDentista = {this.excluirDentista} consultarDentistar = {this.consultarDentistar}/>
            </div>
          </div>
        </div>
      </Fragment>    
    );
  }
}

export default App;
