import {createContext} from 'react';

type Timer = {
  name: string;
  duration: number;
}

type TimersState = {
  isRunning: boolean;
  timers: Timer[];

}

type TimersContextValue = TimersState & {
  addTimer: (timer: Timer) => void;
  removeTimer: (timer: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimersContext = createContext<TimersContextValue | null>(null);

