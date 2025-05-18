import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, Separator } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <form>
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <input id="task" type="text" />

          <label htmlFor="">durante</label>
          <input type="number" name="" id="minutesAmount" />
        </FormContainer>

        <span>minutos.</span>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <button type="submit">
          <Play size={24} />
          Comecar
        </button>
      </form>
    </HomeContainer>
  );
}
