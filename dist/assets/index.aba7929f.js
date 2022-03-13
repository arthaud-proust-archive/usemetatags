var D=Object.defineProperty,N=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var x=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var F=(e,n,t)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,d=(e,n)=>{for(var t in n||(n={}))R.call(n,t)&&F(e,t,n[t]);if(x)for(var t of x(n))I.call(n,t)&&F(e,t,n[t]);return e},u=(e,n)=>N(e,O(n));var y=(e,n)=>{var t={};for(var i in e)R.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&x)for(var i of x(e))n.indexOf(i)<0&&I.call(e,i)&&(t[i]=e[i]);return t};import{u as q,a as W,j as r,L as P,s as a,b as s,F as _,C as V,r as v,T as K,d as X,B as J,R as Q,c as C,e as Y,f as Z}from"./vendor.593f471f.js";const ee=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}};ee();function A(e){let n=q(e);return W({path:n.pathname,end:!0})}function te(i){var o=i,{children:e,to:n}=o,t=y(o,["children","to"]);const l=A(n);return r(P,u(d({style:{textDecoration:l?"underline dashed var(--p1) 2px":"none"},to:n},t),{children:e}))}const ne=a.h3`
    font-family: 'Fredericka the Great', cursive;
    font-weight: 200;
    font-size: 2rem;
    text-decoration: none;
    color: var(--p1);
`,re=a.span`
    color: var(--a2)
`;function oe({condensed:e}){const n=e?["Use","Metatags"]:["U","m"];return s(ne,{children:[n[0],r(re,{children:n[1]})]})}const ae=a.nav`
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
`,T=a(te)`
    font-size: 2rem;
    font-family: 'Fredericka the Great', cursive;
    color: var(--p1);
    &:hover {
        text-decoration: underline var(--p1) 3px !important;
    }
`;function L(){const e=A("/app");return s(ae,{children:[r(T,{to:"/",children:r(oe,{condensed:e})}),!e&&s(_,{children:[r(T,{to:"/app",children:"Commencer"}),r(T,{to:"/about",children:"\xC0 propos"})]})]})}function E(e){let n=e.length,t;for(;n!=0;)t=Math.floor(Math.random()*n),n--,[e[n],e[t]]=[e[t],e[n]];return e}const ie=a(P)`
    background: var(--p1);
    color: var(--b1);

    padding: 1rem 3rem;
    text-decoration: none;
    
    font-size: 1.4rem;
`;function le(e){const n=e.children||e.content;return r(ie,{to:e.to,children:n})}const ce=a.main`
    display: flex;
    flex-direction: row;
    gap: var(--containerGap);
`,se=a.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 7rem;
    font-weight: 200;
    color: var(--p1);
    margin-top: 5rem;
    margin-bottom: 2rem;

    > span {
        color: var(--a1);
    }
`,me=a.h2`
    font-size: 2.4rem;
    margin: 0;
`,de=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,pe=a.div`
    width: var(--leftPanelWComputed);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
`,ue=a.div`
    width: var(--rightPanelWComputed);
    font-size: 7rem;
    text-overflow: clip;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    font-family: 'Fredericka the Great', cursive;
    user-select: none;
`;var S=["title","charset","og","image","canonical","url","target","subject","description","theme-color","type","card","seo","img","twitter","link","rel","href","http-equiv","lang","author","viewport","locale","shortcut icon","creator","itemprop"];function he(){E(S);const e=6,n=[];for(let t=0;t<e;t++)n[t]=[];for(let t=0;t<S.length;t++)n[t%e].push(S[t]);return s(ce,{children:[s(pe,{children:[r(L,{}),s(se,{children:["Use ",r("span",{children:"metatags"})]}),r(me,{children:"Cr\xE9ez simplement vos balises Meta"}),r(de,{children:"Entrez les informations de votre site et r\xE9cup\xE9rez le code html"}),r(le,{to:"/app",content:"Commencer"})]}),r(ue,{children:n.map((t,i)=>r("span",{children:t.join(" ")},i))})]})}const ge=a.div`
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
`;function fe({value:e,name:n,label:t,placeholder:i,onChange:o}){return s(ge,{children:[r("label",{children:t}),r("input",{value:e,onChange:l=>o(n,l.target.value),name:n,placeholder:i,type:"text"})]})}const be=a.div`
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
`,ve={option:(e,n)=>u(d({},e),{borderBottom:"1px dotted pink",color:n.isSelected?"red":"blue"}),container:e=>u(d({},e),{width:"100%"}),control:e=>u(d({},e),{width:"auto",borderRadius:0,padding:"0.3rem"}),singleValue:(e,n)=>{const t=n.isDisabled?.5:1,i="opacity 300ms";return u(d({},e),{opacity:t,transition:i})}};function xe({options:e,value:n,name:t,label:i,onChange:o}){const l=e.map(c=>{let h=c.split("|"),f=h[0],b=h.length>0?h[1]:h[0];return{value:f,label:b}});return s(be,{children:[r("label",{children:i}),r(V,{isClearable:!0,styles:ve,value:n,onChange:c=>o(t,c),name:t,options:l})]})}const ye=a.button`
    background: ${e=>e.secondary?"none":"var(--p1)"};
    color: ${e=>e.secondary?"var(--p1)":"var(--b1)"};
    cursor: pointer;
    
    border: none;
    padding: 1rem 3rem;
    text-decoration: none;
    
    font-size: 1.4rem;
`;function z(o){var l=o,{children:e,content:n,action:t}=l,i=y(l,["children","content","action"]);const c=e||n;return r(ye,u(d({onClick:t},i),{children:c}))}function j(e){return`${e.charAt(0).toUpperCase()}${e.slice(1)}`}const we=a.div`
    overflow-x:auto;
    display: flex;
    flex-direction: column;
    padding: 2rem 0.2rem;
    margin-bottom: 1rem;
`,$e=a.div`
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

`,Ce=a.span`
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    background: ${e=>e.active?"var(--p1)":"none"};
    color: ${e=>e.active?"var(--b1)":"var(--p2)"};

    &:hover {
        background: ${e=>e.active?"var(--p1)":"var(--b2)"};
        color: ${e=>e.active?"var(--b1)":"var(--p2)"};
    }
`,Te=a.h2`
    margin: 0;
    font-size: 2.4rem;
`,Se=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,ze=a.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`,ke=a.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-end;
`;function Le({tabs:e,onChange:n}){const[t,i]=v.exports.useState(0),[o,l]=v.exports.useState({});v.exports.useEffect(()=>{if(Object.keys(o).length>0)return;let m={};for(let p of e)for(let w of p.fields)m[`${p.name}${j(w.name)}`]="";l(m)},[]);const c=e[t],h=(m,p)=>{l(u(d({},o),{[m]:p}))};v.exports.useEffect(()=>{n(o)},[o]);const f=m=>0<=m&&m<e.length,b=m=>{f(m)&&i(m)},H=()=>b(t+1),B=()=>b(t-1),G=()=>{console.log(o)};return s(we,{children:[r($e,{children:e.map((m,p)=>r(Ce,{onClick:()=>b(p),active:m.title===c.title,children:m.shortTitle},p))}),r(Te,{children:c.title}),r(Se,{children:c.subtitle}),s(ze,{children:[c.fields.map((m,p)=>{const U=m,{name:w}=U,$=y(U,["name"]),g=`${c.name}${j(w)}`;return $.options?r(xe,d({name:g,value:o[g]||"",onChange:h},$),g):r(fe,d({name:g,value:o[g]||"",onChange:h},$),g)}),s(ke,{children:[f(t-1)&&r(z,{action:B,secondary:!0,content:"Pr\xE9c\xE9dent"}),f(t+1)?r(z,{action:H,content:c.actionTitle||"Continuer"}):r(z,{action:G,content:c.actionTitle||"Finir"})]})]})]})}function M(e){return`<html lang="${e.siteLang}">
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
`}var Ue=[{title:"Informations du site",shortTitle:"Site",name:"site",fields:[{name:"title",label:"Titre"},{name:"url",label:"Url"},{name:"lang",label:"Langue"}]},{title:"Informations de la page",shortTitle:"Page",name:"page",fields:[{name:"title",label:"Nom"},{name:"desc",label:"Description"},{name:"heroUrl",label:"Url image preview"}]},{title:"Param\xE8tres suppl\xE9mentaires",shortTitle:"En plus",name:"more",fields:[{name:"robots",label:"Robots"},{name:"subject",label:"Sujet"},{name:"author",label:"Auteur"},{name:"owner",label:"Propri\xE9taire"},{name:"themeColor",label:"Couleur du th\xE8me"}]}];const Fe=a.main`
    display: flex;
    flex-direction: row;
    // gap: var(--containerGap);
`,Re=a.div`
    width: 50%;
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    // align-items:flex-start;
`,Ie=a.div`
    // width: var(--rightPanelWComputed);
    width: 50%;
    height: 100vh;
    overflow-x: auto;
    font-size: 1rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    user-select: normal;
    > pre {
        margin: 0 !important;
        > code {
            padding-top: 2rem;
            padding-left: 1.4rem;
            padding-bottom: 2rem;
        }
    }
`;function je(){const[e,n]=v.exports.useState(M({}));return console.log(e),s(Fe,{children:[s(Re,{children:[r(L,{}),r(Le,{tabs:Ue,onChange:t=>n(M(t))})]}),r(Ie,{children:r(K,{text:e,language:"html",showLineNumbers:!0,startingLineNumber:0,theme:X})})]})}const Me=a.main`
    display: flex;
    flex-direction: row;
    gap: var(--containerGap);
`,Pe=a.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 7rem;
    font-weight: 200;
    color: var(--p1);
    margin-top: 5rem;
    margin-bottom: 2rem;

    > span {
        color: var(--a1);
    }
`,Ae=a.h2`
    font-size: 2.4rem;
    margin: 0;
`,Ee=a.p`
    margin: 0.2rem 0 3rem 0;
    font-size: 1.4rem;
    color: var(--p2);
`,He=a.div`
    width: var(--leftPanelWComputed);
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    max-height: 100vh;
`,Be=a.div`
    width: var(--rightPanelWComputed);
    font-size: 7rem;
    text-overflow: clip;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    font-family: 'Fredericka the Great', cursive;
    user-select: none;
`;var k=["title","charset","og","image","canonical","url","target","subject","description","theme-color","type","card","seo","img","twitter","link","rel","href","http-equiv","lang","author","viewport","locale","shortcut icon","creator","itemprop"];function Ge(){E(k);const e=6,n=[];for(let t=0;t<e;t++)n[t]=[];for(let t=0;t<k.length;t++)n[t%e].push(k[t]);return s(Me,{children:[s(He,{children:[r(L,{}),s(Pe,{children:["\xC0 ",r("span",{children:"propos"})]}),r(Ae,{children:"Cr\xE9ez simplement vos balises Meta"}),r(Ee,{children:"qsdqsd"})]}),r(Be,{children:n.map((t,i)=>r("span",{children:t.join(" ")},i))})]})}function De(){return r(J,{children:s(Q,{children:[r(C,{exact:!0,path:"/",element:r(he,{})}),r(C,{path:"/app",element:r(je,{})}),r(C,{path:"/about",element:r(Ge,{})})]})})}Y.render(r(Z.StrictMode,{children:r(De,{})}),document.getElementById("root"));
