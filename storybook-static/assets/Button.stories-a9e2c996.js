import{j as _}from"./jsx-runtime-6eef64cc.js";import{r as y}from"./index-c013ead5.js";import{m as v,c as b}from"./index-e52f6e9a.js";import"./_commonjsHelpers-725317a4.js";const h="_defaultBtn_x7euf_1",k="_grass_x7euf_1",n={defaultBtn:h,grass:k},s=e=>{const m=new Audio(v),[p,t]=y.useState(!1),f=b({[n.defaultBtn]:!e.variant,[n.grass]:e.variant==="grass"});function g(){m.play(),t(!0),setTimeout(()=>t(!1),1e3)}return _.jsx("button",{...e,className:f,"aria-pressed":p,"aria-disabled":e.disabled,onClickCapture:g,children:e.children})};try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grass"'},{value:'"slider"'}]}}}}}catch{}const N={title:"Button",component:s},a={args:{children:"minecraft"}},r={args:{children:"minecraft",variant:"grass"},parameters:{a11y:{element:"#storybook-root",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{},manual:!0}}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "minecraft"
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "minecraft",
    variant: "grass"
  },
  parameters: {
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [{
          id: "color-contrast",
          enabled: false
        }]
      },
      options: {},
      manual: true
    }
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const j=["Primary","Grass"];export{r as Grass,a as Primary,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Button.stories-a9e2c996.js.map
