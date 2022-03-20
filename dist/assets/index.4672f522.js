var V=Object.defineProperty,K=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var B=(e,t,r)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&B(e,r,t[r]);if(w)for(var r of w(t))M.call(t,r)&&B(e,r,t[r]);return e},g=(e,t)=>K(e,X(t));var y=(e,t)=>{var r={};for(var i in e)H.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&w)for(var i of w(e))t.indexOf(i)<0&&M.call(e,i)&&(r[i]=e[i]);return r};import{s as a,j as c,a as n,u as Q,b as Y,L as G,F as Z,r as h,C as ee,T as te,c as ne,B as re,R as oe,d as z,e as ie,f as ae}from"./vendor.20bfd749.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=r(l);fetch(l.href,o)}};le();const se=a.h3`
    font-family: 'Fredericka the Great', cursive;
    font-weight: 200;
    font-size: 2rem;
    margin: 0;
    text-decoration: none;
    color: var(--p1);
`,ce=a.span`
    color: var(--a2)
`;function de({condensed:e}){const t=e?["Use","Metatags"]:["U","m"];return c(se,{children:[t[0],n(ce,{children:t[1]})]})}function q(e){let t=Q(e);return Y({path:t.pathname,end:!0})}function me(i){var l=i,{children:e,to:t}=l,r=y(l,["children","to"]);const o=q(t);return n(G,g(p({style:{textDecoration:o?"underline solid var(--linkBorderHeight) var(--a1)":"none"},to:t,tabIndex:o?"-1":"auto"},r),{children:e}))}const pe=a.nav`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2rem 0;
`,L=a(me)`
    font-size: 2rem;
    font-family: 'Fredericka the Great', cursive;
    color: var(--p1);
    &:hover {
        text-decoration: underline solid var(--linkBorderHeight) var(--a1) !important;
        // text-decoration: underline var(--p1) 3px !important;
    }
`;function F(){const e=q("/app");return c(pe,{children:[n(L,{to:"/",children:n(de,{condensed:e})}),!e&&c(Z,{children:[n(L,{to:"/app",children:"Commencer"}),n(L,{to:"/about",children:"\xC0 propos"})]})]})}const ue=a(G)`
    background: var(--p1);
    color: var(--b1);

    padding: 1rem 3rem;
    text-decoration: none;
    
    font-size: 1.4rem;
`;function he(e){const t=e.children||e.content;return n(ue,{to:e.to,children:t})}function fe(e){let t=e.length,r;for(;t!=0;)r=Math.floor(Math.random()*t),t--,[e[t],e[r]]=[e[r],e[t]];return e}var k=["title","charset","og","image","canonical","url","target","subject","description","theme-color","type","card","seo","img","twitter","link","rel","href","http-equiv","lang","author","viewport","locale","shortcut icon","creator","itemprop"];function D(){fe(k);const e=6,t=[];for(let r=0;r<e;r++)t[r]=[];for(let r=0;r<k.length;r++)t[r%e].push(k[r]);return t.map((r,i)=>n("span",{children:r.join(" ")},i))}const j="metatags.profiles";function W(){const[e,t]=h.exports.useState([]);h.exports.useEffect(()=>{Array.isArray(e)&&e.length>0&&localStorage.setItem(j,JSON.stringify(e))},[e]);const r=()=>{if(console.group("getProfiles"),console.log(e),Array.isArray(e)&&e.length>0)return console.groupEnd(),e;var o;try{return o=JSON.parse(localStorage.getItem(j)),Array.isArray(o)?(t(o),console.groupEnd(),o):(console.groupEnd(),[])}catch(s){console.log(s),console.groupEnd()}};return{getProfiles:r,getProfile:o=>r().find(s=>s.id==o)||!1,saveProfile:o=>{var s=-1;for(let u=0;u<e.length;u++)if(e[u].id==o.id){s=u;break}const m=[...e];s>=0?m[s]=o:m.push(o),t(m)}}}const ge=a.main`
    display: flex;
    flex-direction: row;
    gap: var(--containerGap);
`,ve=a.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 7rem;
    font-weight: 200;
    color: var(--p1);
    margin-top: 5rem;
    margin-bottom: 2rem;

    > span {
        color: var(--a1);
    }
`,xe=a.h2`
    font-size: 2.4rem;
    margin: 0;
`,be=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,ye=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    overflow: visible auto;
    width: 100%;
    height: 100%;
`,we=a.div`
    width: var(--leftPanelWComputed);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
`;a.div`
    display: flex;
    flex-flow: row wrap;
    padding-bottom: 1rem;
`;const Ce=a.div`
    width: var(--rightPanelWComputed);
    font-size: 7rem;
    text-overflow: clip;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    font-family: 'Fredericka the Great', cursive;
    user-select: none;
`;function $e(){const{getProfiles:e,saveProfile:t}=W();return h.exports.useEffect(()=>{t({id:"test",data:{}})},[]),c(ge,{children:[c(we,{children:[n(F,{}),c(ye,{children:[c(ve,{children:["Use ",n("span",{children:"metatags"})]}),n(xe,{children:"Cr\xE9ez simplement vos balises Meta"}),n(be,{children:"Entrez les informations de votre site et r\xE9cup\xE9rez le code html"}),n(he,{to:"/app",content:"Commencer"})]})]}),n(Ce,{children:n(D,{})})]})}const Se=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;

    > input {
        font-size: 1.4rem;
        border: none;
        padding: 1rem;
        background: var(--b0);
        border: 2px solid var(--b2);
        max-width: 100%;
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
    }
`;function Te({value:e,name:t,label:r,placeholder:i,onChange:l}){return c(Se,{children:[n("label",{children:r}),n("input",{value:e,onChange:o=>l(t,o.target.value),name:t,placeholder:i,type:"text"})]})}const Pe=a.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 1.4rem;

    > input {
        font-size: 1.4rem;
        border: none;
        padding: 1rem;
        background: var(--b2);
        max-width: 100%;
        min-width: 0;
        width: 100%;
        box-sizing: border-box;
    }
`,Ee={option:(e,t)=>g(p({},e),{borderBottom:"1px dotted pink",color:t.isSelected?"red":"blue"}),container:e=>g(p({},e),{width:"100%"}),control:e=>g(p({},e),{width:"auto",borderRadius:0,padding:"0.3rem"}),singleValue:(e,t)=>{const r=t.isDisabled?.5:1,i="opacity 300ms";return g(p({},e),{opacity:r,transition:i})}};function ze({options:e,value:t,name:r,label:i,onChange:l}){const o=e.map(s=>{let m=s.split("|"),u=m[0],x=m.length>0?m[1]:m[0];return{value:u,label:x}});return c(Pe,{children:[n("label",{children:i}),n(ee,{isClearable:!0,styles:Ee,value:t,onChange:s=>l(r,s),name:r,options:o})]})}const Le=a.button`
    background: ${e=>e.secondary?"none":"var(--p1)"};
    color: ${e=>e.secondary?"var(--p1)":"var(--b1)"};
    cursor: pointer;
    
    border: none;
    padding: ${e=>e.small?"0.6rem 1rem":"1rem 3rem"};
    text-decoration: none;
    
    font-size: 1.4rem;
`;function I(l){var o=l,{children:e,content:t,action:r}=o,i=y(o,["children","content","action"]);const s=e||t;return n(Le,g(p({onClick:r},i),{children:s}))}function N(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}function ke({contentToCopy:e,timeOut:t}){const[r,i]=h.exports.useState(!1),l=()=>{navigator.permissions.query({name:"clipboard-write"}).then(s=>{(s.state=="granted"||s.state=="prompt")&&navigator.clipboard.writeText(e).then(function(){i(!0),t&&setTimeout(()=>i(!1),t)},function(){i(!1)})})};return{copyContent:l,CopyBtn:u=>{var x=u,{content:s}=x,m=y(x,["content"]);var $=r?"Copi\xE9!":s;return n(I,p({action:()=>l(),content:$},m))}}}const Ae=a.div`
    overflow-x:auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0.2rem;
`,Ie=a.div`
    overflow-x:auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0.2rem;
`,Fe=a.div`
    display: flex;
    // margin-top: 8rem;
    margin-bottom: 1rem;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items:center;
    gap: 0.5rem;
    font-size: 1.4rem;
    color: var(--p2);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--b3);

`,Re=a.button`
    padding: 0.4rem 0.8rem;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    background: ${e=>e.active?"var(--p1)":"none"};
    color: ${e=>e.active?"var(--b1)":"var(--p2)"};

    &:hover {
        background: ${e=>e.active?"var(--p1)":"var(--b2)"};
        color: ${e=>e.active?"var(--b1)":"var(--p2)"};
    }
`,Ue=a.h2`
    margin: 0;
    font-size: 2.4rem;
`,Be=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,He=a.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,Me=a.div`
    display: flex;
    padding-top: 1rem;
    gap: 1rem;
    flex-flow: row wrap;
    justify-content: flex-end;
`;function je({tabs:e,onChange:t,formResult:r}){const[i,l]=h.exports.useState(0),[o,s]=h.exports.useState({}),{CopyBtn:m}=ke({contentToCopy:r,timeOut:3e3}),{getProfiles:u,getProfile:x,saveProfile:$}=W();console.log(u()),h.exports.useEffect(()=>{if($("test",{e:"b"}),Object.keys(o).length>0)return;let d={};for(let f of e)for(let P of f.fields)d[`${f.name}${N(P.name)}`]="";s(d)},[]);const b=e[i],R=(d,f)=>{s(g(p({},o),{[d]:f}))};h.exports.useEffect(()=>{t(o)},[o]);const S=d=>0<=d&&d<e.length,T=d=>{S(d)&&l(d)},_=()=>T(i+1),J=()=>T(i-1);return c(Ae,{children:[n(Fe,{children:e.map((d,f)=>n(Re,{onClick:()=>T(f),active:d.title===b.title,children:d.shortTitle},f))}),c(Ie,{children:[n(Ue,{children:b.title}),n(Be,{children:b.subtitle}),n(He,{children:b.fields.map((d,f)=>{const U=d,{name:P}=U,E=y(U,["name"]),v=`${b.name}${N(P)}`;return E.options?n(ze,p({name:v,value:o[v]||"",onChange:R},E),v):n(Te,p({name:v,value:o[v]||"",onChange:R},E),v)})})]}),c(Me,{children:[S(i-1)&&n(I,{small:!0,action:J,secondary:!0,content:"Pr\xE9c\xE9dent"}),S(i+1)&&n(I,{small:!0,action:_,secondary:!0,content:"Suivant"}),n(m,{small:!0,content:"Copier HTML"})]})]})}function O(e){return`<html lang="${e.siteLang}">
    <head prefix="og: http://ogp.me/ns#">

        <title>${e.pageTitle} - ${e.siteTitle}</title>

        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">

        <meta name="robots" content="${e.moreRobots}">
        <meta name="target" content="${e.moreRobots}">

        <meta name="author" content="${e.moreAuthor}">
        <meta name="owner" content="${e.moreOwner}">
        <meta name="language" content="${e.siteLang}">
        <meta http-equiv="content-language" content="${e.siteLang}">

        <meta name="url" content="${e.siteUrl}">
        <meta name="identifier-URL" content="${e.siteUrl}">
        <link rel="canonical" href="${e.siteUrl}" />

        <meta name="subject" content="${e.moreSubject}">
        <meta name="description" content="${e.pageDesc}" />

        <meta property="og:title" content="${e.pageTitle}" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="${e.pageDesc}" />
        <meta property="og:site_name" content="${e.siteTitle}" />
        <meta property="og:url" content="${e.siteUrl}" />
        <meta property="og:locale" content="${e.siteLang}" />
        <meta property="og:image" content="${e.pageHeroUrl}" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="${e.siteUrl}">
        <meta name="twitter:title" content="${e.pageTitle} - ${e.siteTitle}" />
        <meta name="twitter:description" content="${e.pageDesc}" />
        <meta name="twitter:site" content="${e.siteUrl}" />
        <meta name="twitter:image" content="${e.pageHeroUrl}" />

        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="${e.pageTitle}" />
        <meta name="apple-mobile-web-app-status-bar-style" content="${e.moreThemeColor}">
        <meta name="theme-color" content="${e.moreThemeColor}">

    </head>
</html>
`}var Ne=[{title:"Informations du site",shortTitle:"Site",name:"site",fields:[{name:"title",label:"Titre"},{name:"url",label:"Url"},{name:"lang",label:"Langue"}]},{title:"Informations de la page",shortTitle:"Page",name:"page",fields:[{name:"title",label:"Nom"},{name:"desc",label:"Description"},{name:"heroUrl",label:"Url image preview"}]},{title:"Param\xE8tres suppl\xE9mentaires",shortTitle:"En plus",name:"more",fields:[{name:"robots",label:"Robots"},{name:"subject",label:"Sujet"},{name:"author",label:"Auteur"},{name:"owner",label:"Propri\xE9taire"},{name:"themeColor",label:"Couleur du th\xE8me"}]}];const Oe=a.main`
    display: flex;
    flex-direction: row;
    // gap: var(--containerGap);
`,Ge=a.div`
    width: 50%;
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    // align-items:flex-start;
`,qe=a.div`
    // width: var(--rightPanelWComputed);
    position: relative;
    width: 50%;
    height: 100vh;
    // overflow-x: auto;
    font-size: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    user-select: normal;
    > span {
        padding-left: 1.4rem;
        > code {
            padding-top: 2rem !important;
            > :last-child {
                padding-bottom: 2rem !important;
            }

            &:first-child {
                text-align: right;
                opacity: 0.5;
            }
        }
    }
`;function De(){const[e,t]=h.exports.useState(O({}));return c(Oe,{children:[c(Ge,{children:[n(F,{}),n(je,{tabs:Ne,onChange:r=>t(O(r)),formResult:e})]}),c(qe,{children:[n(te,{text:e,language:"html",showLineNumbers:!0,startingLineNumber:0,theme:ne}),n("div",{className:"bottom-spacer"})]})]})}const We=a.main`
    display: flex;
    flex-direction: row;
    gap: var(--containerGap);
`,_e=a.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 7rem;
    font-weight: 200;
    color: var(--p1);
    margin-top: 5rem;
    margin-bottom: 2rem;

    > span {
        color: var(--a1);
    }
`,A=a.h2`
    font-size: 2.4rem;
    margin: 0;
`,C=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,Je=a.div`
    overflow: visible auto;
    width: 100%;
    height: 100%;
`,Ve=a.div`
    width: var(--leftPanelWComputed);
    display: flex;
    margin-left: auto;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
`,Ke=a.div`
    width: var(--rightPanelWComputed);
    font-size: 7rem;
    text-overflow: clip;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    font-family: 'Fredericka the Great', cursive;
    user-select: none;
`;function Xe(){return c(We,{children:[c(Ve,{children:[n(F,{}),c(Je,{children:[c(_e,{children:["\xC0 ",n("span",{children:"propos"})]}),n(A,{children:"Les meta-tags"}),c(C,{children:["Ce sont des ",n("b",{children:"balises html"})," contenant des informations \xE0 destination des navigateurs et des robots d'indexation."]}),n(A,{children:"\xC0 qui s'adresse le site?"}),n(C,{children:"Cet outils est destin\xE9 aux d\xE9veloppeurs qui souhaitent g\xE9n\xE9rer des meta-tags rapidement ou simplement obtenir un mod\xE8le."}),n(A,{children:"Pourquoi avoir cr\xE9\xE9 cet outil?"}),n(C,{children:c("ul",{children:[n("li",{children:"Progresser en React"}),n("li",{children:"Travailler l'accessibilit\xE9"}),n("li",{children:"Permettre d'avoir une base concr\xE8te pour les meta-tags plut\xF4t que de fouiller mes anciens projets pour copier coller."})]})}),c(C,{children:["D\xE9velopp\xE9 par ",n("a",{className:"link",href:"https://arthaudproust.fr",children:"Arthaud Proust"})]})]})]}),n(Ke,{children:n(D,{})})]})}function Qe(){return n(re,{children:c(oe,{children:[n(z,{exact:!0,path:"/",element:n($e,{})}),n(z,{path:"/app",element:n(De,{})}),n(z,{path:"/about",element:n(Xe,{})})]})})}ie.render(n(ae.StrictMode,{children:n(Qe,{})}),document.getElementById("root"));
