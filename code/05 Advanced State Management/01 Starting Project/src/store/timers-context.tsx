import {type ReactNode, createContext, useContext, useReducer} from 'react';

type Timer = {
  name: string;
  duration: number;
}

type TimersState = {
  isRunning: boolean;
  timers: Timer[];

}

const initialState: TimersState = {
  isRunning: false,
  timers: [],
}

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  removeTimer: (timer: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimersContext = () => {
  const timersCtx = useContext(TimersContext);
  if (timersCtx === null) {
    throw new Error('TimersContext is null');
  }
  return timersCtx;
}

type TimersContextProviderProps = {
  children: ReactNode;
}

function TimerContextProvider({children}: TimersContextProviderProps) {
  const [, ] = useReducer(, initialState);

  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer: () => {
    },
    removeTimer: () => {
    },
    startTimer: () => {
    },
    stopTimer: () => {
    }
  }

  return (
    <TimersContext.Provider value={ctx}>
      {children}
    </TimersContext.Provider>
  )
}

export default TimerContextProvider;