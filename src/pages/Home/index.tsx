import { HandPalm, Play } from "phosphor-react";
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from "./style";

import { useContext } from "react";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";
import { FormProvider, useForm } from "react-hook-form";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CyclesContext } from "../../context/CyclesContext";

// export const CyclesContext = createContext({} as CyclesContextType);

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "State the task"),
  minutesAmount: zod
    .number()
    .min(5, "The cycle must be unless 5 minutes")
    .max(60, "the cycle must be latest 60 minutes"),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, createNewCycle, stopCurrencyCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { handleSubmit, watch /*reset*/ } = newCycleForm;

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(createNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={stopCurrencyCycle} type="button">
            <HandPalm size={24} />
            Stop
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
