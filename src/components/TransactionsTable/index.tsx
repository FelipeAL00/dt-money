import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((data) => console.log(data));
  });

  return (
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
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2023</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">R$ 1.500</td>
            <td>Casa</td>
            <td>05/02/2023</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
