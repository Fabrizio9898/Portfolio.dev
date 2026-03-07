import NextJS from "../components/icons/NextJS.astro";
import NestJS from "../components/icons/NestJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import TypeORM from "@/components/icons/TypeORM.astro";
import React from "@/components/icons/React.astro";
import Typescript from "@/components/icons/Typescript.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
import SQL from "@/components/icons/SQL.astro";
import HTML from "@/components/icons/HTML.astro";
import CSS from "@/components/icons/CSS.astro";
import Node from "@/components/icons/Node.astro";
const TAGS = {
    NEST: { name: "Nest.js", class: "bg-black text-white", icon: NestJS },
    HTML: { name: "HTML", class: "bg-[#E34F26] text-white", icon: HTML },
    CSS: { name: "CSS", class: "bg-[#264DE4] text-white", icon: CSS },
    NEXT: {
      name: "Next.js",
      class: "bg-black text-white",
      icon: NextJS,
    },
    TAILWIND: {
      name: "Tailwind CSS",
      class: "bg-[#003159] text-white",
      icon: Tailwind,
    },
    TYPEORM:{
      name:"TypeORM",
      class:"bg-black text-white",
      icon:TypeORM
    },
    NODE:{name:"Node.js",class:"bg-[#339933] text-white",icon: Node},
    REACT:{name:"React",class:"bg-[#61DAFB] text-black",icon: React},
    JAVASCRIPT:{name:"JavaScript",class:"bg-[#F7DF1E] text-black",icon: JavaScript},
    TYPESCRIPT:{name:"TypeScript",class:"bg-[#3178C6] text-white",icon: Typescript},
    SQL:{name:"SQL",class:"bg-[#4479A1] text-white",icon: SQL},

  };
  export const PROJECTS = [
    {
    title: "Wakemap - Alarma GPS",
    description:
      "Aplicación móvil que te despierta antes de llegar a tu destino. Ideal para transporte público.",
    download: "https://play.google.com/store/apps/details?id=com.fabrizioandrade.alarmaUbi", 
    image: "/images/wakemap.png", 
    tags: [TAGS.REACT, TAGS.TYPESCRIPT, TAGS.TAILWIND], 
    id: "Wakemap",
    data: 1,
  },
  {
    title: "SaludConnect - Telemedicina Integral",
    description:
      "Ecosistema de salud digital con videollamadas, gestión de citas y Apps para pacientes y doctores.",
    // Link a la landing page o demo si tienes
    link: "https://telemedicina-demo.vercel.app/", 
    image: "/images/panel.jpg", // Asegúrate de tener esta imagen
    tags: [TAGS.NODE,TAGS.SQL, TAGS.REACT, TAGS.TYPESCRIPT,TAGS.NEST, TAGS.TAILWIND],
    id: "Telemedicina",
    data: 2,
  },
    {
  title: "Send it Later - WhatsApp Message Scheduler",
      description:
        "Extension de navegador para programar mensajes en WhatsApp Web.",
      download: "https://chromewebstore.google.com/detail/fahdfllbfljkfjjnoeocdbdmohebffbl?utm_source=item-share-cb",
      github: "https://github.com/Fabrizio9898/whatsapp-schedule-messages-extension",
image: 
      "/images/captura1.png",
      tags: [TAGS.REACT, TAGS.JAVASCRIPT,TAGS.CSS, TAGS.HTML],
      id:"Send it Later",
      data:3,
    },
    {
      title: "Active - Gestion de Centros Deportivos",
      description:
        "Plataforma para gestionar centros deportivos y reservar canchas.",
      link: "https://frontend-actives-projects-11ce1f6a.vercel.app/",
      github: "https://github.com/Active04-star/Frontend",
      image: "/svgl1.webp",
      tags: [TAGS.NODE,TAGS.SQL, TAGS.REACT, TAGS.TYPESCRIPT,TAGS.NEST, TAGS.TAILWIND],
      id:"Active",
      data:4,
      fullDescription:"Plataforma desarrollada desde cero para conectar centros deportivos con jugadores. Permite a los propietarios de instalaciones deportivas publicar y gestionar sus canchas, atrayendo clientes y optimizando sus reservas. Por otro lado, los usuarios pueden explorar centros deportivos, verificar disponibilidad y alquilar canchas de forma rápida y sencilla. La aplicación está diseñada para mejorar la experiencia de ambos públicos, ofreciendo una interfaz intuitiva y un proceso de reserva eficiente.",
    },

    {
      title: "Active API",
      description:
        "API RESTful que permite gestionar usuarios, centros deportivos y reservas de canchas.",
      link: "https://backend-rl4f.onrender.com/api",
      github: "https://github.com/Active04-star/Backend",
      image: "/svgl2.webp",
      data:5,
      tags: [TAGS.NEXT, TAGS.TYPEORM],
    }
  ];
  