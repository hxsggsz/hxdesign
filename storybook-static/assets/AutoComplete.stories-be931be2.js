import{j as n}from"./jsx-runtime-6eef64cc.js";import{r as l}from"./index-c013ead5.js";import{I as m}from"./Input-e7140861.js";import{A as E}from"./Arrow-20336a8f.js";import{C as L}from"./Close-358c5ab1.js";import{B as N}from"./Button-bff159b2.js";import"./_commonjsHelpers-725317a4.js";import"./index-e52f6e9a.js";const Q="_wrapper_rgjhg_1",D="_list_rgjhg_4",P="_item_rgjhg_17",I="_button_rgjhg_37",a={wrapper:Q,list:D,item:P,button:I};function O(e){const r=l.createRef();return l.useEffect(()=>{function s(i){r.current&&!r.current.contains(i.target)&&e(i)}return document.addEventListener("mousedown",s),()=>{window.removeEventListener("mousedown",s)}},[e,r]),r}const h=e=>{const[r,s]=l.useState(""),[i,x]=l.useState(!1),A=O(()=>c(!1));function M(t){s(t.currentTarget.value)}function c(t){x(o=>t??!o)}function f(){s("")}function k(t){t.key==="Escape"&&c()}function b(t,o){var d,S;switch(t.key){case"ArrowDown":return t.preventDefault(),console.log("aaa"),(d=document.querySelectorAll("button")[o-1])==null?void 0:d.autofocus();case"ArrowUp":return t.preventDefault(),(S=document.querySelectorAll("button")[o+1])==null?void 0:S.focus()}}const g=l.useMemo(()=>{const t=r.toLowerCase();return e.list.filter(o=>o.item.toLowerCase().includes(t))},[e.list,r]),B=()=>n.jsx("li",{"data-open":i,className:a.item,children:e.emptyMessage??`no search for ${r}`}),v=()=>n.jsx("ul",{"data-open":i,"aria-hidden":!i,className:a.list,children:g.length>0?g.map((t,o)=>n.jsx("li",{"data-open":i,className:a.item,onKeyDown:d=>b(d,o),children:n.jsx("button",{className:a.button,onClick:()=>{c(),f(),s(t.item),t.onSelect(t.item)},children:t.item})},t.id)):B()});return n.jsxs("div",{ref:A,onKeyDown:k,className:a.wrapper,children:[n.jsxs(m.Root,{children:[n.jsx(m.Actions,{children:n.jsx(E,{variant:!0,outline:!0,orientation:`${i?"down":"up"}`})}),n.jsx(m.Input,{fontSize:2.4,spellCheck:"false",onChange:M,value:r,onClick:()=>c(),placeholder:e.placeholder}),n.jsx(m.Actions,{children:n.jsx(N,{variant:"none",onClick:f,children:n.jsx(L,{variant:!0})})})]}),i&&v()]})};try{h.displayName="AutoComplete",h.__docgenInfo={description:"",displayName:"AutoComplete",props:{list:{defaultValue:null,description:"",name:"list",required:!0,type:{name:"ListProps[]"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},emptyMessage:{defaultValue:null,description:"",name:"emptyMessage",required:!1,type:{name:"string"}}}}}catch{}const z={title:"Design System/components/AutoComplete",component:h},u={args:{placeholder:"Minecraft streamers",list:[{id:1,item:"Quackity, the creator of QSMP",onSelect:e=>alert(`selected: ${e}`)},{id:"dwadwadwa",item:"FoolishG",onSelect:e=>alert(`selected: ${e}`)},{id:2,item:"BadBoyHalo",onSelect:e=>alert(`selected: ${e}`)},{id:3,item:"JaidenAnimations",onSelect:e=>alert(`selected: ${e}`)},{id:5,item:"Cellbit",onSelect:e=>alert(`selected: ${e}`)}]}},p={args:{placeholder:"Minecraft streamers",emptyMessage:"there is nothing here for you",list:[{id:1,item:"Quackity, the creator of QSMP",onSelect:e=>alert(`selected: ${e}`)},{id:"dwadwadwa",item:"FoolishG",onSelect:e=>alert(`selected: ${e}`)},{id:2,item:"BadBoyHalo",onSelect:e=>alert(`selected: ${e}`)},{id:3,item:"JaidenAnimations",onSelect:e=>alert(`selected: ${e}`)},{id:5,item:"Cellbit",onSelect:e=>alert(`selected: ${e}`)}]}};var y,w,C;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: "Minecraft streamers",
    list: [{
      id: 1,
      item: "Quackity, the creator of QSMP",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: "dwadwadwa",
      item: "FoolishG",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 2,
      item: "BadBoyHalo",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 3,
      item: "JaidenAnimations",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 5,
      item: "Cellbit",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }]
  }
}`,...(C=(w=u.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var _,$,j;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: "Minecraft streamers",
    emptyMessage: "there is nothing here for you",
    list: [{
      id: 1,
      item: "Quackity, the creator of QSMP",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: "dwadwadwa",
      item: "FoolishG",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 2,
      item: "BadBoyHalo",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 3,
      item: "JaidenAnimations",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }, {
      id: 5,
      item: "Cellbit",
      onSelect: (item: string) => alert(\`selected: \${item}\`)
    }]
  }
}`,...(j=($=p.parameters)==null?void 0:$.docs)==null?void 0:j.source}}};const T=["Primary","CustomEmptyMessage"];export{p as CustomEmptyMessage,u as Primary,T as __namedExportsOrder,z as default};
//# sourceMappingURL=AutoComplete.stories-be931be2.js.map
