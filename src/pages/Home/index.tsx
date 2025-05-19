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


export function Home() {
  const { register, handleSubmit, watch, formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0
      },
    });

  function handleCreateNewCycle(data: any) {
    console.log(data);
    reset()
  }

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
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
