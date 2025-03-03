import NextJS from "../components/icons/NextJS.astro";
import NestJS from "../components/icons/NestJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import TypeORM from "@/components/icons/TypeORM.astro";
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
    }
  };
  export const PROJECTS = [
    {
      title: "Active - Gestion de Centros Deportivos",
      description:
        "Plataforma para gestionar centros deportivos y reservar canchas.",
      link: "https://frontend-actives-projects-11ce1f6a.vercel.app/",
      github: "https://github.com/Active04-star/Frontend",
      image: "/svgl1.webp",
      tags: [TAGS.NEXT, TAGS.TAILWIND],
      id:"Active",
      fullDescription:"Plataforma desarrollada desde cero para conectar centros deportivos con jugadores. Permite a los propietarios de instalaciones deportivas publicar y gestionar sus canchas, atrayendo clientes y optimizando sus reservas. Por otro lado, los usuarios pueden explorar centros deportivos, verificar disponibilidad y alquilar canchas de forma rápida y sencilla. La aplicación está diseñada para mejorar la experiencia de ambos públicos, ofreciendo una interfaz intuitiva y un proceso de reserva eficiente.",
      images:[],
      dinamicPage:"http://localhost:4321/Active"
    },

    {
      title: "Active API",
      description:
        "API RESTful que permite gestionar usuarios, centros deportivos y reservas de canchas.",
      link: "https://backend-rl4f.onrender.com",
      github: "https://github.com/Active04-star/Backend",
      image: "/svgl2.webp",
      tags: [TAGS.NEXT, TAGS.TYPEORM],
    }
  ];
  