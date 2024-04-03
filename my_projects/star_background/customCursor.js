const cursor = document.querySelector(".rounded");

const moveCursor = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
};

window.addEventListener("mousemove", moveCursor);
