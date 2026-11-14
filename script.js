
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);

  const intro = $("intro");
  const lockScreen = $("lockScreen");
  const birthdayScreen = $("birthdayScreen");
  const giftWrap = $("giftWrap");
  const openGift = $("openGift");

  // Gift se password screen
  function showLock() {
    if (!intro || !lockScreen) return;
    intro.classList.add("hidden");
    lockScreen.classList.remove("hidden");
  }

  giftWrap?.addEventListener("click", showLock);
  openGift?.addEventListener("click", showLock);

  giftWrap?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      showLock();
    }
  });

  // Password: 1911
  let entered = "";
  const dots = $("dots")
    ? [...$("dots").children]
    : [];

  function refreshDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("filled", i < entered.length);
    });
  }

  function unlock() {
    if (entered === "1911") {
      lockScreen?.classList.add("hidden");
      birthdayScreen?.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      startPetals();
    } else {
      if ($("errorMsg")) {
        $("errorMsg").textContent =
          "Code sahi nahi hai. Dobara koshish kijiye.";
      }
      entered = "";
      refreshDots();
    }
  }

  $("keypad")?.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (!button) return;

    const key = button.dataset.key;

    if (key === "clear") {
      entered = entered.slice(0, -1);
    } else if (key === "enter") {
      unlock();
      return;
    } else if (/^\d$/.test(key || "") && entered.length < 4) {
      entered += key;

      if (entered.length === 4) {
        refreshDots();
        setTimeout(unlock, 200);
        return;
      }
    }

    refreshDots();
    if ($("errorMsg")) $("errorMsg").textContent = "";
  });

  // Music player
  const audio = $("birthdayAudio");
  const musicBtn = $("musicBtn");

  musicBtn?.addEventListener("click", async () => {
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      musicBtn.textContent = "Audio file check karein";
    }
  });

  audio?.addEventListener("play", () => {
    if (musicBtn) musicBtn.innerHTML =
      "♫ <span>Gaana chal raha hai</span>";
  });

  audio?.addEventListener("pause", () => {
    if (musicBtn) musicBtn.innerHTML =
      "♫ <span>Gaana chalao</span>";
  });

  // 20 reasons
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

    if ($("reasonCount")) {
      $("reasonCount").textContent =
        String(reasonIndex + 1).padStart(2, "0") +
        " / " + reasons.length;
    }

    if ($("reasonText")) {
      $("reasonText").textContent = reasons[reasonIndex];
    }
  });

  // Final surprise
  $("finalBtn")?.addEventListener("click", () => {
    $("finalMessage")?.classList.remove("hidden");

    if ($("finalBtn")) {
      $("finalBtn").textContent = "Surprise mil gaya ♡";
    }

    createConfetti(35);
  });

  // Falling petals
  let petalsStarted = false;

  function startPetals() {
    if (petalsStarted) return;
    petalsStarted = true;

    if (window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches) return;

    setInterval(() => {
      if (!birthdayScreen ||
          birthdayScreen.classList.contains("hidden")) return;

      const layer = $("petals");
      if (!layer) return;

      const petal = document.createElement("span");
      petal.className = "petal";
      petal.textContent = ["✿", "❀", "♡"][
        Math.floor(Math.random() * 3)
      ];

      petal.style.left = Math.random() * 100 + "%";
      petal.style.fontSize = 10 + Math.random() * 12 + "px";
      petal.style.animationDuration = 7 + Math.random() * 7 + "s";

      layer.appendChild(petal);
      setTimeout(() => petal.remove(), 15000);
    }, 700);
  }

  // Confetti effect
  function createConfetti(amount = 35) {
    const symbols = ["❤️", "💕", "✨", "🌸", "💗", "🎉"];

    for (let i = 0; i < amount; i++) {
      const piece = document.createElement("span");

      piece.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

      piece.style.position = "fixed";
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.top = "-30px";
      piece.style.fontSize = 14 + Math.random() * 18 + "px";
      piece.style.pointerEvents = "none";
      piece.style.zIndex = "9999";
      piece.style.animation =
        `fall ${3 + Math.random() * 3}s linear forwards`;

      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 6500);
    }
  }

  // Smooth navigation
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  console.log("Bushra website ready ❤️");
});
