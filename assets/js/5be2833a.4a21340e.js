"use strict";(self.webpackChunkmy_docusaurus=self.webpackChunkmy_docusaurus||[]).push([[491],{1840:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=s(5893),l=s(1151);const i={sidebar_position:3},r="Tutorial de instalacion - Linux | Valet",c={id:"intro3",title:"Tutorial de instalacion - Linux | Valet",description:"Manual de Instalaci\xf3n - Linux | Valet",source:"@site/docs/intro3.md",sourceDirName:".",slug:"/intro3",permalink:"/Practica2/docs/intro3",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro3.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tutorial de Instalaci\xf3n Docker + GitLab + SSL",permalink:"/Practica2/docs/intro2"},next:{title:"Tutorial del Facturador - Docker | Linux | SSL Externo",permalink:"/Practica2/docs/intro4"}},t={},o=[{value:"Manual de Instalaci\xf3n - Linux | Valet",id:"manual-de-instalaci\xf3n---linux--valet",level:2}];function d(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"tutorial-de-instalacion---linux--valet",children:"Tutorial de instalacion - Linux | Valet"}),"\n",(0,a.jsx)(e.h2,{id:"manual-de-instalaci\xf3n---linux--valet",children:"Manual de Instalaci\xf3n - Linux | Valet"}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Requisitos Previos"})}),"\n",(0,a.jsx)(e.p,{children:"Antes de iniciar la instalaci\xf3n, aseg\xfarese de cumplir con los siguientes requisitos:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Acceso Root:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Contar con acceso root al servidor local."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Instalaci\xf3n de PHP 7.2 y Librer\xedas:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Ubuntu no cuenta con la versi\xf3n 7.2 de PHP de manera nativa. Ejecute los siguientes comandos para agregar un repositorio y proceder con la instalaci\xf3n:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt-get update\napt-get install software-properties-common\napt-get install python-software-properties\nadd-apt-repository ppa:ondrej/php\napt-get update\napt-get install php7.2 php7.2-mbstring php7.2-soap php7.2-zip php7.2-mysql php7.2-curl php7.2-gd php7.2-xml php7.2-mcrypt\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Instalaci\xf3n de MySQL y PhpMyAdmin:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Instale MySQL y PhpMyAdmin (opcional) con los siguientes comandos:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt-get install mysql-server-5.7 mysql-client-5.7 phpmyadmin\n"})}),"\n"]}),"\n",(0,a.jsx)(e.li,{children:"Se le solicitar\xe1 la contrase\xf1a dos veces."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Instalaci\xf3n de Git, Curl, Composer:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Instale Git y Curl:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt-get install git\napt-get install curl\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Instale Composer:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt-get install composer\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Dar permisos a la carpeta composer:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"chmod -R 777 ~/.composer\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Instale librer\xedas de Valet:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"composer global require cpriego/valet-linux\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["Vaya a la carpeta ",(0,a.jsx)(e.code,{children:"~/.profile"})," y a\xf1ada la siguiente l\xednea al final del documento y guarde:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'nano ~/.profile\nPATH="HOME/.composer/vendor/bin:$PATH"\n'})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Luego ejecute en terminal:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"source ~/.profile\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Instale las siguientes librer\xedas:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt install network-manager libnss3-tools jq xsel\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Instalaci\xf3n de Nginx y Valet:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["Detenga servicios de Apache2 si est\xe1 instalado:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"service apache2 stop\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Instale Nginx:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"apt install nginx\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Verifique que el servidor de Nginx se est\xe1 ejecutando correctamente:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"systemctl status nginx\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["Instale Valet:","\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"valet install\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Configuraci\xf3n de Valet:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Cree una carpeta para el c\xf3digo:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mkdir ~/code\ncd code\nvalet park\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Clone el repositorio:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"git clone https://gitlab.com/b.mendoza/facturadorpro3.git\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Entre en la carpeta y configure el archivo .env:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"cd facturadorpro3\ncp .env.example .env\nphp artisan key:generate\ncomposer dump-autoload\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Registre la base de datos mediante phpmyadmin."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Ejecute las migraciones:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"composer install\nphp artisan migrate --seed\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.strong,{children:"Verificaci\xf3n y Acceso:"})}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Verifique el aplicativo actualizando phpmyadmin."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Ejecute los siguientes comandos para establecer los permisos:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"chmod -R 755 storage\nchmod -R 755 bootstrap/cache\nphp artisan storage:link\n"})}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Acceda al proyecto en su dominio:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"http://Facturadorpro3.test",children:"Facturadorpro3.test"})}),"\n",(0,a.jsxs)(e.li,{children:["Usuario: ",(0,a.jsx)(e.a,{href:"mailto:admin@gmail.com",children:"admin@gmail.com"})]}),"\n",(0,a.jsx)(e.li,{children:"Contrase\xf1a: 123456"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},1151:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var a=s(7294);const l={},i=a.createContext(l);function r(n){const e=a.useContext(i);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),a.createElement(i.Provider,{value:e},n.children)}}}]);