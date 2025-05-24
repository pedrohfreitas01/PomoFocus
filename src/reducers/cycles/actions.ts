import type { Cycle } from "./reducers";

export const ActionTypes = {
  ADD_NEW_CYCLE: "ADD_NEW_CYCLE",
  STOP_CURRENT_CYCLE: "STOP_CURRENT_CYCLE",
  MARK_CURRENT_CYCLE_AS_DONE: "MARK_CURRENT_CYCLE_AS_DONE",
} as const;


export function addNewCycleAction(newCycle: Cycle) {
    return {
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle,
      },
    };
}


export function markCurrentCycleAsFinishedAction() {
    return {
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_DONE,
    };
}


export function stopCurrentCycleAction() {
    return {
      type: ActionTypes.STOP_CURRENT_CYCLE,
    };
}


