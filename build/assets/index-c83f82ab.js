import{j as e,s as c,N as g,r as i,S as j,B as v,R as b,a as l,b as y,c as _,d as E}from"./vendor-201392fa.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))h(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&h(n)}).observe(document,{childList:!0,subtree:!0});function d(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function h(r){if(r.ep)return;r.ep=!0;const t=d(r);fetch(r.href,t)}})();const S="modulepreload",L=function(o){return"/"+o},m={},f=function(s,d,h){if(!d||d.length===0)return s();const r=document.getElementsByTagName("link");return Promise.all(d.map(t=>{if(t=L(t),t in m)return;m[t]=!0;const n=t.endsWith(".css"),x=n?'[rel="stylesheet"]':"";if(!!h)for(let u=r.length-1;u>=0;u--){const p=r[u];if(p.href===t&&(!n||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${x}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":S,n||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),n)return new Promise((u,p)=>{a.addEventListener("load",u),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>s()).catch(t=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=t,window.dispatchEvent(n),!n.defaultPrevented)throw t})},R=()=>e.jsx("div",{children:"NoFound"}),w=[{id:1,title:"Inicio",path:"/"},{id:2,title:"Sobre Nosotros",path:"/AboutUs"},{id:3,title:"Servicos",path:"Service"},{id:4,title:"Equipo Gesvial",path:"Team"},{id:5,title:"Contacto",path:"Contact"}],N=c.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`,P=c.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  border: 1px solid var(--negro);
  border-radius: 0.8em;
  background: linear-gradient(to bottom, var(--plata3), var(--plata2));
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`,A=c.li`
  padding: 0.5em 1em;
  &:hover {
    background-color: var(--gris);
    &:first-child {
      border-top-left-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
    &:last-child {
      border-top-right-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
    }
  }
`,O=c(g)`
  text-decoration: none;
  color: var(--negro);
  font-size: 2em;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    color: var(--dorado);
  }
`,I=c.span`
  align-items: center;
  color: var(--negro);
  display: flex;
  font-size: 2em;
`,z=()=>e.jsx(N,{children:e.jsx(P,{children:w.map((o,s)=>e.jsxs(i.Fragment,{children:[s!==0&&e.jsx(I,{children:"|"}),e.jsx(A,{children:e.jsx(O,{to:o==null?void 0:o.path,children:o==null?void 0:o.title})})]},o==null?void 0:o.id))})}),B="/assets/GESVIAL APROBADO sticker-fc6eafb2.png",F=c.header`
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  border-bottom: 1px solid var(--negro);
`,T=()=>e.jsx(e.Fragment,{children:e.jsxs(F,{children:[e.jsx("figure",{children:e.jsx("img",{src:B,alt:"logo",width:"83"})}),e.jsx(z,{})]})}),k=()=>e.jsx(e.Fragment,{children:e.jsx("footer",{children:e.jsxs("article",{children:[e.jsx("a",{href:"mailto:contactenosgesvial@gmail.com",children:"contactenosgesvial@gmail.com"}),e.jsx("i",{children:e.jsx(j,{})})]})})}),C=({children:o})=>e.jsxs(e.Fragment,{children:[e.jsx(T,{}),e.jsx("main",{children:o}),e.jsx(k,{})]}),D=i.lazy(()=>f(()=>import("./index-aeb9e8b0.js"),["assets/index-aeb9e8b0.js","assets/vendor-201392fa.js"])),V=i.lazy(()=>f(()=>import("./index-ba8d1209.js"),["assets/index-ba8d1209.js","assets/vendor-201392fa.js"])),U=i.lazy(()=>f(()=>import("./index-3835572a.js"),["assets/index-3835572a.js","assets/vendor-201392fa.js"])),q=i.lazy(()=>f(()=>import("./index-5478acf8.js"),["assets/index-5478acf8.js","assets/vendor-201392fa.js"])),G=i.lazy(()=>f(()=>import("./index-238c3c72.js"),["assets/index-238c3c72.js","assets/vendor-201392fa.js"])),H=()=>e.jsx(e.Fragment,{children:e.jsx(i.Suspense,{fallback:e.jsx("h1",{children:"Cargando..."}),children:e.jsx(v,{children:e.jsx(C,{children:e.jsxs(b,{children:[e.jsx(l,{path:"/",element:e.jsx(D,{})}),e.jsx(l,{path:"/Service",element:e.jsx(V,{})}),e.jsx(l,{path:"/Team",element:e.jsx(U,{})}),e.jsx(l,{path:"/Contact",element:e.jsx(q,{})}),e.jsx(l,{path:"/AboutUs",element:e.jsx(G,{})}),e.jsx(l,{path:"*",element:e.jsx(R,{})})]})})})})});const $=y`
:root {
--dorado :#ffaa20;
--naranja: #ff8528;
--gris: #3B3B3B;
--negro: #000000;
--plata1:#f9f9f9;
--plata2: #eaecf0;
--plata3:#d1d6da;
--plata4: #d7dde3;
--rojo: #ff2e34;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

  html {
  font-size: 62.5%;
  //font-size:calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))
  font-family: Poppins, system-ui;
  }

html, body {
height:100%;
background-color:var(--plata1)
}

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

`;_.createRoot(document.getElementById("root")).render(e.jsxs(E.StrictMode,{children:[e.jsx($,{})," ",e.jsx(H,{})]}));
