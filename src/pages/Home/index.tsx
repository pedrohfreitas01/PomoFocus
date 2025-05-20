import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./style";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import * as zod from "zod";
import { useEffect, useState } from "react";
import { differenceInSeconds } from "date-fns";

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "State the task"),
  minutesAmount: zod
    .number()
    .min(5, "The cycle must be unless 5 minutes")
    .max(60, "the cycle must be latest 60 minutes"),
});

// interface NewCycleFormData{
//   task: string
//   minutesAmount: number
// }

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

interface Cycle {
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
}

export function Home() {
  const [cycles, setCycle] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: "",
        minutesAmount: 0,
      },
    });

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  // Starts an interval to update elapsed time every second from cycle start.
  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountSecondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        );
      }, 1000);
    }
  }, [activeCycle]);

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime());

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    // closures
    setCycle((state) => [...state, newCycle]); // adiciona o novo ciclo na lista
    setActiveCycleId(id); // define esse ciclo como ativo

    reset();
  }

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
  const currencySeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currencySeconds / 60);
  const secondsAmount = currencySeconds % 60;

  const minutes = String(minutesAmount).padStart(2, "0");
  const seconds = String(secondsAmount).padStart(2, "0");

  console.log(activeCycle);
  // console.log(formState.errors)

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormContainer>
          <label htmlFor="">Im gonna work in</label>
          <TaskInput
            id="task"
            type="text"
            list="task-suggestions"
            placeholder="What you want to do "
            {...register("task")}
          />

          <datalist id="task-suggestions">
            <option value="Project 1"></option>
            <option value="Study Front"></option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            step={5}
            min={5}
            max={60}
            id="minutesAmount"
            {...register("minutesAmount", { valueAsNumber: true })}
          />
        </FormContainer>

        <span>minutes.</span>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
