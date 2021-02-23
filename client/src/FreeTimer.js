import React, { useState, useEffect } from 'react';
import { useStopwatch } from 'react-timer-hook';
import Button from 'react-bootstrap/Button';

export default function MyStopwatch({ maxTime, setTimes, aff, neg }) {

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const [isAff, setIsAff] = useState(true);
    const [affTime, setAffTime] = useState({seconds: 0, minutes: 0});
    const [negTime, setNegTime] = useState({seconds: 0, minutes: 0});

    const publish = () => {
        setTimes(times => ([
            ...times,
            {
                stage: "free_aff",
                seconds: affTime.seconds,
                minutes: affTime.minutes
            },
            {
                stage: "free_neg",
                seconds: negTime.seconds,
                minutes: negTime.minutes
            }
        ]))
        clear();
    }

    useEffect(() => {
        const total_seconds = minutes*60 + seconds;
        const aff_total_seconds = affTime.minutes*60 + affTime.seconds;
        const neg_total_seconds = negTime.minutes*60 + negTime.seconds;
        isAff 
            ? setAffTime(() => ({seconds: (total_seconds - neg_total_seconds) % 60, minutes: Math.floor((total_seconds - neg_total_seconds) / 60)}))
            : setNegTime(() => ({seconds: (total_seconds - aff_total_seconds) % 60, minutes: Math.floor((total_seconds - aff_total_seconds) / 60)}))
    }, [isAff, seconds])

    const switchTime = () => setIsAff(isAff => !isAff);

    const clear = () => {
        reset();
        setAffTime({seconds: 0, minutes: 0});
        setNegTime({seconds: 0, minutes: 0});
    }

    const displaySecond = (second) => {
        if(second < 10) {
            return `0${second}`
        } else {
            return `${second}`
        }
    }

    const timeColor = ({minutes, seconds}) => {
        if(minutes === maxTime - 1 && seconds > 30) {
            return "orange";
        } else if(minutes >= maxTime) {
            return "darkred";
        } 
    }

  return (
      <>
        <div style={{textAlign: 'center', backgroundColor: "#e6ffee", borderRadius: "20px", margin: "10px", padding: "10px 5px"}}>
            <h1>{aff}</h1>
            <h2 style={{margin: "0"}}>正方</h2>
            <div style={{fontSize: '100px', color: timeColor(affTime)}}>
                <span>{affTime.minutes}</span>:<span>{displaySecond(affTime.seconds)}</span>
            </div>
        </div>
        <div style={{width: "100%", textAlign: "center"}}>
            <Button style={{margin: "0 3px"}} variant="primary" onClick={switchTime}>切換</Button>
            <Button style={{margin: "0 3px"}} variant="success" onClick={start}>開始</Button>
            <Button style={{margin: "0 3px"}} variant="warning" onClick={pause}>暫停</Button>
            <Button style={{margin: "0 3px"}} variant="danger" onClick={clear}>重設</Button>
            <Button style={{margin: "0 3px"}} variant="info" onClick={publish}>結束</Button>
        </div>
        <div style={{textAlign: 'center', backgroundColor: "#e6ffee", borderRadius: "20px", margin: "10px", padding: "10px 5px"}}>
            <h1>{neg}</h1>
            <h2 style={{margin: "0"}}>反方</h2>
            <div style={{fontSize: '100px', color: timeColor(negTime)}}>
                <span>{negTime.minutes}</span>:<span>{displaySecond(negTime.seconds)}</span>
            </div>
        </div>
    </>
  );
}