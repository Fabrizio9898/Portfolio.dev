import NextJS from "../components/icons/NextJS.astro";
import NestJS from "../components/icons/NestJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import TypeORM from "@/components/icons/TypeORM.astro";
import React from "@/components/icons/React.astro";
import JavaScript from "@/components/icons/JavaScript.astro";
const TAGS = {
    NEST: { name: "Nest.js", class: "bg-black text-white", icon: NestJS },
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
    REACT:{name:"React",class:"bg-[#61DAFB] text-black",icon: React},
    JAVASCRIPT:{name:"JavaScript",class:"bg-[#F7DF1E] text-black",icon: JavaScript}
  };
  export const PROJECTS = [
    {
  title: "Send it Later - WhatsApp Message Scheduler",
      description:
        "Extension de navegador para programar mensajes en WhatsApp Web.",
      download: "https://frontend-actives-projects-11ce1f6a.vercel.app/",
      github: "https://github.com/Fabrizio9898/whatsapp-schedule-messages-extension",
image: [
      "/images/captura1.webp", // (Ruta a tu imagen 1)
      "/images/captura2.webp", // (Ruta a tu imagen 2)
      "/images/captura3.webp", // (Ruta a tu imagen 3)
      "/images/captura4.webp", // (Ruta a tu imagen 3)
    ],
      tags: [TAGS.REACT, TAGS.JAVASCRIPT,TAGS.TAILWIND],
      id:"Send it Later",
      data:1,
    },
    {
      title: "Active - Gestion de Centros Deportivos",
      description:
        "Plataforma para gestionar centros deportivos y reservar canchas.",
      link: "https://frontend-actives-projects-11ce1f6a.vercel.app/",
      github: "https://github.com/Active04-star/Frontend",
      image: "/svgl1.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
      id:"Active",
      data:2,
      fullDescription:"Plataforma desarrollada desde cero para conectar centros deportivos con jugadores. Permite a los propietarios de instalaciones deportivas publicar y gestionar sus canchas, atrayendo clientes y optimizando sus reservas. Por otro lado, los usuarios pueden explorar centros deportivos, verificar disponibilidad y alquilar canchas de forma rápida y sencilla. La aplicación está diseñada para mejorar la experiencia de ambos públicos, ofreciendo una interfaz intuitiva y un proceso de reserva eficiente.",
    },

    {
      title: "Active API",
      description:
        "API RESTful que permite gestionar usuarios, centros deportivos y reservas de canchas.",
      link: "https://backend-rl4f.onrender.com/api",
      github: "https://github.com/Active04-star/Backend",
      image: "/svgl2.webp",
      data:3,
      tags: [TAGS.NEXT, TAGS.TYPEORM],
    }
  ];
  