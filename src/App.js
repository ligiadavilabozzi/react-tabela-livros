import React, {Component} from 'react';
import TabelaHead from './components/TabelaHead';
import TabelaFoot from './components/TabelaFoot';
import TabelaBody from './components/TabelaBody'

class App extends Component {
  state={
    livros:[]
  };
  componentDidMount(){
    fetch("/api/livros.json")
    .then(response => response.json())
    .then(livros => this.setState({livros}))
    .catch(function(error){
      console.log("Erro na requisição")
    })
    .finally(function(){
      console.log("Sempre Retorna")
    })
  };
  handleRemoverLinha = () => console.log("Botão clicado")
  render(){
  return (
    <table className="tabela">
      <TabelaHead />
      <TabelaBody 
      livros={ this.state.livros }
      removerLinha={this.handleRemoverLinha}
      />
      <TabelaFoot qdeLivros={ this.state.livros.length }/>
    </table>  
    );
  }
} 

export default App;
