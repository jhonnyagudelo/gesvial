import{e as d,s as t,r as o,j as e}from"./vendor-201392fa.js";const g=d`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500%);
  }
`,m=t.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`,p=t.article`
  animation: ${g} 80s linear infinite;
  display: flex;
  transition: transform 0.5s;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;t.figure`
  width: 100%;
`;const u=t.img`
  width: 60%;
  heigth: 30em;
`;t.p`
  font-size: 1.2rem;
  font-style: italic;
`;t.p`
  font-size: 1.1rem;
  font-weight: bold;
`;const f=({content:s})=>{const i=[...s,...s],[r,c]=o.useState(0);o.useEffect(()=>{const n=setInterval(()=>{c(l=>(l+1)%i.length)},5e3);return()=>{clearInterval(n)}},[s]);const a=()=>i.map((n,l)=>typeof n=="object"&&n.type==="image"?e.jsx(u,{src:n.src,alt:n.alt},l):null);return e.jsx(m,{children:e.jsx(p,{style:{transform:`translateX(-${r*100}%)`},children:a()})})},x="/assets/GESVIAL APROBADO4-a105429e.png",h="/assets/team1-4fbcc0c9.jpeg",j="/assets/Banner página Gesvial-746287b1.png",b="/assets/Banner página Gesvial2-dcb61958.png",y="/assets/Banner página Gesvial3-f719e743.png",v="/assets/Banner página Gesvial4-5c729966.png",w="/assets/Banner página Gesvial5-3409fbd1.png",S="/assets/bhl-a2f07ce2.png",z="/assets/cda-8f0f3edc.jpg",I="/assets/cdav-6bef3913.png",T="/assets/rotras-20452bfd.png",C="/assets/t-06ede4b6.jpg",B="/assets/serviagrosas-logo-e635fd4f.png",E="/assets/Logo semillas del Valle-6b983a74.png",R="/assets/logo TDM-7054580d.png",A=d`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,G=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,L=t.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 1rem;
  animation: ${A} 4s ease-in-out;
`,M=t.p`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 1rem;
`,k=t.p`
  font-weight: bold;
  font-size: 2.5rem;
`,P=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,D=t.div`
  width: 10px;
  height: 10px;
  background-color: ${({"data-active":s})=>s?"#000":"#ccc"};
  border-radius: 50%;
  margin: 0 0.5rem;
  cursor: pointer;
`,$=()=>{const[s,i]=o.useState(0),r=[{id:1,text:"Excelente trabajo en el diseño web",author:"Juan Pérez"},{id:2,text:"Me encanta la funcionalidad del sitio",author:"María Gómez"},{id:3,text:"Felicidades por el increíble diseño",author:"Luis Hernández"},{id:4,text:"Muy buen uso de colores y tipografías",author:"Ana Rodríguez"},{id:5,text:"El sitio es muy intuitivo y fácil de navegar",author:"Pedro Martínez"},{id:6,text:"Impresionante atención al detalle en el diseño",author:"Laura Torres"},{id:7,text:"Me gusta cómo se destaca la usabilidad del sitio",author:"Roberto Sánchez"},{id:8,text:"El diseño responsive funciona perfectamente",author:"Isabel Mendoza"},{id:9,text:"Gran trabajo en la arquitectura de la información",author:"Carlos López"},{id:10,text:"Los efectos de animación son impresionantes",author:"Sofía Ramírez"}];o.useEffect(()=>{const a=setInterval(()=>{i(n=>(n+1)%r.length)},5e3);return()=>clearInterval(a)},[r.length]);const c=a=>{i(a)};return e.jsxs(G,{children:[r.map((a,n)=>e.jsxs(L,{style:{display:n===s?"block":"none"},children:[e.jsx(M,{children:a.text}),e.jsx(k,{children:a.author})]},a.id)),e.jsx(P,{children:r.map((a,n)=>e.jsx(D,{"data-active":n===s?"true":"false",onClick:()=>c(n)},n))})]})},F=t.section`
  display: flex;
  justify-content: center;
`,H=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  padding: 5em;
`,O=t.div`
  display: flex;
  justify-content: center;
`,X=t.img`
  /* width: 30em; */
  /* heigth: 10em; */
`,q=t.h1`
  background-color: var(--negro);
  color: white;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  font-size: 4.5em;
  padding: 0 0.8em;
  margin: 0.5em;
`,N=t.p`
  text-align: center;
  font-size: 1.8em;
`,V=t.h1`
  font-size: 5.5em;
  display: flex;
  justify-content: center;
`,J=t.section`
  background: linear-gradient(
    90deg,
    rgba(210, 210, 226, 1) 20%,
    rgba(180, 187, 212, 1) 100%
  );
`,_=t.figure`
  padding: 2em 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
  align-items: center;
  width: calc(100% - 10em);
`,Q=()=>{const s=[j,b,y,v,w];return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx("figure",{children:e.jsx("img",{src:x,alt:"Logo-home",width:600})})}),e.jsx(f,{content:s.map(i=>({type:"image",src:i}))}),e.jsxs(H,{children:[e.jsx("figure",{children:e.jsx(X,{src:h,alt:"equipo",width:500})}),e.jsx(O,{children:e.jsx(q,{children:"Seguridad vial"})}),e.jsx(N,{children:"Se refiere a las medidas adoptadas para reducir en la máxima expresión posible el riesgo de lesiones y muertes causadas por el tránsito. Por tal motivo, a través de la colaboración y coordinación intersectorial, puede crearse un entorno más seguro, accesible, y sostenible para los sistemas de transporte, usuarios y peatones."})]}),e.jsxs(J,{children:[e.jsx(V,{children:"Ellos confiaron en nosotros"}),e.jsxs("article",{children:[e.jsx($,{}),e.jsxs(_,{children:[e.jsx("img",{src:E,alt:"",width:200}),e.jsx("img",{src:R,alt:"",width:200}),e.jsx("img",{src:C,alt:"",width:200}),e.jsx("img",{src:I,alt:"",width:200}),e.jsx("img",{src:S,alt:"",width:200}),e.jsx("img",{src:z,alt:"",width:200}),e.jsx("img",{src:B,alt:"",width:500}),e.jsx("img",{src:T,alt:"",width:500})]})]})]})]})};export{F as ContentLogo,H as ContentRoadSafety,O as ContentTitle,_ as FigureTrust,X as ImgRoadSatefy,N as ParragraphRoadSatefy,J as SectionTrust,q as TitleRoadSafety,V as TitleTrust,Q as default};
