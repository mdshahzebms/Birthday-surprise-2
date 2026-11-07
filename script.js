
document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const on = (id, event, callback) => {
    const el = $(id);
    if (el) el.addEventListener(event, callback);
  };

  const lockScreen = $("lockScreen");
  const birthdayScreen = $("birthdayScreen");
  const passwordInput = $("password");
  const audio = $("birthdayAudio");

  /* PASSWORD UNLOCK */

  function unlock() {
    if (!passwordInput) return;

    if (passwordInput.value.trim() === "1911") {
      if (lockScreen) lockScreen.classList.add("hidden");
      if (birthdayScreen) birthdayScreen.classList.remove("hidden");

      document.body.classList.add("unlocked");

      if (typeof confetti === "function") confetti();
    } else {
      const error = $("error");
      if (error) error.textContent = "Password sahi nahi hai. Dobara try karo ❤️";
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  on("unlockBtn", "click", unlock);

  on("password", "keydown", (e) => {
    if (e.key === "Enter") unlock();
  });

  /* CONFETTI EFFECT */

  function confetti() {
    const emojis = ["💗", "💕", "✨", "🌸", "💖", "🎉"];

    for (let i = 0; i < 35; i++) {
      const item = document.createElement("div");

      item.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      Object.assign(item.style, {
        position: "fixed",
        left: Math.random() * 100 + "vw",
        top: "-30px",
        fontSize: (16 + Math.random() * 18) + "px",
        zIndex: "999",
        pointerEvents: "none",
        transition: "transform 3s ease, opacity 3s ease"
      });

      document.body.appendChild(item);

      requestAnimationFrame(() => {
        item.style.transform = `translateY(${window.innerHeight + 80}px) rotate(${Math.random() * 500}deg)`;
        item.style.opacity = "0";
      });

      setTimeout(() => item.remove(), 3200);
    }
  }

  /* REASONS */

  const reasons = [
    "Tumhari muskurahat mere din ko khoobsurat bana deti hai.",
    "Tumhari baaton mein ek alag hi sukoon hai.",
    "Tum jis tarah chhoti chhoti baaton ka khayal rakhti ho.",
    "Tumhari simplicity mujhe bahut pasand hai.",
    "Tumhari hasi sabse pyari lagti hai.",
    "Tumhare saath waqt ka pata hi nahi chalta.",
    "Tumhari har chhoti khushi mere liye khaas hai.",
    "Tumhara caring nature bahut special hai.",
    "Tumhari baatein yaad reh jaati hain.",
    "Tumhari presence hi din achha bana deti hai.",
    "Tumhare saath har memory khaas ban jaati hai.",
    "Tumhari innocence dil ko chhoo leti hai.",
    "Tum apne andaaz mein sabse alag ho.",
    "Tumhari khushi dekhkar achha lagta hai.",
    "Bas tum, tumhari wajah se hi special ho."
  ];

  let reasonIndex = 0;

  function showReason() {
    const number = $("reasonNumber");
    const text = $("reasonText");

    if (number) number.textContent = `${reasonIndex + 1} / ${reasons.length}`;
    if (text) text.textContent = reasons[reasonIndex];
  }

  on("prevReason", "click", () => {
    reasonIndex = (reasonIndex - 1 + reasons.length) % reasons.length;
    showReason();
  });

  on("nextReason", "click", () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;
    showReason();
  });

  showReason();

  /* LETTER */

  on("letterBtn", "click", () => {
    const paper = $("letterPaper");
    if (!paper) return;

    paper.classList.toggle("hidden");
    const button = $("letterBtn");

    if (button) {
      button.textContent = paper.classList.contains("hidden")
        ? "💌 Letter kholo"
        : "Letter band karo";
    }
  });

  /* ENVELOPE */

  on("envelopeBtn", "click", () => {
    const hint = $("envelopeHint");
    if (hint) {
      hint.textContent =
        "Is chhote se envelope mein tumhare liye dher saari achhi wishes aur pyaar bhari yaadein hain. 💌";
    }
    confetti();
  });

  /* MUSIC PLAYER */

  function updateMusicButtons() {
    if (!audio) return;

    const playing = !audio.paused;

    const musicBtn = $("musicBtn");
    const vinylBtn = $("vinylPlayBtn");
    const vinyl = $("vinylDisc");
    const status = $("songStatus");

    if (musicBtn) {
      musicBtn.textContent = playing ? "♫ Gaana band karo" : "♫ Gaana chalao";
    }

    if (vinylBtn) {
      vinylBtn.textContent = playing ? "Pause Music" : "Play Music";
    }

    if (vinyl) vinyl.classList.toggle("playing", playing);

    if (status) {
      status.textContent = playing
        ? "♪ Abhi gaana chal raha hai"
        : "♪ Gaana ruk gaya hai";
    }
  }

  async function toggleMusic() {
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        const status = $("songStatus");
        if (status) {
          status.textContent = "Gaana nahi chal pa raha. File ka path check karo.";
        }
      }
    } else {
      audio.pause();
    }

    updateMusicButtons();
  }

  on("musicBtn", "click", toggleMusic);
  on("vinylPlayBtn", "click", toggleMusic);

  if (audio) {
    audio.addEventListener("play", updateMusicButtons);
    audio.addEventListener("pause", updateMusicButtons);
    audio.addEventListener("ended", updateMusicButtons);
  }

  updateMusicButtons();

  /* WISH JAR */

  const wishes = [
    "Tumhari zindagi hamesha khushiyon se bhari rahe. 🌸",
    "Tumhare har sapne ko ek khoobsurat manzil mile. ✨",
    "Har subah tumhare chehre par muskurahat laaye. 💗",
    "Tumhe hamesha achhe log aur achhe pal milen.",
    "Tumhari har dua qubool ho. 🤍",
    "Tumhari zindagi mein sukoon aur pyaar bana rahe."
  ];

  on("drawWish", "click", () => {
    const wish = $("jarWish");
    if (wish) {
      wish.textContent = wishes[Math.floor(Math.random() * wishes.length)];
    }
  });

  /* CANDLE */

  on("blowCandle", "click", () => {
    const flame = $("flame");
    const message = $("candleMessage");

    if (flame) flame.textContent = "💨";

    if (message) {
      message.textContent = "Tumhari har achhi wish poori ho. Happy Birthday! 🎂";
    }

    confetti();
  });

  /* STARS */

  document.querySelectorAll(".star-point").forEach((star) => {
    star.addEventListener("click", () => {
      const message = $("starMessage");
      if (message) {
        message.textContent = star.dataset.message || "Tum meri duniya ka ek khoobsurat hissa ho. ✨";
      }
    });
  });

  /* OPEN WHEN */

  document.querySelectorAll(".when-open").forEach((button) => {
    button.addEventListener("click", () => {
      const message = button.dataset.message || "Yaad rakhna, tum bahut special ho. 💗";
      const old = button.querySelector(".when-message");

      if (old) {
        old.remove();
      } else {
        const paragraph = document.createElement("p");
        paragraph.className = "when-message";
        paragraph.textContent = message;
        paragraph.style.marginTop = "12px";
        button.appendChild(paragraph);
      }
    });
  });

  /* POLAROIDS */

  document.querySelectorAll(".polaroid").forEach((photo) => {
    photo.addEventListener("click", () => {
      const message = $("polaroidMessage");
      if (message) {
        message.textContent =
          photo.dataset.caption || "Ek aur pyari si yaad. 📸";
      }
    });
  });

  /* TREASURE HUNT */

  const clues = [
    "Pehla clue: Us jagah ko dekho jahan humari yaadein sambhali hain. 📸",
    "Doosra clue: Ab dil ki baaton wali jagah par jao. 💌",
    "Aakhiri clue: Birthday magic mein tumhara surprise chhupa hai. ✨"
  ];

  let clueIndex = 0;

  function showClue() {
    const clue = $("treasureClue");
    const icon = $("treasureIcon");
    const result = $("treasureResult");

    if (clue) clue.textContent = clues[clueIndex];
    if (icon) icon.textContent = ["🔍", "💗", "🎁"][clueIndex];
    if (result) result.textContent = "";
  }

  on("treasureNext", "click", () => {
    if (clueIndex < clues.length - 1) {
      clueIndex++;
      showClue();
    } else {
      const result = $("treasureResult");
      if (result) result.textContent = "Tumne apna treasure dhoondh liya! 🎉 Tum khud sabse khoobsurat surprise ho. 💗";

      const button = $("treasureNext");
      if (button) button.textContent = "Mil gaya! ❤️";

      confetti();
    }
  });

  showClue();

  /* BIRTHDAY COUNTDOWN */

  let countdownTimer = null;

  function updateCountdown() {
    const dateInput = $("birthdayDate");
    if (!dateInput || !dateInput.value) return;

    const target = new Date(dateInput.value + "T00:00:00");
    const now = new Date();

    if (Number.isNaN(target.getTime())) return;

    if (target <= now) {
      target.setFullYear(target.getFullYear() + 1);
    }

    const difference = target - now;

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    if ($("cdDays")) $("cdDays").textContent = days;
    if ($("cdHours")) $("cdHours").textContent = hours;
    if ($("cdMinutes")) $("cdMinutes").textContent = minutes;
    if ($("cdSeconds")) $("cdSeconds").textContent = seconds;

    const message = $("countdownMessage");
    if (message) message.textContent = "Us khaas din ka intezaar... 💗";
  }

  on("birthdayDate", "change", () => {
    updateCountdown();
    if (countdownTimer) clearInterval(countdownTimer);
    countdownTimer = setInterval(updateCountdown, 1000);
  });

  /* VIRTUAL CAKE */

  let candleCount = 3;
  let cakeBlown = false;

  function updateCake() {
    const candles = $("cakeCandles");
    if (candles) {
      candles.textContent = cakeBlown
        ? "💨".repeat(candleCount)
        : "🕯️".repeat(candleCount);
    }
  }

  on("addCakeCandle", "click", () => {
    if (candleCount < 20) candleCount++;
    cakeBlown = false;
    updateCake();

    const message = $("cakeMessage");
    if (message) message.textContent = "Ek aur candle, ek aur wish! 🕯️";
  });

  on("blowCakeCandles", "click", () => {
    cakeBlown = true;
    updateCake();

    const message = $("cakeMessage");
    if (message) message.textContent = "Saari wishes tumhare naam! Happy Birthday! 🎂💗";

    confetti();
  });

  updateCake();

  /* FORTUNE COOKIE */

  const fortunes = [
    "Tumhare aane wale din bahut khoobsurat honge. ✨",
    "Tumhari muskurahat kabhi kam na ho. 💗",
    "Ek nayi khushi tumhara intezaar kar rahi hai. 🌸",
    "Tum jitni special ho, utni hi khoobsurat tumhari duniya ho.",
    "Har din tumhe muskurane ki ek nayi wajah mile. 🤍"
  ];

  on("fortuneCookie", "click", () => {
    const message = $("fortuneMessage");
    if (message) {
      message.textContent = fortunes[Math.floor(Math.random() * fortunes.length)];
    }
    confetti();
  });

  /* MAGIC PETALS */

  on("magicButton", "click", () => {
    const layer = $("magicLayer");
    if (!layer) return;

    const petals = ["🌸", "💗", "✨", "🌷", "💕"];

    for (let i = 0; i < 30; i++) {
      const petal = document.createElement("span");
      petal.className = "magic-petal";
      petal.textContent = petals[Math.floor(Math.random() * petals.length)];

      petal.style.left = Math.random() * 100 + "%";
      petal.style.animationDelay = Math.random() * 2 + "s";
      petal.style.fontSize = (15 + Math.random() * 20) + "px";

      layer.appendChild(petal);

      setTimeout(() => petal.remove(), 7000);
    }

    const message = $("magicMessage");
    if (message) message.textContent = "Yeh saari khushiyan tumhare liye! 🌸💗";
  });

  /* TIMELINE */

  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  /* FINAL SURPRISE */

  function openSurprise() {
    const modal = $("surpriseModal");
    if (modal) modal.classList.remove("hidden");
    confetti();
  }

  function closeSurprise() {
    const modal = $("surpriseModal");
    if (modal) modal.classList.add("hidden");
  }

  on("fireworkBtn", "click", openSurprise);
  on("closeModal", "click", closeSurprise);
  on("modalOk", "click", closeSurprise);

  on("surpriseModal", "click", (event) => {
    if (event.target === $("surpriseModal")) closeSurprise();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSurprise();
  });

  /* SMOOTH NAVIGATION */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
