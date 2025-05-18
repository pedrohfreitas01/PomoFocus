import { HistoryContainer, HistoryList } from "./style";

export function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duracao</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Estudar JavaScript</td>
              <td>25min</td>
              <td>Há 1 semana</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Ler artigo sobre React</td>
              <td>15min</td>
              <td>Há 3 dias</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Revisar código</td>
              <td>40min</td>
              <td>Há 2 meses</td>
              <td>Concluído</td>
            </tr>
            <tr>
              <td>Planejar nova feature</td>
              <td>30min</td>
              <td>Ontem</td>
              <td>Concluído</td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
