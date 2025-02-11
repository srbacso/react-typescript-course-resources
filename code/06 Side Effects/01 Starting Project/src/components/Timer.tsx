import Container from './UI/Container.tsx';
import {type Timer as TimerProps, useTimersContext} from '../store/timers-context.tsx';
import {useState, useEffect, useRef} from "react";

export default function Timer({name, duration}: TimerProps) {
  const interval = useRef<number | null>(null)
  const [remainingTime, setRemainingTime] = useState(duration * 1000)
  const {isRunning} = useTimersContext();


  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 50);
      }, 50);
      interval.current = timer;
    } else if (!isRunning && interval.current) {
      clearInterval(interval.current);
    }

    return () => {
      clearInterval(timer);
    }
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={remainingTime}></progress>
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
}

