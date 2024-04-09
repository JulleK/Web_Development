const cursor = document.querySelector("#cursor");

const moveCursor = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.transform = `translate(${x}px, ${y}px)`;
};

document.addEventListener("mousemove", moveCursor);
