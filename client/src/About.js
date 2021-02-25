import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import p1 from './manual/p1.png';
import p2 from './manual/p2.png';
import p3 from './manual/p3.png';
import p4 from './manual/p4.png';
import p5 from './manual/p5.png';
import p6 from './manual/p6.png';
import p7 from './manual/p7.png';
import p8 from './manual/p8.png';
import p9 from './manual/p9.png';
import p10 from './manual/p10.png';
import background from './manual/background.jpeg';

export default function About() {
    return (
        <>
        <img style={{position: "fixed", width: "100vw", height: "100vh", top: "0", opacity: "0.2", zIndex: "-9999", filter: "brightness(80%)"}} src={background} alt="background" />
        <div className="manual" style={{margin: "20px 15% 20px 15%", width: "70%", background: "rgb(223,247,197)", background: "radial-gradient(circle, rgba(223,247,197,1) 0%, rgba(216,241,230,1) 35%, rgba(205,255,250,1) 100%)", padding: "1px 5px 50px 20px", borderRadius: "30px 10px"}}>
            <h1>Manual</h1>
            <p className="text">This page outlines features of this timekeeping application.</p>
            <p className="text"> Image 1 shows the homepage of this application. To begin timekeeping, fill in the motion and the names of the affirmative team and the opposition team of the debate.</p>
            <img src={p1} alt="p1" />
            <p className="image-desc">Image 1</p>
            <p className="text">Image 2 shows the interface you will see once you submit the form. Corresponding timer(s) will show up once you select the stage of the debate.</p>
            <img src={p2} alt="p2" />
            <p className="image-desc">Image 2</p>
            <p className="text">Image 3 shows the stopwatch for the first speaker. Use the buttons to control the timer.</p>
            <img src={p3} alt="p3" />
            <p className="image-desc">Image 3</p>
            <p className="text">As seen in Images 4, 5, and 6, the timer will change colors 30 seconds before the time limit, at the time limit, and after 15 seconds of buffer time. As the timekeeper, you should inform the speaker via Zoom chat at these times.</p>
            <p className="text">Remember there is no buffer time during free debate and floor questions.</p>
            <img src={p4} alt="p4" />
            <p className="image-desc">Image 4</p>
            <img src={p5} alt="p5" />
            <p className="image-desc">Image 5</p>
            <img src={p6} alt="p6" />
            <p className="image-desc">Image 6</p>
            <p className="text">Once the speaker finishes speaking, you should pause the stopwatch. If there are no disputes over the time, use the finish button to post a record on the sidebar for future reference.</p>
            <img src={p7} alt="p7" />
            <p className="image-desc">Image 7</p>
            <p className="text">Image 8 shows the interface during free debate. There is only one set of control for the two stopwatches, as the timer will begin for one team as soon as the other team's debater stops speaking.</p>
            <p className="text">Again, remember that free debate has no buffer time and the timer will become dark red immediately when the time limit is reached.</p>
            <img src={p8} alt="p8" />
            <p className="image-desc">Image 8</p>
            <p className="text">As shown in Image 9, if you accidentally submitted a record of the time, you can click on the record in the sidebar and a pop-up will give you the option to remove the incorrect entry.</p>
            <p className="text">Pressing finish for the preparation of final speaker stage will not post anything to the sidebar.</p>
            <img src={p9} alt="p9" />
            <p className="image-desc">Image 9</p>
            <p className="text">At the end of the match, take a screenshot of the timekeeping page for reference. Image 10 shows what this may look like.</p>
            <img src={p10} alt="p10" />
            <p className="image-desc">Image 10</p>
            <p>Should you have further questions or discover bugs in this application, please email our <a href="mailto:m.liu48@lse.ac.uk">developer</a>.</p>
            <h1>About</h1>
            <div>This timekeeping software is developed for the sole purpose of facilitating the LSESU HKPASS LSE Forum 2021. For more information, please visit our <a href="https://www.facebook.com/events/766695794262954?post_id=768989367366930&view=permalink" target="_blank" rel="noreferrer">Facebook</a> page. Source code is available <a href="https://github.com/ml24330/lse-forum" target="_blank" rel="noreferrer">here</a>.</div>
            <div style={{position: "fixed", right: "15px", bottom: "0px"}}><Link to="/"><Button variant="warning" style={{marginBottom: "20px", fontSize: "20px", color: "black"}}>Homepage</Button></Link></div>
        </div>
        </>
    )
}
