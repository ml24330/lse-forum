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
      if(stage === "prep") {
          reset();
          return;
      }
      if(stage !== "floor") {
        setTimes(times => ([
            ...times,
            {
                stage,
                seconds,
                minutes,
                color: timeColor()
            }
        ]))
      } else {
        setTimes(times => ([
            ...times,
            {
                stage: teamName === "發問/準備" ? "floor_q" : teamName === "回應" ? "floor_res" : "floor_total",
                seconds,
                minutes,
                color: timeColor()
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
        } else if(minutes >= maxTime && seconds > 14) {
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
      <h1 style={{fontSize: fullSize ? "7vh" : "5vh"}}>{teamName}</h1>
      <h2 style={{margin: "0", fontSize: "5vh"}}>{teamSide === "Affirmative" ? "正方" : teamSide === "Opposition" ? "反方" : ""}</h2>
      <div style={{fontSize: fullSize ? '40vh' : '10vh', color: timeColor() }}>
        <span>{minutes}</span>:<span>{displaySecond(seconds)}</span>
      </div>
      <Button variant="success" style={{margin: "0 3px"}} onClick={start}>開始</Button>
      <Button variant="warning" style={{margin: "0 3px"}} onClick={pause}>暫停</Button>
      <Button variant="danger" style={{margin: "0 3px"}} onClick={reset}>重設</Button>
      <Button variant="info" style={{margin: "0 3px"}} onClick={publish}>結束</Button>
    </div>
  );
}