import { useContext } from "react";
import { HistoryContainer, HistoryList, Status } from "./style";
import { CyclesContext } from "../../context/CyclesContext";
import { formatDistanceToNow } from "date-fns";

export function History() {
  const { cycles } = useContext(CyclesContext);

  

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
            {cycles.map((cycle) => {
              console.log(cycle); 

              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutes</td>
                  <td>{formatDistanceToNow(cycle.startDate, {
                    addSuffix: true
                  })}</td>
                  <td>
                    {cycle.finishDate && (
                      <Status statusColor="green">Done</Status>
                    )}

                    {cycle.stopDate && (
                      <Status statusColor="red">Stopped</Status>
                    )}

                    {!cycle.finishDate && !cycle.stopDate && (
                      <Status statusColor="yellow">In progress</Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}
