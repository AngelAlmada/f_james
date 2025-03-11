// data/obrasData.ts

export interface Obra {
  src: string;
  name: string;
  description: string;
  technique: string;
  year: number;
  available: boolean;
}

export const obrasData = [
  {
    src: "/images/Benito_Juarez.png",
    name: "Benito Juarez",
    description: "Una obra inspirada en la evolución del tiempo a través del arte.",
    technique: "Óleo sobre lienzo",
    year: 2021,
    available: true,
  },
  {
    src: "images/Frida_kahlo.png",
    name: "Frida Kahlo",
    description: "Explora el contraste entre la oscuridad y la luz en la mente humana.",
    technique: "Acrílico",
    year: 2019,
    available: false,
  },
  {
    src: "/images/Cattle_s1.png",
    name: "Cattle Serie 1",
    description: "Los reflejos del alma se manifiestan en los colores vibrantes.",
    technique: "Acuarela",
    year: 2020,
    available: true,
  },
  {
    src: "/images/Nahual_s1.png",
    name: "Nahual Serie 1",
    description: "Una pieza que captura el silencio a través de colores suaves y texturas.",
    technique: "Mixta",
    year: 2022,
    available: false,
  },
  {
    src: "/images/Pedro_Infante.png",
    name: "Pedro Infante",
    description: "Una pieza que captura el silencio a través de colores suaves y texturas.",
    technique: "Mixta",
    year: 2022,
    available: false,
  },
  {
    src: "/images/El_taller_de_la_estacion.png",
    name: "El taller de la Estación",
    description: "Una pieza que captura el silencio a través de colores suaves y texturas.",
    technique: "Mixta",
    year: 2022,
    available: false,
  },
];
