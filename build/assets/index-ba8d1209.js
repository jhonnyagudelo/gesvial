import{s as t,j as e}from"./vendor-201392fa.js";const a=t.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
`;t.h2`
  margin-bottom: 20px;
`;const s=t.div`
  width: 45em;
  position: relative;
  margin: 1em;
`,r=t.img`
  width: 100%;
  height: auto;
`,c=t.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px;
  text-align: center;
  position: absolute;
  bottom: 3px;
  right: 0;
  width: 100%;
`,n="/assets/recreacion-83f18a6f.jpeg",l=()=>{const o=[{id:1,photoUrl:{recreacion:n},title:"Asistencia Tecnica y representacion legal",comment:"Asistencia técnica y representación legal en  derivados de accidentes de tránsito"},{id:2,photoUrl:{recreacion:n},title:"Reconstrucción 3D",comment:"Investigación y reconstrucción técnica en 3D de siniestros viales, utilizando tecnología TRIMBLE FORENSICS REVEAL"},{id:3,photoUrl:{recreacion:n},title:"Planes de seguridad vial",comment:"Diseño, implementación y ejecución de planes locales y estratégicos en seguridad vial en el sector público y privado"},{id:4,photoUrl:{recreacion:n},title:"Capacitaciones",comment:"Campañas, capacitaciones y seminarios en seguridad vial para el cumplimiento de la ley en empresas"},{id:5,photoUrl:{recreacion:n},title:"Acompañamiento vial",comment:"Acompañamiento vial a cargas, extradimensionadas, peligrosas,extrapesadas entre otras"}];return e.jsx(a,{children:o.map(i=>e.jsxs(s,{children:[e.jsx(r,{src:i.photoUrl.recreacion,alt:`Foto ${i.id}`,width:600}),e.jsxs(c,{children:[e.jsx("h2",{children:i.title}),e.jsx("spam",{children:i.comment})]})]},i.id))})},m=()=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Nuestros servicios"}),e.jsx("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum reprehenderit eligendi, hic eius dolor numquam itaque vitae molestias delectus cum qui et nemo est repellat distinctio maxime esse aut inventore."}),e.jsx(l,{})]}),p=t.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`,h=t.div`
  width: 200px;
  margin: 10px;
`,g=t.img`
  width: 100%;
  height: auto;
`,u=t.div`
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px;
  text-align: center;
`;export{u as Comment,p as Container,g as Photo,h as PhotoCard,m as default};
