import React, { useState, useEffect, useRef } from 'react';
import Timer from './Timer.js';
import FreeTimer from './FreeTimer.js';
import Banner from './Banner.js';
import { useLocation } from 'react-router';
import Form from 'react-bootstrap/Form';

export default function TimerPage() {
    
    const location = useLocation();

    const [times, setTimes] = useState([]);

    const [stage, setStage] = useState("");

    const params = new URLSearchParams(location.search);

    const isFinal = params.get("isFinal") === "true";
    const aff = params.get("aff");
    const neg = params.get("neg");
    const motion = params.get("motion");

    const renderSwitch = stage => {
        switch(stage) {
            case "aff1":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={aff} teamSide="aff" fullSize={true} />)
            case "aff2":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={aff} teamSide="aff" fullSize={true} />)
            case "aff3":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={aff} teamSide="aff" fullSize={true} />)
            case "aff4":
                return (<Timer maxTime={isFinal ? 5 : 4} setTimes={setTimes} stage={stage} teamName={aff} teamSide="aff" fullSize={true} />)
            case "neg1":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={neg} teamSide="neg" fullSize={true} />)
            case "neg2":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={neg} teamSide="neg" fullSize={true} />)
            case "neg3":
                return (<Timer maxTime={isFinal ? 4 : 3} setTimes={setTimes} stage={stage} teamName={neg} teamSide="neg" fullSize={true} />)
            case "neg4":
                return (<Timer maxTime={isFinal ? 5 : 4} setTimes={setTimes} stage={stage} teamName={neg} teamSide="neg" fullSize={true} />)
            case "floor":
                return (<><Timer maxTime={1} setTimes={setTimes} stage={stage} teamName="Question" fullSize={false} /> <Timer maxTime={1} setTimes={setTimes} stage={stage} teamName="Response" fullSize={false} /></>)
            case "prep":
                return (<Timer maxTime={isFinal ? 3 : 1} setTimes={setTimes} stage={stage} teamName="" fullSize={true} />)
            case "free":
                return (<FreeTimer maxTime={isFinal ? 4 : 2} setTimes={setTimes} aff={aff} neg={neg} />)
            default:
                return (<></>)
        }
    }

    return (
        <div>
            <Banner times={times} setTimes={setTimes} />
            <div style={{width: "calc(100% - 175px)"}}>
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Control as="select" value={stage} onChange={e => setStage(e.target.value)} style={{width: "50%", margin: "10px auto"}}>
                        <option value="">選擇環節...</option>
                        <option value="aff1">正方主辯 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        <option value="neg1">反方主辯 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        <option value="aff2">正方一副 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        <option value="neg2">反方一副 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        <option value="aff3">正方二副 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        <option value="neg3">反方二副 ({isFinal ? "四分鐘" : "三分鐘"})</option>
                        {isFinal && <option value="floor">台下發問 (十分鐘)</option>}
                        <option value="free">自由辯論 ({isFinal ? "各四分鐘" : "各兩分鐘"})</option>
                        <option value="prep">準備結辯 ({isFinal ? "三分鐘" : "一分鐘"})</option>
                        <option value="neg4">反方結辯 ({isFinal ? "五分鐘" : "四分鐘"})</option>
                        <option value="aff4">正方結辯 ({isFinal ? "五分鐘" : "四分鐘"})</option>
                    </Form.Control>
                    <h2 style={{width: "100%", textAlign: "center"}}>正方辯題： {motion}</h2>
                </Form>
            {renderSwitch(stage)}
            </div>
        </div>
    )
}
