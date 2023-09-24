import{m as b,j as x}from"./minecraft_click-bdf9dcfc.js";import{r as S}from"./index-c013ead5.js";import{g as C}from"./_commonjsHelpers-725317a4.js";const k="_defaultBtn_k7h0a_1",B="_grass_k7h0a_1",m={defaultBtn:k,grass:B};var g={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var i={}.hasOwnProperty;function n(){for(var s=[],a=0;a<arguments.length;a++){var e=arguments[a];if(e){var c=typeof e;if(c==="string"||c==="number")s.push(e);else if(Array.isArray(e)){if(e.length){var d=n.apply(null,e);d&&s.push(d)}}else if(c==="object"){if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]")){s.push(e.toString());continue}for(var l in e)i.call(e,l)&&e[l]&&s.push(l)}}}return s.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(g);var j=g.exports;const N=C(j),u=t=>{const i=new Audio(b),[n,s]=S.useState(!1),a=N({[m.grass]:t.variant,[m.defaultBtn]:!t.variant});function e(){i.play(),s(!0),setTimeout(()=>s(!1),1e3)}return x.jsx("button",{...t,className:a,"aria-pressed":n,"aria-disabled":t.disabled,onClickCapture:e,children:t.children})};try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"boolean"}}}}}catch{}const A={title:"Button",component:u},r={args:{children:"minecraft"}},o={args:{children:"minecraft",variant:!0},parameters:{a11y:{element:"#storybook-root",config:{rules:[{id:"color-contrast",enabled:!1}]},options:{},manual:!0}}};var f,p,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "minecraft"
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var v,_,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(_=o.parameters)==null?void 0:_.docs)==null?void 0:y.source}}};const P=["Primary","Grass"];export{o as Grass,r as Primary,P as __namedExportsOrder,A as default};
//# sourceMappingURL=Button.stories-da741e90.js.map
