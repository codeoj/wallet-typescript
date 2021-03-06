import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Transactions() {
  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data))
  }, [])

  return(
    <Container> 
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Dev</td>
            <td className="up">R$7.000,00</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Dev</td>
            <td className="down">R$700</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}