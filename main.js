// Glitzerspur bei Mausbewegung
let lastTrailTime = 0;
const trailInterval = 30; // ms zwischen Partikeln

document.addEventListener("mousemove", (e) => {
  const currentTime = Date.now();
  if (currentTime - lastTrailTime > trailInterval) {
    createMouseTrail(e.clientX, e.clientY);
    lastTrailTime = currentTime;
  }
});

function createMouseTrail(x, y) {
  const colors = [
    "#667eea",
    "#764ba2",
    "#ffffff",
    "#ffd700",
    "#ff69b4",
    "#00f5ff",
  ];
  const trail = document.createElement("div");
  trail.className = "mouse-trail";

  const color = colors[Math.floor(Math.random() * colors.length)];
  const size = Math.random() * 6 + 3;

  trail.style.left = x - size / 2 + "px";
  trail.style.top = y - size / 2 + "px";
  trail.style.width = size + "px";
  trail.style.height = size + "px";
  trail.style.background = color;
  trail.style.boxShadow = `0 0 ${size * 2}px ${color}`;

  document.body.appendChild(trail);
  setTimeout(() => trail.remove(), 800);
}

function createClickSparkles(e) {
  const colors = ["#667eea", "#764ba2", "#ffffff", "#ffd700", "#ff69b4"];

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";

    const color = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.background = color;
    sparkle.style.boxShadow = `0 0 10px ${color}`;

    const size = Math.random() * 8 + 4;
    sparkle.style.width = size + "px";
    sparkle.style.height = size + "px";
    sparkle.style.borderRadius = "50%";

    const tx = (Math.random() - 0.5) * 200;
    const ty = (Math.random() - 0.5) * 200;
    sparkle.style.setProperty("--tx", tx + "px");
    sparkle.style.setProperty("--ty", ty + "px");

    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 1000);
  }
}
