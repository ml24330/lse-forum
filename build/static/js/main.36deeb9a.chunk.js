(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(26),i=n.n(c),r=(n(32),n(33),n(14)),o=n(6),l=n(9),j=n(8),d=n(7),m=n.p+"static/media/background.d803044c.jpeg",h=n(0),u=["Friendly Debate","University of Birmingham","Durham University","University of Exeter","Imperial College London","King\u2019s College London","Lancaster University","London School of Economics","University College London","University of Warwick","York University"];function b(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),i=Object(l.a)(c,2),o=i[0],b=i[1],p=Object(s.useState)(""),x=Object(l.a)(p,2),f=x[0],g=x[1],O=Object(s.useState)(!1),v=Object(l.a)(O,2),y=v[0],w=v[1],S=function(){return!!(n&&o&&f)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("img",{src:m,alt:"background",style:{position:"absolute",top:"0",right:"-220px",opacity:"0.19",zIndex:"-9999",height:"100vh",width:"calc(100vw + 220px)"}}),Object(h.jsx)("div",{className:"title",children:"LSESU HKPASS LSE Forum 2021 Timekeeper's Portal"}),Object(h.jsxs)(j.a,{className:"panel",children:[Object(h.jsxs)(j.a.Group,{controlId:"motion",className:"row",children:[Object(h.jsx)(j.a.Label,{children:"Motion:"}),Object(h.jsx)(j.a.Control,{type:"text",placeholder:"Motion...",value:n,onChange:function(e){return a(e.target.value)}})]}),Object(h.jsxs)(j.a.Group,{controlId:"aff",className:"row",children:[Object(h.jsx)(j.a.Label,{children:"Affirmative:"}),Object(h.jsxs)(j.a.Control,{as:"select",value:o,onChange:function(e){return b(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Choose affirmative..."}),u.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)(j.a.Group,{controlId:"neg",className:"row",children:[Object(h.jsx)(j.a.Label,{children:"Opposition:"}),Object(h.jsxs)(j.a.Control,{as:"select",value:f,onChange:function(e){return g(e.target.value)},children:[Object(h.jsx)("option",{value:"",children:"Choose opposition..."}),u.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)(j.a.Group,{className:"row",children:[Object(h.jsx)(j.a.Label,{children:"Final event?"})," ",Object(h.jsx)(j.a.Control,{type:"checkbox",id:"final",checked:y,onChange:function(e){return w(e.target.checked)}})]}),Object(h.jsx)(j.a.Group,{className:"row",children:Object(h.jsx)(d.a,{variant:S()?"warning":"danger",onClick:function(e){return e.preventDefault()},type:"submit",style:{fontWeight:"bold",marginTop:"10px"},children:S()?Object(h.jsx)(r.b,{style:{textDecoration:"none",padding:"10px"},to:"/timer?motion=".concat(n,"&aff=").concat(o,"&neg=").concat(f,"&isFinal=").concat(y),children:"Submit"}):"Form incomplete!"})})]}),Object(h.jsx)("div",{style:{position:"fixed",right:"15px",bottom:"0px"},children:Object(h.jsx)(r.b,{to:"/about",children:Object(h.jsx)(d.a,{variant:"success",style:{marginBottom:"20px",fontSize:"20px",color:"yellow"},children:"Manual"})})})]})}var p=n(15),x=n(18);function f(e){var t,n=e.maxTime,s=e.setTimes,a=e.stage,c=e.teamName,i=e.teamSide,r=e.fullSize,o=Object(x.useStopwatch)({autoStart:!1}),l=o.seconds,j=o.minutes,m=(o.isRunning,o.start),u=o.pause,b=o.reset,f="aff"===i?"Affirmative":"neg"===i?"Opposition":i,g=function(){return j===n-1&&l>30?"orange":j===n&&l<15?"red":j>=n&&l>14?"darkred":void 0};return Object(h.jsxs)("div",{style:{textAlign:"center",backgroundColor:"#e6ffee",borderRadius:"20px",margin:"10px",padding:"10px 5px"},children:[Object(h.jsx)("h1",{style:{fontSize:r?"7vh":"5vh"},children:c}),Object(h.jsx)("h2",{style:{margin:"0",fontSize:"5vh"},children:"Affirmative"===f?"\u6b63\u65b9":"Opposition"===f?"\u53cd\u65b9":""}),Object(h.jsxs)("div",{style:{fontSize:r?"40vh":"10vh",color:g()},children:[Object(h.jsx)("span",{children:j}),":",Object(h.jsx)("span",{children:(t=l,t<10?"0".concat(t):"".concat(t))})]}),Object(h.jsx)(d.a,{variant:"success",style:{margin:"0 3px"},onClick:m,children:"\u958b\u59cb"}),Object(h.jsx)(d.a,{variant:"warning",style:{margin:"0 3px"},onClick:u,children:"\u66ab\u505c"}),Object(h.jsx)(d.a,{variant:"danger",style:{margin:"0 3px"},onClick:b,children:"\u91cd\u8a2d"}),Object(h.jsx)(d.a,{variant:"info",style:{margin:"0 3px"},onClick:function(){"prep"!==a?(s("floor"!==a?function(e){return[].concat(Object(p.a)(e),[{stage:a,seconds:l,minutes:j,color:g()}])}:function(e){return[].concat(Object(p.a)(e),[{stage:"\u767c\u554f/\u6e96\u5099"===c?"floor_q":"\u56de\u61c9"===c?"floor_res":"floor_total",seconds:l,minutes:j,color:g()}])}),b()):b()},children:"\u7d50\u675f"})]})}function g(e){var t=e.maxTime,n=e.setTimes,a=e.aff,c=e.neg,i=Object(x.useStopwatch)({autoStart:!1}),r=i.seconds,o=i.minutes,j=(i.isRunning,i.start),m=i.pause,u=i.reset,b=Object(s.useState)(!0),f=Object(l.a)(b,2),g=f[0],O=f[1],v=Object(s.useState)({seconds:0,minutes:0}),y=Object(l.a)(v,2),w=y[0],S=y[1],k=Object(s.useState)({seconds:0,minutes:0}),N=Object(l.a)(k,2),C=N[0],T=N[1];Object(s.useEffect)((function(){var e=60*o+r,t=60*w.minutes+w.seconds,n=60*C.minutes+C.seconds;g?S((function(){return{seconds:(e-n)%60,minutes:Math.floor((e-n)/60)}})):T((function(){return{seconds:(e-t)%60,minutes:Math.floor((e-t)/60)}}))}),[g,r]);var I=function(){u(),S({seconds:0,minutes:0}),T({seconds:0,minutes:0})},F=function(e){return e<10?"0".concat(e):"".concat(e)},z=function(e){var n=e.minutes,s=e.seconds;return n===t-1&&s>30?"orange":n>=t?"darkred":void 0};return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{style:{textAlign:"center",backgroundColor:"#e6ffee",borderRadius:"20px",margin:"10px",padding:"10px 5px"},children:[Object(h.jsx)("h1",{children:a}),Object(h.jsx)("h2",{style:{margin:"0"},children:"\u6b63\u65b9"}),Object(h.jsxs)("div",{style:{fontSize:"100px",color:z(w)},children:[Object(h.jsx)("span",{children:w.minutes}),":",Object(h.jsx)("span",{children:F(w.seconds)})]})]}),Object(h.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[Object(h.jsx)(d.a,{style:{margin:"0 3px"},variant:"primary",onClick:function(){return O((function(e){return!e}))},children:"\u5207\u63db"}),Object(h.jsx)(d.a,{style:{margin:"0 3px"},variant:"success",onClick:j,children:"\u958b\u59cb"}),Object(h.jsx)(d.a,{style:{margin:"0 3px"},variant:"warning",onClick:m,children:"\u66ab\u505c"}),Object(h.jsx)(d.a,{style:{margin:"0 3px"},variant:"danger",onClick:I,children:"\u91cd\u8a2d"}),Object(h.jsx)(d.a,{style:{margin:"0 3px"},variant:"info",onClick:function(){n((function(e){return[].concat(Object(p.a)(e),[{stage:"free_aff",seconds:w.seconds,minutes:w.minutes,color:z({minutes:w.minutes,seconds:w.seconds})},{stage:"free_neg",seconds:C.seconds,minutes:C.minutes,color:z({minutes:C.minutes,seconds:C.seconds})}])})),I()},children:"\u7d50\u675f"})]}),Object(h.jsxs)("div",{style:{textAlign:"center",backgroundColor:"#e6ffee",borderRadius:"20px",margin:"10px",padding:"10px 5px"},children:[Object(h.jsx)("h1",{children:c}),Object(h.jsx)("h2",{style:{margin:"0"},children:"\u53cd\u65b9"}),Object(h.jsxs)("div",{style:{fontSize:"100px",color:z(C)},children:[Object(h.jsx)("span",{children:C.minutes}),":",Object(h.jsx)("span",{children:F(C.seconds)})]})]})]})}function O(e){var t=e.times,n=e.setTimes,s=function(e){switch(e){case"floor_q":return"\u767c\u554f/\u6e96\u5099";case"floor_res":return"\u56de\u61c9\u767c\u554f";case"floor_total":return"\u767c\u554f\u7e3d\u6642";case"aff1":return"\u6b63\u65b9\u4e3b\u8faf";case"aff2":return"\u6b63\u65b9\u4e00\u526f";case"aff3":return"\u6b63\u65b9\u4e8c\u526f";case"aff4":return"\u6b63\u65b9\u7d50\u8faf";case"neg1":return"\u53cd\u65b9\u4e3b\u8faf";case"neg2":return"\u53cd\u65b9\u4e00\u526f";case"neg3":return"\u53cd\u65b9\u4e8c\u526f";case"neg4":return"\u53cd\u65b9\u7d50\u8faf";case"free_aff":return"\u6b63\u65b9\u81ea\u7531\u8faf\u8ad6";case"free_neg":return"\u53cd\u65b9\u81ea\u7531\u8faf\u8ad6";default:return""}},a=function(e){var t=e.minutes,n=e.seconds;return n<10?"".concat(t,":0").concat(n):"".concat(t,":").concat(n)};return Object(h.jsxs)("div",{className:"banner",children:[Object(h.jsx)("div",{className:"banner-title",children:"\u5404\u74b0\u7bc0\u7528\u6642"}),Object(h.jsx)(h.Fragment,{children:t&&t.map((function(e,t){return Object(h.jsxs)("div",{className:"banner-block",onClick:function(){return function(e){window.confirm("\u78ba\u8a8d\u79fb\u9664\u9019\u4e00\u7d00\u9304\u55ce\uff1f")&&n((function(t){var n=Object(p.a)(t);return n.splice(e,1),n}))}(t)},children:[Object(h.jsxs)("span",{children:[s(e.stage)," "]}),Object(h.jsx)("span",{style:{color:e.color},children:a({minutes:e.minutes,seconds:e.seconds})})]},t)}))}),Object(h.jsx)(r.b,{onClick:function(){window.localStorage.clear()},to:"/",style:{textDecoration:"none"},children:Object(h.jsx)(d.a,{variant:"warning",style:{position:"absolute",bottom:"15px",width:"70%",right:"15%",fontWeight:"bold"},children:"\u8fd4\u56de\u4e3b\u9801"})})]})}function v(){var e=Object(o.f)(),t=function(e,t){var n=Object(s.useState)((function(){try{var n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch(s){return console.log(s),t}})),a=Object(l.a)(n,2),c=a[0],i=a[1];return[c,function(t){try{var n=t instanceof Function?t(c):t;i(n),window.localStorage.setItem(e,JSON.stringify(n))}catch(s){console.log(s)}}]}("time",[]),n=Object(l.a)(t,2),a=n[0],c=n[1],i=Object(s.useState)(""),r=Object(l.a)(i,2),d=r[0],m=r[1],u=new URLSearchParams(e.search),b="true"===u.get("isFinal"),p=u.get("aff"),x=u.get("neg"),v=u.get("motion");return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{times:a,setTimes:c}),Object(h.jsxs)("div",{style:{width:"calc(100% - 175px)"},children:[Object(h.jsxs)(j.a,{onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsxs)(j.a.Control,{as:"select",value:d,onChange:function(e){return m(e.target.value)},style:{width:"50%",margin:"10px auto"},children:[Object(h.jsx)("option",{value:"",children:"\u9078\u64c7\u74b0\u7bc0..."}),Object(h.jsxs)("option",{value:"aff1",children:["\u6b63\u65b9\u4e3b\u8faf (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"neg1",children:["\u53cd\u65b9\u4e3b\u8faf (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"aff2",children:["\u6b63\u65b9\u4e00\u526f (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"neg2",children:["\u53cd\u65b9\u4e00\u526f (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"aff3",children:["\u6b63\u65b9\u4e8c\u526f (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"neg3",children:["\u53cd\u65b9\u4e8c\u526f (",b?"\u56db\u5206\u9418":"\u4e09\u5206\u9418",")"]}),b&&Object(h.jsx)("option",{value:"floor",children:"\u53f0\u4e0b\u767c\u554f (\u5341\u5206\u9418)"}),Object(h.jsxs)("option",{value:"free",children:["\u81ea\u7531\u8faf\u8ad6 (",b?"\u5404\u56db\u5206\u9418":"\u5404\u5169\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"prep",children:["\u6e96\u5099\u7d50\u8faf (",b?"\u4e09\u5206\u9418":"\u4e00\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"neg4",children:["\u53cd\u65b9\u7d50\u8faf (",b?"\u4e94\u5206\u9418":"\u56db\u5206\u9418",")"]}),Object(h.jsxs)("option",{value:"aff4",children:["\u6b63\u65b9\u7d50\u8faf (",b?"\u4e94\u5206\u9418":"\u56db\u5206\u9418",")"]})]}),Object(h.jsxs)("h2",{style:{width:"100%",textAlign:"center"},children:["\u8faf\u984c\uff1a ",v]})]}),function(e){switch(e){case"aff1":case"aff2":case"aff3":return Object(h.jsx)(f,{maxTime:b?4:3,setTimes:c,stage:e,teamName:p,teamSide:"aff",fullSize:!0});case"aff4":return Object(h.jsx)(f,{maxTime:b?5:4,setTimes:c,stage:e,teamName:p,teamSide:"aff",fullSize:!0});case"neg1":case"neg2":case"neg3":return Object(h.jsx)(f,{maxTime:b?4:3,setTimes:c,stage:e,teamName:x,teamSide:"neg",fullSize:!0});case"neg4":return Object(h.jsx)(f,{maxTime:b?5:4,setTimes:c,stage:e,teamName:x,teamSide:"neg",fullSize:!0});case"floor":return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{maxTime:1,setTimes:c,stage:e,teamName:"\u767c\u554f/\u6e96\u5099",fullSize:!1})," ",Object(h.jsx)(f,{maxTime:1,setTimes:c,stage:e,teamName:"\u56de\u61c9",fullSize:!1})," ",Object(h.jsx)(f,{maxTime:10,setTimes:c,stage:e,teamName:"\u7e3d\u6642\u9593",fullSize:!1})]});case"prep":return Object(h.jsx)(f,{maxTime:b?3:1,setTimes:c,stage:e,teamName:"",fullSize:!0});case"free":return Object(h.jsx)(g,{maxTime:b?4:2,setTimes:c,aff:p,neg:x});default:return Object(h.jsx)(h.Fragment,{})}}(d)]})]})}var y=n(19),w=n.p+"static/media/p1.e35d9651.png",S=n.p+"static/media/p2.99a11c41.png",k=n.p+"static/media/p3.2273cc34.png",N=n.p+"static/media/p4.0980c71b.png",C=n.p+"static/media/p5.e9921b9f.png",T=n.p+"static/media/p6.fd9f2836.png",I=n.p+"static/media/p7.50584c48.png",F=n.p+"static/media/p8.75c61fd7.png",z=n.p+"static/media/p9.74fcea84.png",A=n.p+"static/media/p10.325a56e9.png",L=n.p+"static/media/background.63236db7.jpeg";function _(){var e;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("img",{style:{position:"fixed",width:"100vw",height:"100vh",top:"0",opacity:"0.2",zIndex:"-9999",filter:"brightness(80%)"},src:L,alt:"background"}),Object(h.jsxs)("div",{className:"manual",style:(e={margin:"20px 15% 20px 15%",width:"70%",background:"rgb(223,247,197)"},Object(y.a)(e,"background","radial-gradient(circle, rgba(223,247,197,1) 0%, rgba(216,241,230,1) 35%, rgba(205,255,250,1) 100%)"),Object(y.a)(e,"padding","1px 5px 50px 20px"),Object(y.a)(e,"borderRadius","30px 10px"),e),children:[Object(h.jsx)("h1",{children:"Manual"}),Object(h.jsx)("p",{className:"text",children:"This page outlines features of this timekeeping application."}),Object(h.jsx)("p",{className:"text",children:" Image 1 shows the homepage of this application. To begin timekeeping, fill in the motion and the names of the affirmative team and the opposition team of the debate."}),Object(h.jsx)("img",{src:w,alt:"p1"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 1"}),Object(h.jsx)("p",{className:"text",children:"Image 2 shows the interface you will see once you submit the form. Corresponding timer(s) will show up once you select the stage of the debate."}),Object(h.jsx)("img",{src:S,alt:"p2"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 2"}),Object(h.jsx)("p",{className:"text",children:"Image 3 shows the stopwatch for the first speaker. Use the buttons to control the timer."}),Object(h.jsx)("img",{src:k,alt:"p3"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 3"}),Object(h.jsx)("p",{className:"text",children:"As seen in Images 4, 5, and 6, the timer will change colors 30 seconds before the time limit, at the time limit, and after 15 seconds of buffer time. As the timekeeper, you should inform the speaker via Zoom chat at these times."}),Object(h.jsx)("p",{className:"text",children:"Remember there is no buffer time during free debate and floor questions."}),Object(h.jsx)("img",{src:N,alt:"p4"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 4"}),Object(h.jsx)("img",{src:C,alt:"p5"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 5"}),Object(h.jsx)("img",{src:T,alt:"p6"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 6"}),Object(h.jsx)("p",{className:"text",children:"Once the speaker finishes speaking, you should pause the stopwatch. If there are no disputes over the time, use the finish button to post a record on the sidebar for future reference."}),Object(h.jsx)("img",{src:I,alt:"p7"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 7"}),Object(h.jsx)("p",{className:"text",children:"Image 8 shows the interface during free debate. There is only one set of control for the two stopwatches, as the timer will begin for one team as soon as the other team's debater stops speaking."}),Object(h.jsx)("p",{className:"text",children:"Again, remember that free debate has no buffer time and the timer will become dark red immediately when the time limit is reached."}),Object(h.jsx)("img",{src:F,alt:"p8"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 8"}),Object(h.jsx)("p",{className:"text",children:"As shown in Image 9, if you accidentally submitted a record of the time, you can click on the record in the sidebar and a pop-up will give you the option to remove the incorrect entry."}),Object(h.jsx)("p",{className:"text",children:"Pressing finish for the preparation of final speaker stage will not post anything to the sidebar."}),Object(h.jsx)("img",{src:z,alt:"p9"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 9"}),Object(h.jsx)("p",{className:"text",children:"At the end of the match, take a screenshot of the timekeeping page for reference. Image 10 shows what this may look like."}),Object(h.jsx)("img",{src:A,alt:"p10"}),Object(h.jsx)("p",{className:"image-desc",children:"Image 10"}),Object(h.jsxs)("p",{children:["Should you have further questions or discover bugs in this application, please email our ",Object(h.jsx)("a",{href:"mailto:m.liu48@lse.ac.uk",children:"developer"}),"."]}),Object(h.jsx)("h1",{children:"About"}),Object(h.jsxs)("div",{children:["This timekeeping software is developed for the sole purpose of facilitating the LSESU HKPASS LSE Forum 2021. For more information, please visit our ",Object(h.jsx)("a",{href:"https://www.facebook.com/events/766695794262954?post_id=768989367366930&view=permalink",target:"_blank",rel:"noreferrer",children:"Facebook"})," page. Source code is available ",Object(h.jsx)("a",{href:"https://github.com/ml24330/lse-forum",target:"_blank",rel:"noreferrer",children:"here"}),"."]}),Object(h.jsx)("div",{style:{position:"fixed",right:"15px",bottom:"0px"},children:Object(h.jsx)(r.b,{to:"/",children:Object(h.jsx)(d.a,{variant:"warning",style:{marginBottom:"20px",fontSize:"20px",color:"black"},children:"Homepage"})})})]})]})}n(44);var U=n.p+"static/media/logo.50ba3b04.jpeg";var E=function(){return Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{className:"app",children:[Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,children:Object(h.jsx)(b,{})}),Object(h.jsx)(o.a,{path:"/timer",exact:!0,children:Object(h.jsx)(v,{})}),Object(h.jsx)(o.a,{path:"/about",exact:!0,children:Object(h.jsx)(_,{})})]}),Object(h.jsx)("a",{href:"https://www.lsesuhkpass.co.uk/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)("img",{src:U,alt:"LSESU HKPASS",style:{position:"fixed",height:"100px",width:"auto",left:"10px",bottom:"10px",borderRadius:"50px"}})})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),c(e),i(e)}))};i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(E,{})}),document.getElementById("root")),R()}},[[45,1,2]]]);
//# sourceMappingURL=main.36deeb9a.chunk.js.map