import { Container } from "./styles";
import { useEffect } from "react";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions");
  }, []);

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
            <td>Salário</td>
            <td className="deposit">+ R$ 7.000</td>
            <td>Renda</td>
            <td>01/06/2022</td>
          </tr>
          <tr>
            <td>RX 6600</td>
            <td className="withdraw">- R$ 2.700</td>
            <td>Hardware</td>
            <td>15/07/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
