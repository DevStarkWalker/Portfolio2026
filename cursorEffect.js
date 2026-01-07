document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.getElementById("cursor");

  let mouseX = 0;
  let mouseY = 0;
  let currentX = 0;
  let currentY = 0;

  const speed = 0.15; // slightly snappier

  const animate = () => {
    currentX += (mouseX - currentX) * speed;
    currentY += (mouseY - currentY) * speed;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
  };

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  animate();
});
