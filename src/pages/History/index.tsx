import { HistoryContainer, HistoryList, Status } from "./style";

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
              <td>Study JavaScript</td>
              <td>25min</td>
              <td>1 week ago</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
            <tr>
              <td>Read React article</td>
              <td>15min</td>
              <td>3 days ago</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
            <tr>
              <td>Review code</td>
              <td>40min</td>
              <td>2 months ago</td>
              <td>
                <Status statusColor="red">Pending</Status>
              </td>
            </tr>
            <tr>
              <td>Plan new feature</td>
              <td>30min</td>
              <td>Yesterday</td>
              <td>
                <Status statusColor="green">Completed</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
