import{j as u}from"./jsx-runtime-6eef64cc.js";import{c as x,m as p}from"./index-f82cbd1b.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const b="_checkbox_1gkyx_40",a={switch:"_switch_1gkyx_1",checkbox:b,"fade-out":"_fade-out_1gkyx_1","fade-in":"_fade-in_1gkyx_1"},o=e=>{function k(){p.play(),e.setChecked(m=>!m)}const l=x({[a.switch]:!e.checkbox,[a.checkbox]:e.checkbox});return u.jsx("input",{type:"checkbox",checked:e.checked,onChange:k,className:l,"aria-checked":e.checked,role:`${e.checkbox?"checkbox":"switch"}`,"aria-label":`${e.checkbox?"checkbox":"switch"} ${e.checked?"on":"off"}`})};try{o.displayName="Switch",o.__docgenInfo={description:"",displayName:"Switch",props:{checked:{defaultValue:null,description:"",name:"checked",required:!0,type:{name:"boolean"}},checkbox:{defaultValue:null,description:"",name:"checkbox",required:!1,type:{name:"boolean"}},setChecked:{defaultValue:null,description:"",name:"setChecked",required:!0,type:{name:"Dispatch<SetStateAction<boolean>>"}}}}}catch{}const g={title:"Design System/components/Switch",component:o},c={args:{checked:!0,checkbox:!1,setChecked:()=>alert("click on switch!")}},t={args:{checked:!0,checkbox:!0,setChecked:()=>{}}};var s,n,r;c.parameters={...c.parameters,docs:{...(s=c.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkbox: false,
    setChecked: () => alert("click on switch!")
  }
}`,...(r=(n=c.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var h,i,d;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    checked: true,
    checkbox: true,
    setChecked: () => {}
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const y=["SwitchComponent","CheckboxComponent"];export{t as CheckboxComponent,c as SwitchComponent,y as __namedExportsOrder,g as default};
//# sourceMappingURL=Switch.stories-d008041e.js.map
