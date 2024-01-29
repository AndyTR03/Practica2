"use strict";(self.webpackChunkmy_docusaurus=self.webpackChunkmy_docusaurus||[]).push([[194],{4795:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=r(5893),s=r(1151);const t={sidebar_position:4},i="Tutorial del Facturador - Docker | Linux | SSL Externo",o={id:"intro4",title:"Tutorial del Facturador - Docker | Linux | SSL Externo",description:"Instalaci\xf3n del Facturador - Docker | Linux | SSL Externo",source:"@site/docs/intro4.md",sourceDirName:".",slug:"/intro4",permalink:"/Practica2/docs/intro4",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro4.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tutorial de instalacion - Linux | Valet",permalink:"/Practica2/docs/intro3"}},l={},c=[{value:"Instalaci\xf3n del Facturador - Docker | Linux | SSL Externo",id:"instalaci\xf3n-del-facturador---docker--linux--ssl-externo",level:2},{value:"Pasos",id:"pasos",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"tutorial-del-facturador---docker--linux--ssl-externo",children:"Tutorial del Facturador - Docker | Linux | SSL Externo"}),"\n",(0,a.jsx)(n.h2,{id:"instalaci\xf3n-del-facturador---docker--linux--ssl-externo",children:"Instalaci\xf3n del Facturador - Docker | Linux | SSL Externo"}),"\n",(0,a.jsx)(n.h2,{id:"pasos",children:"Pasos"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Para realizar la instalaci\xf3n, ejecute el script evitando la instalaci\xf3n del SSL. Le ser\xe1 consultado durante el proceso, y deber\xe1 ingresar "n".'}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Finalizada la instalaci\xf3n, dir\xedjase a la ruta de instalaci\xf3n:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"cd /root/facturadorpro31/\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["debe editar el archivo ",(0,a.jsx)(n.strong,{children:".env"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"nano .env\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"dentro del editor ubicar los par\xe1metros y cambiarlos"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Antes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-env",children:"APP_URL=http://${APP_URL_BASE}\nFORCE_HTTPS=false\n\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Despues:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"APP_URL=https://${APP_URL_BASE}\nFORCE_HTTPS=true\n\n\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"una vez finalizado, guarde y salga del editor"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"ejecute los siguientes comandos para eliminar la cach\xe9 de la aplicaci\xf3n"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"php artisan config:cache\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"con eso habr\xe1 completado el lado de la herramienta, en ese momento hasta no tener un SSL configurado no podr\xe1 acceder a la herramienta"}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Importante:"}),"\nRecuerde habilitar el puerto 443 para poder tener acceso a la herramienta."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var a=r(7294);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);