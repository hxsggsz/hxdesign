import{m as g,j as y}from"./minecraft_click-bdf9dcfc.js";import{r as h}from"./index-c013ead5.js";import{c as b}from"./index-778010da.js";import"./_commonjsHelpers-725317a4.js";const k="_defaultBtn_e4v2h_1",v="_grass_e4v2h_1",s={defaultBtn:k,grass:v},t=e=>{const u=new Audio(g),[p,n]=h.useState(!1),f=b({[s.grass]:e.variant,[s.defaultBtn]:!e.variant});function _(){u.play(),n(!0),setTimeout(()=>n(!1),1e3)}return y.jsx("button",{...e,className:f,"aria-pressed":p,"aria-disabled":e.disabled,onClickCapture:_,children:e.children})};try{t.displayName="Button",t.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Button",component:t},a={args:{children:"minecraft"}},r={args:{children:"minecraft",variant:!0},parameters:{a11y:{element:"#storybook-root",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{},manual:!0}}};var o,c,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: "minecraft"
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,d,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: "minecraft",
    variant: true
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const j=["Primary","Grass"];export{r as Grass,a as Primary,j as __namedExportsOrder,N as default};
//# sourceMappingURL=Button.stories-bcf0f4cf.js.map
