document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll(".livre");
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});
<script>
function jouerVideo(chemin) {
  const lecteur = document.getElementById('lecteurVideo');
  const video = document.getElementById('videoLocal');
  video.src = chemin;
  lecteur.style.display = "flex";
  video.play();
}

function fermerVideo() {
  const lecteur = document.getElementById('lecteurVideo');
  const video = document.getElementById('videoLocal');
  video.pause();
  video.currentTime = 0; // remet au début
  lecteur.style.display = "none";
}
</script>
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');  // Affiche ou masque le menu
});

