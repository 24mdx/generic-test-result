import{u as e,a}from"../../../react.v17.0.2-9a5f3b02.js";import{j as n,F as l,a as r,i}from"../../../react.jsx-runtime.v17.0.2-74b7f269.js";function c({children:c}){const[t,s]=e(),[o,d]=e(),[u,p]=e(),[h,m]=e();a((()=>{if(t&&o&&u){const e=[o,u,t].join(" "),a=btoa(e);m(`${"/result?"}${a}`)}else m()}),[t,o,u]);return n(l,{children:[n("div",{className:"py-2 px-4",children:[r("div",{className:"font-semibold text-gray-400",children:"Probant"}),r("input",{name:"name",onChange:e=>{s(e.currentTarget.value)},className:"py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600",placeholder:"Name"})]}),n("div",{className:"py-2 px-4",children:[r("div",{className:"font-semibold text-gray-400",children:"Datum"}),r("input",{name:"date",onChange:e=>{d(e.currentTarget.value)},className:"py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600",type:"date",placeholder:"Datum"})]}),n("div",{className:"py-2 px-4",children:[r("div",{className:"font-semibold text-gray-400",children:"Uhrzeit"}),r("input",{name:"time",onChange:e=>{p(e.currentTarget.value)},className:"py-3 px-4 bg-white rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600",type:"time",placeholder:"Uhrzeit"})]}),Boolean(h)&&n("div",{className:"py-4 px-4",children:[n("div",{className:"flex justify-center py-2",children:[r("span",{children:"--\x3e"}),r("a",{href:h,children:"Klick hier"}),r("span",{children:"<--"})]}),r("div",{className:"flex justify-center",children:r(i,{value:h})})]})]})}export{c as default};
