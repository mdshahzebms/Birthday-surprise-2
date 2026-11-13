
const $ = (id) => document.getElementById(id);

// Screens
const intro = $("intro");
const lockScreen = $("lockScreen");
const birthdayScreen = $("birthdayScreen");

const giftWrap = $("giftWrap");
const openGift = $("openGift");

// Gift open karne par password screen
function showLock() {
  intro.classList.add("hidden");
  lockScreen.classList.remove("hidden");
}

giftWrap.addEventListener("click", showLock);

giftWrap.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    showLock();
  }
});

openGift.addEventListener("click", showLock);

// Password system
let entered = "";

const dots = [...$("dots").children];

function refreshDots() {
  dots.forEach((dot, i) => {
    dot.classList.toggle("filled", i < entered.length);
  });
}

function unlock() {
  if (entered === "1911") {
    lockScreen.classList.add("hidden");
    birthdayScreen.classList.remove("hidden");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    startPetals();
  } else {
    $("errorMsg").textContent =
      "Code sahi nahi hai. Dobara koshish kijiye.";

    entered = "";
    refreshDots();
  }
}

// Keypad buttons
$("keypad").addEventListener("click", (e) => {
  const button = e.target.closest("button");
  if (!button) return;

  const key = button.dataset.key;

  if (key === "clear") {
    entered = entered.slice(0, -1);
  } else if (key === "enter") {
    unlock();
    return;
  } else if (entered.length < 4) {
    entered += key;

    if (entered.length === 4) {
      refreshDots();
      setTimeout(unlock, 180);
      return;
    }
  }

  refreshDots();
  $("errorMsg").textContent = "";
});

// Music player
const audio = $("birthdayAudio");
const musicBtn = $("musicBtn");

musicBtn.addEventListener("click", async () => {
  try {
    if (audio.paused) {
      await audio.play();
      musicBtn.innerHTML =
        '♫ <span>Gaana chal raha hai</span>';
    } else {
      audio.pause();
      musicBtn.innerHTML =
        '♫ <span>Gaana chalao</span>';
    }
  } catch (error) {
    musicBtn.innerHTML =
      '♫ <span>Audio file check karein</span>';
  }
});

audio.addEventListener("pause", () => {
  musicBtn.innerHTML =
    '♫ <span>Gaana chalao</span>';
});

audio.addEventListener("play", () => {
  musicBtn.innerHTML =
    '♫ <span>Gaana chal raha hai</span>';
});

// 100 reasons
const reasons = [
  "Aapki muskurahat din ko roshan kar deti hai.",
  "Aapki baaton mein ek alag hi sukoon hai.",
  "Aap chhoti-chhoti cheezon ko khaas bana deti hain.",
  "Aapka dil bohot khoobsurat hai.",
  "Aapki hansi sun kar khushi hoti hai.",
  "Aap apne andaaz mein sabse alag hain.",
  "Aapki maujoodgi se mahaul achha lagta hai.",
  "Aapke khwaab bohot pyaare hain.",
  "Aapki saadgi dil ko chhoo jaati hai.",
  "Aap bas aap hain, aur wahi kaafi hai.",
  "Aapki har chhoti khushi maayne rakhti hai.",
  "Aapki baaton ko yaad karna achha lagta hai.",
  "Aapke saath waqt jaldi guzar jaata hai.",
  "Aapki aankhon mein umeed chamakti hai.",
  "Aapka hona ek pyaari si baat hai.",
  "Aapki fikr karna achha lagta hai.",
  "Aapki awaaz mein apnapan hai.",
  "Aap har din ko yaadgaar bana sakti hain.",
  "Aapki khushi sabse zaroori hai.",
  "Aapki har ada apni si lagti hai."
];

let reasonIndex = 0;

$("nextReason").addEventListener("click", () => {
  reasonIndex = (reasonIndex + 1) % 100;

  $("reasonCount").textContent =
    String(reasonIndex + 1).padStart(2, "0") + " / 100";

  $("reasonText").textContent =
    reasons[reasonIndex % reasons.length];
});

// Final surprise
$("finalBtn").addEventListener("click", () => {
  $("finalMessage").classList.remove("hidden");

  $("finalBtn").textContent =
    "Surprise mil gaya ♡";
});

// Falling flower petals
let petalsStarted = false;

function startPetals() {
  if (petalsStarted) return;
  petalsStarted = true;

  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  setInterval(() => {
    if (birthdayScreen.classList.contains("hidden")) return;

    const petal = document.createElement("span");

    petal.className = "petal";

    petal.textContent = ["✿", "❀", "♡"][
      Math.floor(Math.random() * 3)
    ];

    petal.style.left = Math.random() * 100 + "%";

    petal.style.fontSize =
      10 + Math.random() * 12 + "px";

    petal.style.animationDuration =
      7 + Math.random() * 7 + "s";

    $("petals").appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 15000);

  }, 700);
}
TTI ---------- */

  function createConfetti(amount = 45) {
    const container = $("confetti");
    if (!container) return;

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

      container.appendChild(piece);

      setTimeout(() => piece.remove(), 6500);
    }
  }

  on("fireworkBtn", "click", () => createConfetti(75));


  /* ---------- 7. WISH JAR ---------- */

  const wishes = [
    "Aapki har subah muskurahat ke saath shuru ho. 🌸",
    "Aapke saare achche sapne poore hon. ✨",
    "Aapki zindagi khushiyon se bhari rahe. ❤️",
    "Har din aapke liye kuch khoobsurat lekar aaye.",
    "Aapko hamesha sukoon aur kamyabi mile.",
    "Aapki muskurahat kabhi kam na ho. 💗",
    "Aapke aas-paas hamesha pyaar aur apnapan rahe.",
    "Aapki har nayi shuruaat achchi ho.",
    "Aapko woh sab mile jo aapke liye behtar ho.",
    "Aaj ka din aur aane wala har din special ho. 🎂"
  ];

  on("drawWish", "click", () => {
    const wish = $("jarWish");
    if (!wish) return;

    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];

    wish.textContent = randomWish;
    wish.classList.remove("wish-animate");
    void wish.offsetWidth;
    wish.classList.add("wish-animate");
  });

  // Purane HTML mein wishBtn ho to woh bhi kaam kare.
  on("wishBtn", "click", () => {
    $("drawWish")?.click();
  });


  /* ---------- 8. BIRTHDAY CANDLE ---------- */

  on("blowCandle", "click", () => {
    const flame = $("flame");
    const message = $("candleMessage");

    if (flame) flame.classList.add("out");

    if (message) {
      message.textContent =
        "Aapki har wish poori ho. Happy Birthday! ❤️";
    }

    createConfetti(25);
  });


  /* ---------- 9. STAR MESSAGES ---------- */

  document.querySelectorAll(".star-point").forEach((star) => {
    star.addEventListener("click", () => {
      const message = $("starMessage");
      if (message) {
        message.textContent =
          star.dataset.message || "Aap mere liye ek chamakta sitara ho. ✨";
      }

      star.classList.add("star-active");
    });
  });


  /* ---------- 10. OPEN WHEN LETTERS ---------- */

  document.querySelectorAll(".when-open").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("opened");

      const oldMessage = item.querySelector(".when-message");

      if (!oldMessage) {
        const message = document.createElement("p");
        message.className = "when-message";
        message.textContent =
          item.dataset.message || "Yaad rakho, aap bahut special ho. ❤️";
        item.appendChild(message);
      } else {
        oldMessage.remove();
      }
    });
  });


  /* ---------- 11. POLAROID MESSAGES ---------- */

  document.querySelectorAll(".polaroid").forEach((card) => {
    card.addEventListener("click", () => {
      const message = $("polaroidMessage");

      if (message) {
        message.textContent =
          card.dataset.caption || "Ek khoobsurat yaad, sirf aapke liye. 💗";
      }

      card.classList.toggle("selected");
    });
  });


  /* ---------- 12. TREASURE HUNT ---------- */

  const treasureClues = [
    "Clue 1: Jahan aapki sabse pyari yaadein chhupi hain, wahin dekho. 💌",
    "Clue 2: Ab us jagah ko dekho jahan se yeh birthday surprise shuru hua. 🎂",
    "Clue 3: Aakhri clue — is website mein chhupa hua pyaar dhoondo. ❤️"
  ];

  let treasureIndex = 0;

  if ($("treasureClue")) {
    $("treasureClue").textContent = treasureClues[0];
  }

  on("treasureNext", "click", () => {
    const clue = $("treasureClue");
    const result = $("treasureResult");
    const icon = $("treasureIcon");
    const button = $("treasureNext");

    if (treasureIndex < treasureClues.length - 1) {
      treasureIndex++;

      if (clue) clue.textContent = treasureClues[treasureIndex];

      if (icon) icon.textContent = "🔍";
    } else {
      if (clue) {
        clue.textContent = "Aapne saare clues solve kar liye! 🎉";
      }

      if (result) {
        result.textContent =
          "Asli treasure koi cheez nahi... aapki muskurahat hai. ❤️";
      }

      if (icon) icon.textContent = "💎";
      if (button) button.textContent = "Treasure Found!";

      button?.setAttribute("disabled", "true");
      createConfetti(40);
    }
  });


  /* ---------- 13. BIRTHDAY COUNTDOWN ---------- */

  function updateCountdown() {
    const input = $("birthdayDate");
    const message = $("countdownMessage");

    if (!input || !input.value) {
      if (message) {
        message.textContent = "Birthday date select karo ❤️";
      }
      return;
    }

    const now = new Date();
    const parts = input.value.split("-").map(Number);

    if (parts.length !== 3 || parts.some(Number.isNaN)) return;

    const [year, month, day] = parts;

    let target = new Date(
      now.getFullYear(),
      month - 1,
      day,
      0, 0, 0
    );

    // Agar is saal ka birthday beet chuka hai,
    // to agle saal ka countdown dikhao.
    if (target.getTime() <= now.getTime()) {
      target = new Date(
        now.getFullYear() + 1,
        month - 1,
        day,
        0, 0, 0
      );
    }

    const difference = Math.max(0, target.getTime() - now.getTime());

    const days = Math.floor(difference / 86400000);
    const hours = Math.floor((difference % 86400000) / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    if ($("cdDays")) $("cdDays").textContent = days;
    if ($("cdHours")) $("cdHours").textContent = hours;
    if ($("cdMinutes")) $("cdMinutes").textContent = minutes;
    if ($("cdSeconds")) $("cdSeconds").textContent = seconds;

    if (message) {
      message.textContent = "Agle birthday tak ka countdown ❤️";
    }
  }

  on("birthdayDate", "change", updateCountdown);
  updateCountdown();
  setInterval(updateCountdown, 1000);


  /* ---------- 14. VINYL MUSIC PLAYER ---------- */

  // Vinyl button aur normal music button dono
  // ek hi audio ko control karte hain.


  /* ---------- 15. VIRTUAL BIRTHDAY CAKE ---------- */

  let cakeCandleCount = document.querySelectorAll(
    "#cakeCandles .cake-candle"
  ).length;

  on("addCakeCandle", "click", () => {
    const cake = $("cakeCandles");
    if (!cake) return;

    if (cakeCandleCount >= 20) {
      const message = $("cakeMessage");
      if (message) message.textContent = "Cake par kaafi candles ho gayi hain! 🎂";
      return;
    }

    const candle = document.createElement("span");
    candle.className = "cake-candle";
    candle.innerHTML = '<span class="cake-flame"></span>';

    cake.appendChild(candle);
    cakeCandleCount++;

    const message = $("cakeMessage");
    if (message) {
      message.textContent = `Ab cake par ${cakeCandleCount} candles hain!`;
    }
  });

  on("blowCakeCandles", "click", () => {
    const candles = document.querySelectorAll(
      "#cakeCandles .cake-candle"
    );

    candles.forEach((candle) => candle.classList.add("blown"));

    const message = $("cakeMessage");
    if (message) {
      message.textContent =
        "Yay! Aapki saari wishes poori hon. Happy Birthday! ❤️";
    }

    createConfetti(35);
  });


  /* ---------- 16. FORTUNE COOKIE ---------- */

  const fortunes = [
    "Aapke aane wale din bahut khoobsurat hone wale hain. ✨",
    "Aapki muskurahat kisi ka din bana sakti hai. ❤️",
    "Aapke liye ek nayi khushi intezaar kar rahi hai.",
    "Aap hamesha apne sapnon par bharosa rakhna.",
    "Aaj ka din aapke naam. Enjoy karo! 🎂",
    "Aapki zindagi mein pyaar aur sukoon bana rahe.",
    "Aap bahut saari achchi yaadon ke haqdaar ho. 💗",
    "Aapki har mehnat rang laaye."
  ];

  on("fortuneCookie", "click", () => {
    const message = $("fortuneMessage");
    if (!message) return;

    const fortune = fortunes[
      Math.floor(Math.random() * fortunes.length)
    ];

    message.textContent = fortune;
    message.classList.add("fortune-open");

    createConfetti(10);
  });


  /* ---------- 17. MAGIC BUTTON ---------- */

  on("magicButton", "click", () => {
    const message = $("magicMessage");
    const layer = $("magicLayer");

    if (message) {
      message.textContent =
        "Aapki duniya hamesha khushiyon, pyaar aur roshni se bhari rahe! ✨❤️";
    }

    if (layer) {
      layer.classList.remove("magic-active");
      void layer.offsetWidth;
      layer.classList.add("magic-active");

      setTimeout(() => {
        layer.classList.remove("magic-active");
      }, 3000);
    }

    createConfetti(55);
  });


  /* ---------- 18. MEMORY TIMELINE ---------- */

  document.querySelectorAll(".timeline-item").forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("active");

      const sign = item.querySelector("span");

      if (sign) {
        sign.textContent = item.classList.contains("active") ? "−" : "+";
      }
    });
  });


  /* ---------- 19. FINAL SURPRISE MODAL ---------- */

  function openSurprise() {
    const modal = $("surpriseModal");
    if (!modal) return;

    modal.classList.remove("hidden");
    modal.classList.add("show");

    createConfetti(65);
  }

  function closeSurprise() {
    const modal = $("surpriseModal");
    if (!modal) return;

    modal.classList.add("hidden");
    modal.classList.remove("show");
  }

  on("fireworkBtn", "click", openSurprise);
  on("closeModal", "click", closeSurprise);
  on("modalOk", "click", closeSurprise);

  on("surpriseModal", "click", (event) => {
    if (event.target === $("surpriseModal")) {
      closeSurprise();
    }
  });


  /* ---------- 20. GENERAL ANIMATION HELPERS ---------- */

  // Click par halka sa visual feedback.
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.remove("button-tap");
      void button.offsetWidth;
      button.classList.add("button-tap");
    });
  });

  // Smooth scrolling for navigation links.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  console.log("Bushra Birthday Website loaded successfully ❤️");

});
      
                      
