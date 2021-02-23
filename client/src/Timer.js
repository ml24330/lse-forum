import React, { useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import Button from 'react-bootstrap/Button';

export default function MyStopwatch({ maxTime, setTimes, stage, teamName, teamSide: _teamSide, fullSize }) {
  
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const teamSide = _teamSide === "aff" ? "Affirmative" : _teamSide === "neg" ? "Opposition" : _teamSide;

  const publish = () => {
      if(stage !== "floor") {
        setTimes(times => ([
            ...times,
            {
                stage,
                seconds,
                minutes
            }
        ]))
      } else {
        setTimes(times => ([
            ...times,
            {
                stage: teamName === "Question" ? "floor_q" : "floor_res",
                seconds,
                minutes
            }
        ]))
      }
      reset()
  }

  const timeColor = () => {
        if(minutes === maxTime - 1 && seconds > 30) {
            return "orange";
        } else if(minutes === maxTime && seconds < 15) {
            return "red";
        } else if(minutes >= maxTime && seconds > 16) {
            return "darkred";
        }
  }

  const displaySecond = (second) => {
      if(second < 10) {
          return `0${second}`
      } else {
          return `${second}`
      }
  }

  return (
    <div style={{textAlign: 'center', backgroundColor: "#e6ffee", borderRadius: "20px", margin: "10px", padding: "10px 5px"}}>
      <h1>{teamName}</h1>
      <h2 style={{margin: "0"}}>{teamSide === "Affirmative" ? "正方" : teamSide === "Opposition" ? "反方" : ""}</h2>
      <div style={{fontSize: fullSize ? '250px' : '100px', color: timeColor() }}>
        <span>{minutes}</span>:<span>{displaySecond(seconds)}</span>
      </div>
      <Button variant="success" style={{margin: "0 3px"}} onClick={start}>開始</Button>
      <Button variant="warning" style={{margin: "0 3px"}} onClick={pause}>暫停</Button>
      <Button variant="danger" style={{margin: "0 3px"}} onClick={reset}>重設</Button>
      <Button variant="info" style={{margin: "0 3px"}} onClick={publish}>結束</Button>
    </div>
  );
}