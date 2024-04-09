import{j as s,r,e as $,a as D,u as W,b as O}from"./index-CgHePD42.js";const L=l=>s.jsx("span",{className:`dice bg-player${l.player}`,children:s.jsxs("span",{className:"",children:[s.jsxs("span",{className:"flex",children:[s.jsx("span",{className:"dice-circle"}),l.DiceNumber>=2?s.jsx("span",{className:"dice-circle"}):void 0]}),l.DiceNumber>=3?s.jsxs("span",{className:`m-0 p-0 ${l.DiceNumber>3?"flex":"block"}`,children:[s.jsx("span",{className:"dice-circle"}),l.DiceNumber>=4?s.jsx("span",{className:"dice-circle"}):void 0]}):void 0]})}),R=l=>{const c=()=>{l.isWaiting||l.onClick(l.currentState)};return s.jsx("button",{onClick:c,className:`btn ${l.currentState.player==l.currentPlayer&&"current-player"+l.currentPlayer} cell ${l.className??""}`,children:l.currentState.player!=null&&l.currentState.state>0?s.jsx(L,{player:l.currentState.player,DiceNumber:l.currentState.state}):void 0})},B=({size:l,currentPlayer:c,setCurrentPlayer:v,setWonPlayer:y,maxPlayers:h,setIsFinished:m})=>{const[u,x]=r.useState([]),[g,I]=r.useState(),[w,S]=r.useState(!1),[o,p]=r.useState([]),[k,N]=r.useState(!1),b=()=>{console.log("--------------------------------"),console.log("Initialing game..."),console.log("--------------------------------");const e=[];for(let t=0;t<l;t++){const n=[];for(let a=0;a<l;a++)n.push({player:null,state:0,rowIndex:t,cellIndex:a,isFinished:!1});e.push(n)}x(e)},d=()=>{const e=[];u.forEach((t,n)=>{const a=[];t.forEach(i=>{const f=`cell_${i.rowIndex}_${i.cellIndex}`;a.push(s.jsx(R,{currentPlayer:c,isWaiting:k,currentState:i,onClick:P},f))}),e.push(s.jsx("div",{className:"row",children:a},`row_${n}`))}),I(e),S(!0)};r.useEffect(()=>{w||b()},[w]),r.useEffect(()=>{d(),C()},[u]),r.useEffect(()=>{if(C(),o.length==h){const e=o.filter(t=>!t.isOut);e.length==1&&(y(e[0].playerNumber),m(!0))}},[o]);const P=e=>{if(u.length===0||!u[e.rowIndex]||!u[e.rowIndex][e.cellIndex])return alert("something happen");let t=!1;if(e.player==null||e.player==c){if(e.player==null&&o.find(f=>f.playerNumber==c))return;new Audio("/src/assets/sounds/click.mp3").play().then(()=>{}),e.player==null&&!o.find(f=>f.playerNumber==c)&&(p(f=>[...f,{playerNumber:c,initialRowIndex:e.rowIndex,initialCellIndex:e.cellIndex,isOut:!1}]),t=!0);const a=[...u],i={...e,player:c,state:t?3:e.state+1};a[e.rowIndex][e.cellIndex]=i,x(a),i.state==4&&(N(!0),E(i,a),N(!1)),z()}},z=()=>{C();let e=c+1>h?1:c+1;for(let t=0;t<1/0;t++){const n=o.find(a=>a.playerNumber==e);if(n&&n.isOut){e=e+1>h?1:e+1;continue}v(e);break}o.length==h&&o.filter(t=>!t.isOut).length==1&&m(!0)},C=()=>{if(o.length==h){const e=Array.from({length:h},(a,i)=>i+1),t=[];if(u.forEach(a=>{a.forEach(i=>{i.player!=null&&!t.includes(i.player)&&t.push(i.player)})}),t.length==0)return;const n=$(e,t);n.length&&n.forEach(a=>{const i=o.map(f=>(a==f.playerNumber&&(f.isOut=!0),f));p(i)})}},E=(e,t)=>{const n=[...t];n[e.rowIndex][e.cellIndex]={...e,player:null,state:0},j(e.rowIndex,e.cellIndex+1,n),j(e.rowIndex,e.cellIndex-1,n),j(e.rowIndex-1,e.cellIndex,n),j(e.rowIndex+1,e.cellIndex,n),x(n)},j=(e,t,n)=>{if(n[e]&&n[e][t]){const a=n[e][t],i={...a,player:c,state:a.state+1>4?4:a.state+1,isFinished:a.state+1>=4};n[e][t]=i,i.state==4&&E(i,n)}};return w?s.jsx("div",{className:"board",children:g}):s.jsx("div",{className:"text-white",children:"Loading..."})},M=()=>{const[l]=D(),[c,v]=r.useState(1),[y,h]=r.useState(!1),[m,u]=r.useState(),[x,g]=r.useState(),[I,w]=r.useState(1),S=W(),[o,p]=O();r.useEffect(()=>{if(x&&x>5){let b=(p<o?p:o)/x-x/2;b>4*16&&(b=4*16),document.documentElement.style.setProperty("--boardItemSize",b.toString()+"px")}},[x,o,p]),r.useEffect(()=>{try{if(l.has("p")){const d=parseInt(l.get("p")??"2");d<=4||d>=2?u(d):u(2)}}catch(d){console.log("MaxPlayer: "+d),u(2)}try{if(l.has("s")){const d=parseInt(l.get("s")??"5");[5,7,10].includes(d)?g(d):g(5)}}catch(d){console.log("Size: "+d),g(5)}new Audio("/src/assets/sounds/whistle.mp3").play().then(()=>{})},[]),r.useEffect(()=>{document.body.className="bg-player"+c},[c]);const k=()=>{confirm("are you sure?")&&window.location.reload()},N=()=>{confirm("are you sure?")&&S("/")};return!x||!m?s.jsx("div",{className:"absolute glass bg-opacity-40 flex flex-col w-screen h-screen justify-center items-center",children:s.jsx("h2",{className:"text-black",children:"Loading..."})}):s.jsxs("div",{className:"game-page relative flex flex-col justify-center items-center",children:[s.jsx("div",{id:"rotated-device",className:"absolute inset-0 justify-center items-center bg-white z-20",children:s.jsx("p",{children:"Please rotate your phone!"})}),y&&s.jsx("h3",{className:`text-white mb-4 inline-block text-center ${y?"bg-success":"bg-neutral-700"} py-2 px-4 rounded-xl`,children:s.jsxs("span",{children:["Player ",I," won!"]})}),s.jsx("div",{className:"flex w-screen absolute top-[20px] justify-center left-0 right-0",children:s.jsx("button",{onClick:N,className:"btn-close btn btn-circle btn-outline border-white fill-white",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})})})}),s.jsxs("div",{className:"bg-neutral-700 flex items-center absolute top-[30px] left-0 p-2 rounded-br-2xl rounded-tr-2xl",children:[s.jsx("div",{className:"mr-4 rounded-full w-[30px] h-[30px] bg-player1"}),s.jsx("p",{className:"mr-2 text-white",children:"Player 1"})]}),m>=3?s.jsxs("div",{className:"bg-neutral-700 flex items-center absolute top-[30px] right-0 p-2 rounded-bl-2xl rounded-tl-2xl",children:[s.jsx("p",{className:"ml-2 text-white",children:"Player 3"}),s.jsx("div",{className:"ml-4 rounded-full w-[30px] h-[30px] bg-player3"})]}):void 0,s.jsxs("div",{className:"bg-neutral-700 flex items-center absolute bottom-[30px] right-0 p-2 rounded-bl-2xl rounded-tl-2xl",children:[s.jsx("p",{className:"ml-2 text-white",children:"Player 2"}),s.jsx("div",{className:"ml-4 rounded-full w-[30px] h-[30px] bg-player2"})]}),m==4?s.jsxs("div",{className:"bg-neutral-700 flex items-center absolute bottom-[30px] left-0 p-2 rounded-br-2xl rounded-tr-2xl",children:[s.jsx("div",{className:"mr-4 rounded-full w-[30px] h-[30px] bg-player4"}),s.jsx("p",{className:"mr-2 text-white",children:"Player 4"})]}):void 0,s.jsx(B,{maxPlayers:m,setWonPlayer:w,setIsFinished:h,currentPlayer:c,setCurrentPlayer:v,size:x}),y?s.jsx("div",{className:"",children:s.jsx("button",{onClick:k,className:"btn btn-success text-white mt-2",children:"Reset"})}):void 0]})};export{M as default};