import{j as x}from"./jsx-runtime-6eef64cc.js";import{m as p,c as _}from"./index-e52f6e9a.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const b="_checkbox_1gkyx_40",a={switch:"_switch_1gkyx_1",checkbox:b,"fade-out":"_fade-out_1gkyx_1","fade-in":"_fade-in_1gkyx_1"},o=e=>{const k=new Audio(p);function l(){k.play(),e.setChecked(m=>!m)}const u=_({[a.switch]:!e.checkbox,[a.checkbox]:e.checkbox});return x.jsx("input",{type:"checkbox",checked:e.checked,onChange:l,className:u,"aria-checked":e.checked,"aria-label":`${e.checkbox?"checkbox":"switch"} ${e.checked?"on":"off"}`})};try{o.displayName="Switch",o.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},setChecked:{defaultValue:null,description:"",name:"setChecked",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const y={title:"Switch",component:o},c={args:{checked:!0,checkbox:!1,setChecked:()=>alert("click on switch!")}},t={args:{checked:!0,checkbox:!0,setChecked:()=>{}}};var n,s,r;c.parameters={...c.parameters,docs:{...(n=c.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkbox: false,
    setChecked: () => alert("click on switch!")
  }
}`,...(r=(s=c.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};var h,i,d;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkbox: true,
    setChecked: () => {}
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const S=["SwitchComponent","CheckboxComponent"];export{t as CheckboxComponent,c as SwitchComponent,S as __namedExportsOrder,y as default};
//# sourceMappingURL=Switch.stories-f9b2a094.js.map
