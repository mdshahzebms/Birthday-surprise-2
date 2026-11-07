
/* =========================================
   BUSHRA BIRTHDAY WEBSITE - COMPLETE SCRIPT
   Password: 1911
========================================= */

const $ = (id) => document.getElementById(id);
const on = (id, event, callback) => {
  const element = $(id);
  if (element) element.addEventListener(event, callback);
};

document.addEventListener("DOMContentLoaded", () => {

  /* ---------- 1. PASSWORD LOCK ---------- */

  const lockScreen = $("lockScreen");
  const birthdayScreen = $("birthdayScreen");
  const passwordInput = $("password");
  const errorMessage = $("error");

  function unlockWebsite() {
    if (!passwordInput) return;

    if (passwordInput.value.trim() === "1911") {
      lockScreen?.classList.add("hidden");
      birthdayScreen?.classList.remove("hidden");

      if (errorMessage) errorMessage.textContent = "";

      createConfetti(35);
    } else {
      if (errorMessage) {
        errorMessage.textContent = "Oops! Password galat hai. Dobara try karo ❤️";
      }

      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  on("unlockBtn", "click", unlockWebsite);

  on("password", "keydown", (event) => {
    if (event.key === "Enter") unlockWebsite();
  });


  /* ---------- 2. 100 REASONS ---------- */

  const reasons = [
    "Kyunki aap meri zindagi ko khoobsurat bana dete ho.",
    "Kyunki aapki muskurahat mera din achcha kar deti hai.",
    "Kyunki aapse baat karke sukoon milta hai.",
    "Kyunki aap meri chhoti-chhoti baatein samajhte ho.",
    "Kyunki aapke saath waqt ka pata hi nahi chalta.",
    "Kyunki aapki khushi mere liye bahut maayne rakhti hai.",
    "Kyunki aap meri boring life ko special bana dete ho.",
    "Kyunki aapki awaaz sunna achcha lagta hai.",
    "Kyunki aapke saath har din ek nayi yaad ban sakta hai.",
    "Kyunki aap jaise ho, waise hi bahut special ho.",
    "Kyunki aap meri baaton ko dhyan se sunte ho.",
    "Kyunki aapki narazgi mein bhi apnapan hota hai.",
    "Kyunki aapke saath khulkar baat kar sakta hoon.",
    "Kyunki aap meri duniya ka khoobsurat hissa ho.",
    "Kyunki aapki ek message se chehre par muskurahat aa jaati hai.",
    "Kyunki aapke saath khamoshi bhi achchi lagti hai.",
    "Kyunki aap meri chhoti khushiyon ko bada bana dete ho.",
    "Kyunki aapke saath sapne dekhna achcha lagta hai.",
    "Kyunki aapki fikr karna mujhe achcha lagta hai.",
    "Kyunki aap meri favourite notification ho.",
    "Kyunki aapke saath hasi-mazaak karna achcha lagta hai.",
    "Kyunki aapki baaton mein ek alag si mithaas hai.",
    "Kyunki aap mujhe behtar insaan banne ki wajah dete ho.",
    "Kyunki aapke saath har chhoti baat bhi yaadgaar hai.",
    "Kyunki aap meri life mein ek special jagah rakhte ho.",
    "Kyunki aapki aankhon mein ek alag si chamak hai.",
    "Kyunki aapke saath future ke baare mein sochna achcha lagta hai.",
    "Kyunki aap meri achchi aur buri dono baatein jaante ho.",
    "Kyunki aapki hansi sunna favourite hai.",
    "Kyunki aapke saath simple moments bhi special ban jaate hain.",
    "Kyunki aapki presence hi kaafi hoti hai.",
    "Kyunki aapke saath baatein kabhi khatam nahi hoti.",
    "Kyunki aap meri fikr karte ho.",
    "Kyunki aapke saath har mausam achcha lagta hai.",
    "Kyunki aap mujhe apna sa mehsoos karate ho.",
    "Kyunki aapki chhoti-chhoti aadatein pyari hain.",
    "Kyunki aapke saath naye experiences share karna achcha lagta hai.",
    "Kyunki aap meri yaadon ka khoobsurat hissa ho.",
    "Kyunki aapki baaton se dil halka ho jaata hai.",
    "Kyunki aapke saath waqt bitana kabhi waste nahi lagta.",
    "Kyunki aapki khushi dekhkar mujhe bhi khushi hoti hai.",
    "Kyunki aap mere din ka achcha hissa ho.",
    "Kyunki aapke saath har baat share karne ka mann karta hai.",
    "Kyunki aapki simplicity bahut achchi lagti hai.",
    "Kyunki aap meri duniya mein rang bhar dete ho.",
    "Kyunki aapke saath chhoti si walk bhi yaadgaar hogi.",
    "Kyunki aapke saath naye sapne dekhna achcha lagta hai.",
    "Kyunki aap mujhe apni baat kehne ka mauka dete ho.",
    "Kyunki aapki care mere liye important hai.",
    "Kyunki aapke saath har din kuch naya seekhne ko milta hai.",
    "Kyunki aap meri favourite memories ka hissa ho.",
    "Kyunki aapki ek muskurahat bahut kuch keh jaati hai.",
    "Kyunki aapke saath chai peena bhi special lagega.",
    "Kyunki aapke saath baarish dekhna achcha lagega.",
    "Kyunki aapke saath lambi-lambi baatein karna pasand hai.",
    "Kyunki aap meri life mein positivity laate ho.",
    "Kyunki aapki chhoti si tareef bhi din bana deti hai.",
    "Kyunki aapke saath har celebration aur bhi special hoga.",
    "Kyunki aap meri baaton mein chhupi feelings samajh lete ho.",
    "Kyunki aapke saath memories banana chahta hoon.",
    "Kyunki aapki har nayi achievement par khushi hoti hai.",
    "Kyunki aap apne andaaz mein sabse alag ho.",
    "Kyunki aapke saath waqt guzarna sukoon deta hai.",
    "Kyunki aapki pasand jaan-na achcha lagta hai.",
    "Kyunki aapke saath har chhoti journey khoobsurat ho sakti hai.",
    "Kyunki aap meri life ki ek pyari si kahani ho.",
    "Kyunki aapke saath hasi ke pal jama karna chahta hoon.",
    "Kyunki aapki baaton mein apnapan hai.",
    "Kyunki aapke saath naye places explore karna achcha lagega.",
    "Kyunki aap meri khushiyon ki wajah ban jaate ho.",
    "Kyunki aapke saath har din ek nayi shuruaat ho sakta hai.",
    "Kyunki aap meri life mein bahut important ho.",
    "Kyunki aapke saath favourite gaane sunna achcha lagega.",
    "Kyunki aapki yaad kabhi-kabhi bina wajah bhi aa jaati hai.",
    "Kyunki aapke saath har baat mein ek alag maza hai.",
    "Kyunki aapki personality bahut pyari hai.",
    "Kyunki aapke saath waqt bitane ki khwahish rehti hai.",
    "Kyunki aap mere liye ek khoobsurat surprise ho.",
    "Kyunki aapke saath har chhoti jeet celebrate karna chahta hoon.",
    "Kyunki aapki baatein yaad reh jaati hain.",
    "Kyunki aapke saath future ki achchi yaadein banana chahta hoon.",
    "Kyunki aap meri duniya ko thoda aur roshan kar dete ho.",
    "Kyunki aapke saath dil ki baat kehna aasaan lagta hai.",
    "Kyunki aap meri favourite conversations ka hissa ho.",
    "Kyunki aapke saath har din ek nayi wajah milti hai muskurane ki.",
    "Kyunki aapki chhoti si attention bhi special lagti hai.",
    "Kyunki aapke saath ek simple sa din bhi yaadgaar ban sakta hai.",
    "Kyunki aap meri life mein khushiyon ka ek pyara sabab ho.",
    "Kyunki aapke saath har pal ko yaad rakhna chahta hoon.",
    "Kyunki aapki baaton mein ek alag hi comfort hai.",
    "Kyunki aapke saath apni favourite memories share karna achcha lagta hai.",
    "Kyunki aap meri life ki khoobsurat possibilities mein se ek ho.",
    "Kyunki aapke saath muskurane ki wajah milti hai.",
    "Kyunki aapka hona hi ek achchi baat hai.",
    "Kyunki aap jaise ho, waise hi bahut khaas ho.",
    "Kyunki aapki khushi aur sukoon mere liye important hain.",
    "Kyunki aapke saath aur bhi khoobsurat yaadein banani hain.",
    "Kyunki aap meri kahani ka ek bahut pyara hissa ho.",
    "Aur sabse badi wajah... kyunki aap Bushra ho! ❤️"
  ];

  let reasonIndex = 0;

  function showReason() {
    const number = $("reasonNumber");
    const text = $("reasonText");

    if (number) {
      number.textContent =
        String(reasonIndex + 1).padStart(2, "0") + " / 100";
    }

    if (text) {
      text.textContent = reasons[reasonIndex];
      text.classList.remove("reason-animate");
      void text.offsetWidth;
      text.classList.add("reason-animate");
    }
  }

  on("nextReason", "click", () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;
    showReason();
  });

  on("prevReason", "click", () => {
    reasonIndex = (reasonIndex - 1 + reasons.length) % reasons.length;
    showReason();
  });

  showReason();


  /* ---------- 3. LOVE LETTER ---------- */

  on("letterBtn", "click", () => {
    const paper = $("letterPaper");
    if (!paper) return;

    paper.classList.toggle("show");
    paper.classList.toggle("open");

    createConfetti(12);
  });


  /* ---------- 4. ENVELOPE ---------- */

  on("envelopeBtn", "click", () => {
    const envelope = $("envelopeBtn");
    const hint = $("envelopeHint");

    if (!envelope) return;

    const isOpen = envelope.classList.toggle("open");

    if (hint) {
      hint.textContent = isOpen
        ? "Aapke liye ek chhota sa surprise ❤️"
        : "Is envelope ko kholkar dekho 💌";
    }

    if (isOpen) createConfetti(15);
  });


  /* ---------- 5. BACKGROUND MUSIC ---------- */

  const audio = $("birthdayAudio");
  const musicButton = $("musicBtn");
  const vinylButton = $("vinylPlayBtn");
  const vinylDisc = $("vinylDisc");

  function syncMusicButtons() {
    const playing = audio && !audio.paused;

    if (musicButton) {
      musicButton.textContent = playing ? "⏸ Music Pause" : "▶ Play Music";
    }

    if (vinylButton) {
      vinylButton.textContent = playing ? "⏸ Pause" : "▶ Play";
    }

    if (vinylDisc) {
      vinylDisc.classList.toggle("playing", Boolean(playing));
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
          status.textContent = "Music start nahi hua. Dobara Play dabao.";
        }
      }
    } else {
      audio.pause();
    }

    syncMusicButtons();
  }

  on("musicBtn", "click", toggleMusic);
  on("vinylPlayBtn", "click", toggleMusic);

  if (audio) {
    audio.addEventListener("play", syncMusicButtons);
    audio.addEventListener("pause", syncMusicButtons);
    audio.addEventListener("ended", syncMusicButtons);
    audio.addEventListener("timeupdate", () => {
      const track = document.querySelector(".track span");
      if (!track || !audio.duration) return;

      track.style.width =
        (audio.currentTime / audio.duration) * 100 + "%";
    });
  }

  syncMusicButtons();


  /* ---------- 6. CONFETTI ---------- */

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
