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
<script>
document.addEventListener("DOMContentLoaded", function () {

  const checkboxes = document.querySelectorAll('[data-prix]');
  const totalDisplay = document.getElementById('prix-total');
  const livraisonDisplay = document.getElementById('livraison-info');
  const totalInput = document.getElementById('prix-total-input');
  const payerBtn = document.getElementById('payer-btn');

  let totalLivres = 0;
  let frais = 0;
  let livres = [];

  function calculerTotal() {

    totalLivres = 0;
    livres = [];

    checkboxes.forEach(c => {
      if (c.checked) {
        totalLivres += parseFloat(c.dataset.prix);
        livres.push(c.parentElement.innerText.trim());
      }
    });

    // 🚚 frais de port
    if (totalLivres === 0) {
      frais = 0;
    } else if (totalLivres < 35) {
      frais = 4.90;
    } else {
      frais = 0;
    }

    let totalFinal = totalLivres + frais;

    // affichage
    totalDisplay.textContent = `Total livres : ${totalLivres.toFixed(2)} €`;
    livraisonDisplay.textContent = `Frais de livraison : ${frais.toFixed(2)} €`;

    totalInput.value = totalFinal.toFixed(2) + " €";

    // bouton paiement visible uniquement si panier
    if (payerBtn) {
      payerBtn.style.display = totalLivres > 0 ? "inline-block" : "none";
    }
  }

  checkboxes.forEach(c => {
    c.addEventListener('change', calculerTotal);
  });

});
</script>
