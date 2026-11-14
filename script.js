
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
                          

/* OPEN ROSES WHEN GARDEN ENTERS VIEW */

const roseGarden = document.querySelector(".rose-world");

if (roseGarden && "IntersectionObserver" in window) {
  const gardenObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        roseGarden.classList.add("garden-active");
        gardenObserver.unobserve(roseGarden);
      }
    });
  }, {
    threshold: 0.45
  });

  gardenObserver.observe(roseGarden);
}
