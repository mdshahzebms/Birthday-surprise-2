
document.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id);

  const intro = $("intro");
  const lock = $("lockScreen");
  const birthday = $("birthdayScreen");
  const gift = $("giftWrap");
  const openGift = $("openGift");
  const audio = $("birthdayAudio");
  const musicBtn = $("musicBtn");

  // GIFT OPENING
  function showLock() {
    if (!intro || !lock) return;

    gift?.classList.add("opening");

    setTimeout(() => {
      intro.classList.add("hidden");
      lock.classList.remove("hidden");
    }, 650);
  }

  gift?.addEventListener("click", showLock);
  openGift?.addEventListener("click", showLock);

  gift?.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showLock();
    }
  });

  // PASSWORD 1911
  let code = "";
  const dots = $("dots")
    ? [...$("dots").children]
    : [];

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("filled", i < code.length);
    });
  }

  function unlock() {
    if (code === "1911") {
      lock.classList.add("hidden");
      birthday.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      startPetals();
    } else {
      $("errorMsg").textContent =
        "Code sahi nahi hai. Dobara koshish kijiye.";
      code = "";
      updateDots();
    }
  }

  $("keypad")?.addEventListener("click", e => {
    const btn = e.target.closest("button");
    if (!btn) return;

    const key = btn.dataset.key;

    if (key === "clear") {
      code = code.slice(0, -1);
    } else if (key === "enter") {
      unlock();
      return;
    } else if (/^\d$/.test(key || "") && code.length < 4) {
      code += key;

      if (code.length === 4) {
        updateDots();
        setTimeout(unlock, 250);
        return;
      }
    }

    $("errorMsg").textContent = "";
    updateDots();
  });

  // MUSIC
  musicBtn?.addEventListener("click", async () => {
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch {
      musicBtn.innerHTML = "Gaana file check kijiye";
    }
  });

  audio?.addEventListener("play", () => {
    musicBtn.innerHTML = "♫ <span>Gaana chal raha hai</span>";
  });

  audio?.addEventListener("pause", () => {
    musicBtn.innerHTML = "♫ <span>Gaana chalao</span>";
  });

  // REASONS
  const reasons = [
    "Aapki muskurahat din ko roshan kar deti hai.",
    "Aapki baaton mein ek alag hi sukoon hai.",
    "Aap chhoti-chhoti cheezon ko khaas banati hain.",
    "Aapka dil bohot khoobsurat hai.",
    "Aapki hansi sun kar khushi hoti hai.",
    "Aap apne andaaz mein sabse alag hain.",
    "Aapki maujoodgi se mahaul achha lagta hai.",
    "Aapke khwaab bohot pyaare hain.",
    "Aapki saadgi dil ko chhoo jaati hai.",
    "Aap bas aap hain, aur wahi kaafi hai.",
    "Aapki har chhoti khushi maayne rakhti hai.",
    "Aapki baatein yaad reh jaati hain.",
    "Aapke saath waqt achha guzarta hai.",
    "Aapki aankhon mein umeed chamakti hai.",
    "Aapka hona ek pyaari si baat hai.",
    "Aapki fikr karna achha lagta hai.",
    "Aapki awaaz mein apnapan hai.",
    "Aap har din ko yaadgaar bana sakti hain.",
    "Aapki khushi bohot maayne rakhti hai.",
    "Aap bohot khaas hain, bas isliye."
  ];

  let reasonIndex = 0;

  $("nextReason")?.addEventListener("click", () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;

    const text = $("reasonText");
    const count = $("reasonCount");

    text.animate(
      [
        { opacity: 0, transform: "translateY(10px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 450, easing: "ease-out" }
    );

    text.textContent = reasons[reasonIndex];

    count.textContent =
      String(reasonIndex + 1).padStart(2, "0") +
      " / " + reasons.length;
  });

  // FINAL SURPRISE
  $("finalBtn")?.addEventListener("click", () => {
    $("finalMessage")?.classList.remove("hidden");
    $("finalBtn").textContent = "Surprise mil gaya ♡";

    createConfetti(45);
  });

  // FALLING FLOWERS
  let petalsStarted = false;

  function startPetals() {
    if (petalsStarted) return;
    petalsStarted = true;

    if (window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches) return;

    setInterval(() => {
      if (birthday.classList.contains("hidden")) return;

      const layer = $("petals");
      if (!layer) return;

      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = ["✿", "❀", "♡", "🌸"][
        Math.floor(Math.random() * 4)
      ];

      petal.style.left = Math.random() * 100 + "%";
      petal.style.fontSize = 12 + Math.random() * 13 + "px";
      petal.style.animationDuration = 7 + Math.random() * 6 + "s";

      layer.appendChild(petal);

      setTimeout(() => petal.remove(), 14000);
    }, 650);
  }

  // CONFETTI
  function createConfetti(amount) {
    const symbols = ["❤️", "💕", "✨", "🌸", "💗", "🌹"];

    for (let i = 0; i < amount; i++) {
      const piece = document.createElement("span");

      piece.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      piece.style.position = "fixed";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-35px";
      piece.style.fontSize = 14 + Math.random() * 18 + "px";
      piece.style.pointerEvents = "none";
      piece.style.zIndex = "9999";
      piece.style.animation =
        `fall ${3 + Math.random() * 3}s linear forwards`;

      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 6500);
    }
  }

  // SMOOTH SCROLL
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

});
                          


/* ROSE GARDEN - FIXED ACTIVATION */

function activateRoseGarden() {
  const garden = document.getElementById("roseGarden");
  if (!garden) return;

  const rect = garden.getBoundingClientRect();

  if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
    garden.classList.add("garden-active");
  }
}

window.addEventListener("scroll", activateRoseGarden);
window.addEventListener("resize", activateRoseGarden);

setInterval(activateRoseGarden, 500);


/* BUSHRA'S GARDEN FLOWERS */
document.addEventListener("DOMContentLoaded", () => {
  const garden = document.getElementById("roseGarden");
  const flowerArea = document.getElementById("gardenFlowers");

  if (!garden || !flowerArea) return;

  const colors = [
    "#f05b91", "#ff8eae", "#d94d78",
    "#ffb6c9", "#e85d9a", "#c94d70"
  ];

  const positions = [
    [5, 0.75], [12, 0.9], [19, 0.65],
    [26, 1], [33, 0.8], [40, 1.1],
    [47, 0.7], [54, 1], [61, 0.8],
    [68, 1.1], [75, 0.75], [82, 1],
    [89, 0.8], [95, 0.7], [15, 0.55],
    [37, 0.6], [58, 0.6], [79, 0.55]
  ];

  positions.forEach((item, index) => {
    const flower = document.createElement("div");
    flower.className = "garden-rose";

    flower.style.left = item[0] + "%";
    flower.style.setProperty("--plant-size", item[1]);
    flower.style.setProperty(
      "--petal-color",
      colors[index % colors.length]
    );
    flower.style.setProperty(
      "--delay",
      (index * 0.12) + "s"
    );

    flower.innerHTML = `
      <div class="garden-stem"></div>
      <div class="garden-leaf left"></div>
      <div class="garden-leaf right"></div>
      <div class="garden-bloom">
        <i></i><i></i><i></i>
        <i></i><i></i><i></i>
      </div>
    `;

    flowerArea.appendChild(flower);
  });

  garden.classList.add("garden-active");
});

