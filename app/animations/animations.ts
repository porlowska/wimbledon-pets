// fade in
export const fadeIn = {
  initial: { opacity: 0.25 },
  animate: { opacity: 1 },
  transition: { duration: 2, ease: "easeInOut" },
};
// zoom-in
export const zoomIn = {
  scale: 1.25,
};

// slide-in from the bottom
export const slideInBtm = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 2, ease: "anticipate" },
};
