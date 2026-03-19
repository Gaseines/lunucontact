import {
  Instagram,
  MessageCircle,
  BriefcaseBusiness,
  Mail,
  MapPinned,
  Image as ImageIcon,
} from "lucide-react";

export const links = [
  {
    title: "WhatsApp",
    description: "Solicite atendimento e converse sobre o seu projeto.",
    url: "https://wa.me/5500000000000",
    icon: MessageCircle,
    featured: true,
    tag: "Contato Principal",
  },
  {
    title: "Instagram",
    description: "Projetos, bastidores e inspirações do escritório.",
    url: "https://instagram.com/",
    icon: Instagram,
    tag: "Social",
  },
  {
    title: "Portfólio",
    description: "Conheça os projetos e a essência criativa da marca.",
    url: "https://example.com",
    icon: BriefcaseBusiness,
    tag: "Projetos",
  },
  {
    title: "Pinterest",
    description: "Referências, materiais e composições visuais.",
    url: "https://pinterest.com/",
    icon: ImageIcon,
    tag: "Inspiração",
  },
  {
    title: "E-Mail",
    description: "Contato profissional para propostas e parcerias.",
    url: "mailto:contato@exemplo.com",
    icon: Mail,
    tag: "Profissional",
  },
  
];