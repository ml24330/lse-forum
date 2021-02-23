import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function Banner({ times, setTimes }) {

    const renderStage = stage => {
        switch(stage) {
            case "floor_q":
                return "台下發問";
            case "floor_res":
                return "回應發問";
            case "aff1":
                return "正方主辯";
            case "aff2":
                return "正方一副";
            case "aff3":
                return "正方二副";
            case "aff4":
                return "正方結辯";
            case "neg1":
                return "反方主辯";
            case "neg2":
                return "反方一副";
            case "neg3":
                return "反方二副";
            case "neg4":
                return "反方結辯";
            case "free_aff":
                return "正方自由辯論";
            case "free_neg":
                return "反方自由辯論";
            default:
                return "";
        }
    }

    const renderTime = ({minutes, seconds}) => {
        if(seconds < 10) {
            return `${minutes}:0${seconds}`;
        } else {
            return `${minutes}:${seconds}`;
        }
    }

    const handleRemove = idx => {
        const res = window.confirm("確認移除這一紀錄嗎？");
        if(res) {
            setTimes(times => {
                const _time = [...times];
                _time.splice(idx,1);
                return _time;
            });
        }
    }

    return (
        <div className="banner">
            <div className="banner-title">LSESU HKPASS LSE Forum 2021</div>
            <>{
                times.map((time, idx) => (
                    <div key={idx} className="banner-block" onClick={() => handleRemove(idx)}>
                        <span>{renderStage(time.stage)} </span>
                        <span>{renderTime({minutes: time.minutes, seconds: time.seconds})}</span>
                    </div>
                ))    
            }</>
            <Link to="/" style={{textDecoration: "none"}}><Button variant="warning" style={{position: "absolute", bottom: "15px", width: "70%", right: "15%", fontWeight: "bold"}}>
                返回主頁
            </Button></Link>
        </div>
    )
}
