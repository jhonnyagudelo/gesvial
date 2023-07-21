import{e as d,s as t,r,j as e}from"./vendor-201392fa.js";const g=d`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500%);
  }
`,u=t.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
`,h=t.article`
  animation: ${g} 80s linear infinite;
  display: flex;
  transition: transform 0.5s;
  justify-content: flex-start;
  flex-wrap: nowrap;
`;t.figure`
  width: 100%;
`;const p=t.img`
  width: 60%;
  heigth: 30em;
`;t.p`
  font-size: 1.2rem;
  font-style: italic;
`;t.p`
  font-size: 1.1rem;
  font-weight: bold;
`;const m=({content:s})=>{const i=[...s,...s],[o,l]=r.useState(0);r.useEffect(()=>{const n=setInterval(()=>{l(c=>(c+1)%i.length)},5e3);return()=>{clearInterval(n)}},[s]);const a=()=>i.map((n,c)=>typeof n=="object"&&n.type==="image"?e.jsx(p,{src:n.src,alt:n.alt},c):null);return e.jsx(u,{children:e.jsx(h,{style:{transform:`translateX(-${o*100}%)`},children:a()})})},f="https://jhonnyagudelo.github.io/gesvial/assets/GESVIAL APROBADO4-a105429e.png",x="https://jhonnyagudelo.github.io/gesvial/assets/team1-4fbcc0c9.jpeg",j="https://jhonnyagudelo.github.io/gesvial/assets/Banner página Gesvial-746287b1.png",b="https://jhonnyagudelo.github.io/gesvial/assets/Banner página Gesvial2-dcb61958.png",y="https://jhonnyagudelo.github.io/gesvial/assets/Banner página Gesvial3-f719e743.png",v="https://jhonnyagudelo.github.io/gesvial/assets/Banner página Gesvial4-5c729966.png",w="https://jhonnyagudelo.github.io/gesvial/assets/Banner página Gesvial5-3409fbd1.png",S="https://jhonnyagudelo.github.io/gesvial/assets/bhl-a2f07ce2.png",z="https://jhonnyagudelo.github.io/gesvial/assets/cda-8f0f3edc.jpg",I="https://jhonnyagudelo.github.io/gesvial/assets/cdav-6bef3913.png",T="https://jhonnyagudelo.github.io/gesvial/assets/rotras-20452bfd.png",C="https://jhonnyagudelo.github.io/gesvial/assets/t-06ede4b6.jpg",B="https://jhonnyagudelo.github.io/gesvial/assets/serviagrosas-logo-e635fd4f.png",E="https://jhonnyagudelo.github.io/gesvial/assets/Logo semillas del Valle-6b983a74.png",R="https://jhonnyagudelo.github.io/gesvial/assets/logo TDM-7054580d.png",A=d`
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
`,$=()=>{const[s,i]=r.useState(0),o=[{id:1,text:"Excelente trabajo en el diseño web",author:"Juan Pérez"},{id:2,text:"Me encanta la funcionalidad del sitio",author:"María Gómez"},{id:3,text:"Felicidades por el increíble diseño",author:"Luis Hernández"},{id:4,text:"Muy buen uso de colores y tipografías",author:"Ana Rodríguez"},{id:5,text:"El sitio es muy intuitivo y fácil de navegar",author:"Pedro Martínez"},{id:6,text:"Impresionante atención al detalle en el diseño",author:"Laura Torres"},{id:7,text:"Me gusta cómo se destaca la usabilidad del sitio",author:"Roberto Sánchez"},{id:8,text:"El diseño responsive funciona perfectamente",author:"Isabel Mendoza"},{id:9,text:"Gran trabajo en la arquitectura de la información",author:"Carlos López"},{id:10,text:"Los efectos de animación son impresionantes",author:"Sofía Ramírez"}];r.useEffect(()=>{const a=setInterval(()=>{i(n=>(n+1)%o.length)},5e3);return()=>clearInterval(a)},[o.length]);const l=a=>{i(a)};return e.jsxs(G,{children:[o.map((a,n)=>e.jsxs(L,{style:{display:n===s?"block":"none"},children:[e.jsx(M,{children:a.text}),e.jsx(k,{children:a.author})]},a.id)),e.jsx(P,{children:o.map((a,n)=>e.jsx(D,{"data-active":n===s?"true":"false",onClick:()=>l(n)},n))})]})},F=t.section`
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
`,Q=()=>{const s=[j,b,y,v,w];return e.jsxs(e.Fragment,{children:[e.jsx(F,{children:e.jsx("figure",{children:e.jsx("img",{src:f,alt:"Logo-home",width:600})})}),e.jsx(m,{content:s.map(i=>({type:"image",src:i}))}),e.jsxs(H,{children:[e.jsx("figure",{children:e.jsx(X,{src:x,alt:"equipo",width:500})}),e.jsx(O,{children:e.jsx(q,{children:"Seguridad vial"})}),e.jsx(N,{children:"Se refiere a las medidas adoptadas para reducir en la máxima expresión posible el riesgo de lesiones y muertes causadas por el tránsito. Por tal motivo, a través de la colaboración y coordinación intersectorial, puede crearse un entorno más seguro, accesible, y sostenible para los sistemas de transporte, usuarios y peatones."})]}),e.jsxs(J,{children:[e.jsx(V,{children:"Ellos confiaron en nosotros"}),e.jsxs("article",{children:[e.jsx($,{}),e.jsxs(_,{children:[e.jsx("img",{src:E,alt:"",width:200}),e.jsx("img",{src:R,alt:"",width:200}),e.jsx("img",{src:C,alt:"",width:200}),e.jsx("img",{src:I,alt:"",width:200}),e.jsx("img",{src:S,alt:"",width:200}),e.jsx("img",{src:z,alt:"",width:200}),e.jsx("img",{src:B,alt:"",width:500}),e.jsx("img",{src:T,alt:"",width:500})]})]})]})]})};export{F as ContentLogo,H as ContentRoadSafety,O as ContentTitle,_ as FigureTrust,X as ImgRoadSatefy,N as ParragraphRoadSatefy,J as SectionTrust,q as TitleRoadSafety,V as TitleTrust,Q as default};
