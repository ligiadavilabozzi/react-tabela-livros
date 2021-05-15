import React from 'react'
import TabelaBody from './TabelaBody';
const TabelaFoot = (props) => (
    <tfoot>
        <tr>
            <td colSpan="4">Quantidade de livros na tabela: { props.qdeLivros }</td>
        </tr>
    </tfoot>
);

export default TabelaFoot; 
