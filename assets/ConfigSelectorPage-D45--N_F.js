import{r as n,u as d,j as e}from"./index-BXf-1npT.js";const x=()=>{const[a,o]=n.useState(2),[l,c]=n.useState(5),i=d(),t=s=>{s.preventDefault(),i(`/colors-war?p=${a}&s=${l}`)},r=s=>{o(s)};return e.jsx("div",{className:"relative flex flex-col w-screen h-screen justify-center items-center bg-player1",children:e.jsxs("form",{className:"text-center bg-neutral-100 p-4 rounded-xl",onSubmit:s=>t(s),children:[e.jsx("p",{className:"font-bold my-1",children:"Player Count"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 border rounded-xl p-2",children:[e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>r(2),type:"radio",name:"radio-10",className:"radio checked:bg-blue-500",checked:a==2}),e.jsx("span",{className:"ml-2 label-text",children:"Two Player"})]})}),e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>r(3),type:"radio",name:"radio-10",className:"radio checked:bg-blue-500",checked:a==3}),e.jsx("span",{className:"ml-2 label-text",children:"Three Player"})]})}),e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>r(4),type:"radio",name:"radio-10",className:"radio checked:bg-blue-500",checked:a==4}),e.jsx("span",{className:"ml-2 label-text",children:"Four Player"})]})})]}),e.jsx("p",{className:"font-bold mt-4 mb-1",children:"board Size"}),e.jsxs("div",{className:"grid grid-cols-3 gap-2 border rounded-xl p-2",children:[e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>c(5),type:"radio",name:"size",className:"radio checked:bg-blue-500",checked:l==5}),e.jsx("span",{className:"ml-2 label-text",children:"5 by 5"})]})}),e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>c(7),type:"radio",name:"size",className:"radio checked:bg-blue-500",checked:l==7}),e.jsx("span",{className:"ml-2 label-text",children:"7 by 7"})]})}),e.jsx("div",{className:"form-control",children:e.jsxs("label",{className:"label cursor-pointer",children:[e.jsx("input",{onClick:()=>c(10),type:"radio",name:"size",className:"radio checked:bg-blue-500",checked:l==10}),e.jsx("span",{className:"ml-2 label-text",children:"10 by 10"})]})})]}),e.jsx("button",{className:"mt-4 btn btn-primary text-white",children:"Start"})]})})};export{x as default};