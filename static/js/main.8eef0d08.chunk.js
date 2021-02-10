(this["webpackJsonpportfolio-rewrite"]=this["webpackJsonpportfolio-rewrite"]||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),s=t.n(i),r=t(14),a=t.n(r),l=(t(37),t(38),t(55)),o=t(56),d=t(57);var j=function(){return Object(c.jsx)("div",{className:"slanted-outer",style:{zIndex:10,position:"fixed",top:0,left:0},children:Object(c.jsxs)(o.a,{expand:"sm",children:[Object(c.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(c.jsx)(d.a.Link,{href:"#start",children:"Damian Gleumes"}),Object(c.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Link,{href:"#projects",children:"Projects"}),Object(c.jsx)(d.a.Link,{href:"#softskills",children:"Soft Skills"}),Object(c.jsx)(d.a.Link,{href:"#hardskills",children:"Hard Skills"}),Object(c.jsx)(d.a.Link,{href:"#contact",children:"Contact"})]})})]})})},h=t(50),b=t(51);var x=function(){return Object(c.jsxs)(h.a,{id:"start",style:{height:"100vh"},children:[Object(c.jsx)(b.a,{xs:12,className:"text-center main-font mx-auto mt-auto mb-4",children:Object(c.jsxs)("h1",{children:["Hi, my name is ",Object(c.jsx)("strong",{children:"Damian Gleumes"})]})}),Object(c.jsx)(b.a,{lg:8,md:11,sm:10,xs:12,className:"text-center secondary-font mx-auto mb-auto pb-5",children:Object(c.jsxs)("p",{style:{fontSize:"1.75rem"},children:["I'm studying informatics @University Bonn ",Object(c.jsx)("br",{}),"I have a strong passion for coding and love applying my knowledge in real world projects!"]})})]})},m=t(28),O=t(31),u=t(19),g=t(20),f=t(23),p=t(21),y=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=this.props,n=e.id,t=Object(O.a)(e,["id"]);return Object(c.jsxs)(h.a,{id:n,className:"py-5 d-flex flex-column align-items-center",children:[Object(c.jsx)(b.a,{xs:12,className:"mb-5 mt-4",children:Object(c.jsx)("h1",{className:"main-font text-center",children:this.props.heading})}),Object(c.jsx)(b.a,Object(m.a)(Object(m.a)({},t),{},{className:"",children:this.props.children}))]})}}]),t}(s.a.Component),k=t(4),v=t.n(k),C=t(58),T=t(13),S=t(9),N={HTML5:"#82e0aa",JS:"#f4d03f",JSX:"#f4d03f",React:"#d8e39d",CSS3:"#76d7c4",Bootstrap:"#7dcea0","C++11":"#5dade2","C++":"#5dade2",R:"#95a5a6",MongoDB:"#abcdd4",Python3:"#f1948a",Flask:"#edbb99",Numpy:"#f5b7b1",Pandas:"#f5b7b1",Matplotlib:"#d2b4de",Bokeh:"#d2b4de"},L=function(e){Object(f.a)(t,e);var n=Object(p.a)(t);function t(){return Object(u.a)(this,t),n.apply(this,arguments)}return Object(g.a)(t,[{key:"render",value:function(){var e=s.a.Children.toArray(this.props.children),n=e.filter((function(e){return!e.props.__CARD_FOOTER})),t=e.filter((function(e){return e.props.__CARD_FOOTER}));return Object(c.jsxs)(C.a,{style:{backgroundColor:"#fefbfb",marginTop:"15px",marginBottom:"15px"},children:[Object(c.jsx)(C.a.Body,{className:"d-flex flex-column pb-2",children:n}),Object(c.jsx)(C.a.Footer,{className:"py-3",children:t})]})}}],[{key:"Title",value:function(e){return Object(c.jsx)(C.a.Title,{className:"main-font",children:Object(c.jsx)("h3",{children:e.children})})}},{key:"Description",value:function(e){return Object(c.jsx)(C.a.Text,{className:"secondary-font",children:e.children})}},{key:"Company",value:function(e){return Object(c.jsxs)("small",{className:"d-flex align-items-center mt-auto font-weight-bold",style:{color:"grey",letterSpacing:"-1px"},children:[Object(c.jsx)(T.a,{icon:S.e,className:"mr-1"}),e.children]})}},{key:"TagList",value:function(e){var n=e.langs.map((function(e){var n=e in N?N[e]:"grey";return Object(c.jsx)(b.a,{className:"col-auto m-1 badge secondary-font",style:{backgroundColor:n,lineHeight:1.25},children:e},e)}));return Object(c.jsx)(h.a,{className:"m-n1",children:n})}}]),t}(s.a.Component);L.Company.propTypes={children:v.a.node,__TYPE:v.a.string},L.Company.defaultProps={__CARD_FOOTER:!1},L.TagList.propTypes={langs:v.a.arrayOf(v.a.string),__TYPE:v.a.string},L.TagList.defaultProps={__CARD_FOOTER:!0};var P=L;var R=function(e){var n=function(e){var n=["xs","sm","md","lg","xl"],t=n.findIndex((function(n){return n===e})),i=-1===t||t===n.length?"":n[t+1];return Object(c.jsx)("div",{className:"w-100 d-none d-"+e+"-block"+(i?" d-"+i+"-none":"")},e)};return e.on?e.on instanceof Array?e.on.map((function(e){return n(e)})):n(e.on):Object(c.jsx)("div",{className:"w-100"})},w=t(52);var B=function(){return Object(c.jsx)(y,{id:"projects",heading:"Projects",children:Object(c.jsxs)(w.a,{style:{marginTop:"-15px",marginBottom:"-15px"},children:[Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"Excel Web-Add-In"}),Object(c.jsx)(P.Description,{children:"Eine Add-In, das eine Portfolio-Verwaltung direkt in Excel via runter- und hochladbarer Tabellen erm\xf6glicht. Umgesetzt als Website mit Flask Backend."}),Object(c.jsx)(P.Company,{children:"QUANVEST GmbH"}),Object(c.jsx)(P.TagList,{langs:["Python3","Flask","Bootstrap","CSS3","HTML5","JS","RESTful API"]})]}),Object(c.jsx)(R,{on:["sm","xs"]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"Tweetsentiment Analyse"}),Object(c.jsx)(P.Description,{children:"Analyse des Zusammenhangs zwischen positiv und negativ gepr\xe4gten Wortfeldern auf Twitter und dem historischem Markttrend. Interaktive Visualisierung im Browser."}),Object(c.jsx)(P.Company,{children:"QUANVEST GmbH"}),Object(c.jsx)(P.TagList,{langs:["Python3","Bokeh","Matplotlib","Pandas","Bootstrap","CSS3","JS","MongoDB"]})]}),Object(c.jsx)(R,{on:["lg","md","sm","xs"]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"React Portfolio-Website"}),Object(c.jsx)(P.Description,{children:"Entwicklung dieser Website als pers\xf6nliches Lernprojekt f\xfcr React und React-Bootstrap."}),Object(c.jsx)(P.TagList,{langs:["JSX","React","Bootstrap","CSS3","HTML5","Github-pages"]})]}),Object(c.jsx)(R,{on:["xl","sm","xs"]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"Rcpp Filter"}),Object(c.jsx)(P.Description,{children:"C++ Implementierung eines zeitkritischen Filters f\xfcr Datens\xe4tze in einem in R geschriebenen Backend."}),Object(c.jsx)(P.Company,{children:"QUANVEST GmbH"}),Object(c.jsx)(P.TagList,{langs:["C++11","R","Rcpp"]})]}),Object(c.jsx)(R,{on:["lg","md","sm","xs"]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"C++ Workshops"}),Object(c.jsx)(P.Description,{children:"Leitung von Anf\xe4nger- und Fortgeschrittene-Programmierkurse f\xfcr Jugendliche im Alter von 13 bis 16 Jahren."}),Object(c.jsx)(P.Company,{children:"SK-Jugend"}),Object(c.jsx)(P.TagList,{langs:["C++"]})]}),Object(c.jsx)(R,{on:["sm","xs"]}),Object(c.jsxs)(P,{children:[Object(c.jsx)(P.Title,{children:"Python Workshop"}),Object(c.jsx)(P.Description,{children:"Spielerische Heranf\xfchrung von Jugendlichen zwischen 11 und 13 an das Programmieren via einer Python-Minecraft-Schnittstelle."}),Object(c.jsx)(P.Company,{children:"SK-Jugend"}),Object(c.jsx)(P.TagList,{langs:["Python3","RaspberryJuice"]})]})]})})};function D(e){return Object(c.jsx)(T.a,{icon:e.icon,style:{color:e.color},className:"fa-fw fa-3x"})}function z(e){return Object(c.jsx)(b.a,{md:6,xs:12,children:Object(c.jsx)("div",{className:"mx-lg-5 mx-4 mb-lg-5 mb-4",children:Object(c.jsxs)(h.a,{children:[Object(c.jsx)(b.a,{xs:"auto ml-lg-3",className:"pl-0",children:Object(c.jsx)(D,{icon:e.icon,color:e.iconColor})}),Object(c.jsx)(b.a,{xs:"auto",className:"px-0 pl-lg-2 text-center",children:Object(c.jsx)("h2",{className:"main-font",children:e.title})}),Object(c.jsx)(b.a,{xs:12,className:"mt-lg-3 mt-1 secondary-font",style:{fontSize:"1.05em"},children:e.children})]})})})}var A=function(){return Object(c.jsx)(y,{id:"softskills",heading:"Soft Skills",children:Object(c.jsxs)(h.a,{className:"mb-n5",children:[Object(c.jsx)(z,{title:"Kreativ",icon:S.f,iconColor:"orange",children:"Ich zeichne, singe gerne und spiele Klarinette und Ukulele. Kniffelige Aufgaben begeistern mich und ich denke gerne \xfcber den Tellerrand hinaus."}),Object(c.jsx)(z,{title:"Autodidaktisch",icon:S.a,iconColor:"forestgreen",children:"Mich zeichnet eine hohe Wissbegierigkeit aus und die F\xe4higkeit mich schnell in Sachverh\xe4ltnisse einarbeiten zu k\xf6nnen."}),Object(c.jsx)(z,{title:"Mitdenkend",icon:S.b,iconColor:"darkred",children:"Ich bin kein Roboter! Ich versuche stets meinen eigenen hinterfragenden Geist in das Projekt miteinflie\xdfen zu lassen, um das Endresultat so wertig wie m\xf6glich zu gestalten."}),Object(c.jsx)(z,{title:"Kommunikativ",icon:S.c,iconColor:"royalblue",children:"Funktionalit\xe4t ohne ansprechendes, kommunikatives Design ist nichts! Ich besitze ein pr\xe4zises Auge mit einem Gesp\xfcr f\xfcr Proportionen."})]})})},F=t(53);function I(e){var n=e.active?"orange":"grey";return Object(c.jsx)("div",{style:{display:"inline-block",height:"100%",width:"20%"},children:Object(c.jsx)("i",{style:{display:"inline-block",height:"100%",width:"80%",backgroundColor:n,transform:"skew(-35deg)"}})})}function E(e){var n=Array.from({length:5},(function(n,t){return Object(c.jsx)(I,{active:t<e.confidence},t)}));return Object(c.jsxs)(h.a,{noGutters:!0,className:"my-3 align-items-center",children:[Object(c.jsx)(b.a,{xl:6,lg:5,md:6,xs:5,className:"main-font mb-0",style:{fontSize:"1.75em",lineHeight:1,zIndex:1},children:e.children}),Object(c.jsx)(b.a,{xl:6,lg:7,md:6,xs:7,style:{height:"1.75em"},children:n})]})}function M(e){return Object(c.jsx)("div",{style:{paddingTop:"2em"},children:Object(c.jsxs)(C.a,{xs:12,lg:6,style:{border:"None",display:"inline-block"},children:[Object(c.jsx)("label",{className:"main-font",style:{position:"absolute",top:"-1.2em",left:"1.75em",margin:0,color:"grey",fontSize:"1.25em"},children:e.heading}),Object(c.jsx)("div",{style:{border:"1px solid grey",borderRadius:"1.5em",padding:"1.5em"},children:Object(c.jsx)("div",{className:"my-n3",children:e.children})})]})})}var _=function(){return Object(c.jsx)(y,{id:"hardskills",heading:"Hardskills",children:Object(c.jsxs)(F.a,{style:{columnGap:"2.75rem",marginTop:"-15px",marginBottom:"-15px"},children:[Object(c.jsxs)(M,{heading:"Coding Languages",children:[Object(c.jsx)(E,{confidence:5,children:"Python"}),Object(c.jsx)(E,{confidence:4,children:"C / C++"}),Object(c.jsx)(E,{confidence:4,children:"Java"}),Object(c.jsx)(E,{confidence:2,children:"R"})]}),Object(c.jsxs)(M,{heading:"Basic Web Development",children:[Object(c.jsx)(E,{confidence:5,children:"HTML"}),Object(c.jsx)(E,{confidence:4,children:"CSS"}),Object(c.jsx)(E,{confidence:3,children:"Java Script"})]}),Object(c.jsxs)(M,{heading:"Web Development Frameworks",children:[Object(c.jsx)(E,{confidence:5,children:"Boots\xadtrap"}),Object(c.jsx)(E,{confidence:4,children:"React"}),Object(c.jsx)(E,{confidence:2,children:"Flask"})]}),Object(c.jsxs)(M,{heading:"Data Base",children:[Object(c.jsx)(E,{confidence:5,children:"Mongo DB"}),Object(c.jsx)(E,{confidence:2,children:"SQL"})]}),Object(c.jsxs)(M,{heading:"Linux",children:[Object(c.jsx)(E,{confidence:3,children:"Ubuntu"}),Object(c.jsx)(E,{confidence:4,children:"Docker"})]}),Object(c.jsxs)(M,{heading:"SVC",children:[Object(c.jsx)(E,{confidence:4,children:"Git"}),Object(c.jsx)(E,{confidence:3,children:"GitHub/Lab"})]}),Object(c.jsxs)(M,{heading:"Programms",children:[Object(c.jsx)(E,{confidence:3,children:"GIMP"}),Object(c.jsx)(E,{confidence:2,children:"Figma"})]})]})})},J=t(54);var H=function(e){return Object(c.jsx)(y,{heading:"Contact",children:Object(c.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(c.jsx)("p",{className:"secondary-font text-center",style:{fontSize:"1.5em"},children:"Schreibe mir eine Mail!"}),Object(c.jsxs)(J.a,{style:{backgroundColor:"darkred",borderColor:"darkred",outlineColor:"darkred",margin:"auto"},href:"mailto:damgem@zoho.com",children:[Object(c.jsx)(T.a,{icon:S.d,className:"mr-2"}),"damgem@zoho.com"]})]})})};var G=function(){return Object(c.jsxs)(l.a,{className:"App mb-5",children:[Object(c.jsx)(j,{}),Object(c.jsx)(x,{}),Object(c.jsx)(B,{}),Object(c.jsx)(A,{}),Object(c.jsx)(_,{}),Object(c.jsx)(H,{})]})},W=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),i(e),s(e),r(e)}))};t(47);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(G,{})}),document.getElementById("root")),W()}},[[48,1,2]]]);
//# sourceMappingURL=main.8eef0d08.chunk.js.map