import React from 'react';
import TabelaHead from './components/TabelaHead';
import TabelaFoot from './components/TabelaFoot';
import TabelaBody from './components/TabelaBody'


function App() {
  return (
    <table className="tabela">
      <TabelaHead />
      <TabelaBody />
      <tabelaFoot />
    </table>
    
  );
}

export default App;
