export const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1 },
};

// export const slideInFromRight = {
//   initial: () => {
//     return window.innerWidth < 640
//       ? { opacity: 0 } // 🔽 En pantallas pequeñas solo usa fadeIn
//       : { opacity: 0, x: 50 }; // 🔼 En pantallas grandes usa slide
//   },
//   animate: { opacity: 1, x: 0 },
//   transition: { duration: 0.8 },
// };

export const slideInFromBottom = {
  initial: { opacity: 0, y: 50 }, // 🔽 Ahora siempre inicia desde abajo, incluso en móviles
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
};
