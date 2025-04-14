const container = document.querySelector(".container");
const scrollLine = document.querySelector(".scroll");

container?.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollLeft += e.deltaY; // Défilement horizontal

  // Calcul de la hauteur maximale de la barre (hauteur fenêtre - marges)
  const maxHeight = window.innerHeight;
  const maxScroll = container.scrollWidth - container.clientWidth; // Défilement max
  const scrollPercentage = container.scrollLeft / maxScroll; // Pourcentage de défilement
  const newHeight = scrollPercentage * maxHeight; // Hauteur proportionnelle

  scrollLine.style.height = `${newHeight}px`; // Applique la hauteur
  console.dir(container);
  
});

