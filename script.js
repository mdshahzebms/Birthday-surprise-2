
document.addEventListener("DOMContentLoaded", () => {
  const $ = id => document.getElementById(id);

  const intro = $("intro");
  const lock = $("lockScreen");
  const birthday = $("birthdayScreen");
  const gift = $("giftWrap");
  const openGift = $("openGift");
  const audio = $("birthdayAudio");
  const musicBtn = $("musicBtn");
// GARDEN FLOWERS: section par pahunchte hi khilein
const roseGarden = $("roseGarden");

if (roseGarden) {
  if ("IntersectionObserver" in window) {
    const gardenObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          roseGarden.classList.add("garden-active");
          gardenObserver.unobserve(roseGarden);
        }
      });
    }, { threshold: 0.2 });

    gardenObserver.observe(roseGarden);
  } else {
    roseGarden.classList.add("garden-active");
    "✨", "🌸", "💗", "🌹"
  }
}
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
        "Code sahi nahi hai Babu. Dobara koshish kijiye.";
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
  "Kyunki aap meri zindagi ki sabse pyari wajah ho. ❤️",
  "Aapki ek muskurahat mera poora din achha kar deti hai. 😊",
  "Aapki awaaz sunke dil ko sukoon milta hai. 🎶",
  "Aap bina kahe bhi meri baat samajh leti ho. 🫶",
  "Aapki chhoti-chhoti baatein mujhe bahut achhi lagti hain. 🥰",
  "Aapse baat karke kabhi mann nahi bharta. 💬",
  "Aapka khayal bina kisi wajah ke aa jaata hai. 💭",
  "Aapki fikr karna mujhe achha lagta hai. 🤗",
  "Aapki khushi mere liye bahut zaroori hai. 🌸",
  "Aap udaas hoti ho to mera dil bhi udaas ho jaata hai. 🥺",

  "Aap mujhe khud ko behtar banane ki wajah deti ho. 🌱",
  "Aapke saath main bilkul apne jaisa reh sakta hoon. ❤️",
  "Aapke saamne mujhe kuch chhupane ka mann nahi karta. 🫂",
  "Aap meri baat ko samajhne ki koshish karti ho. 💗",
  "Aap jis tarah meri fikr karti ho, woh mere dil ko chhoo jaata hai. 🥹",
  "Aapki masoomiyat mujhe bahut pasand hai. 🧸",
  "Aapki saadgi hi aapko aur bhi pyara banati hai. 🌷",
  "Aapki muskurahat meri saari tension door kar deti hai. 😍",
  "Aapka ek chhota sa msg bhi mere chehre par smile le aata hai. 📩",
  "Aap meri aam si zindagi ko bhi khaas bana deti ho. ✨",

  "Kyunki aap meri aadat ban chuki ho. 💞",
  "Aapke bina din kuch adhoora sa lagta hai. 🌙",
  "Aapka naam dekhte hi chehre par khud-ba-khud muskurahat aa jaati hai. ❤️",
  "Aapki baatein main baar-baar yaad karta hoon. 💭",
  "Aapka thoda sa bhi dhyaan mere liye bahut hota hai. 🥰",
  "Aapke saath hui chhoti si baat bhi mujhe yaad reh jaati hai. 📸",
  "Aap mujhe khaas hone ka ehsaas karwati ho. 🫶",
  "Aapka mere paas hona mere liye bahut keemti hai. 💎",
  "Aap mere khayalon ka sabse pyara hissa ban chuki ho. 💗",
  "Aapke saath aane wale kal ke baare mein sochna achha lagta hai. 🌈",

  "Aap khush hoti ho to main bhi khush ho jaata hoon. 😄",
  "Aapke sapne mujhe apne sapnon jaise lagte hain. 🌠",
  "Main chahta hoon ki aap hamesha muskurati raho. 😊",
  "Aap duniya ki har khushi ki haqdar ho. 🎁",
  "Aapke liye dua karna mujhe achha lagta hai. 🤲",
  "Aapki kamyabi par mujhe dil se khushi hoti hai. 🏆",
  "Aapki pareshani sunna mujhe kabhi bura nahi lagta. 🫂",
  "Aapki baatein sunte rehna mujhe pasand hai. 🎧",
  "Aapke saath chup rehna bhi achha lagta hai. 🤍",
  "Aapke saath waqt bahut jaldi guzar jaata hai. ⏳",

  "Aap meri zindagi ka sabse pyara hissa ban chuki ho. ❤️",
  "Aapne meri zindagi ko pehle se zyada khoobsurat bana diya hai. 🌹",
  "Aapki wajah se main bina kisi wajah ke bhi muskura deta hoon. 😁",
  "Aapka “apna khayal rakhna” kehna bhi mujhe bahut achha lagta hai. 🥺",
  "Aapka subah ka ek chhota sa msg mera din bana deta hai. 🌞",
  "Aapka raat ko baat karke jaana dil ko sukoon deta hai. 🌙",
  "Aapki fikr mein ek alag hi mithaas hai. 🍯",
  "Aapke baat karne ka andaaz mujhe bahut pasand hai. 💬",
  "Aapko jitna jaan raha hoon, utni hi zyada khaas lagti ho. 💖",
  "Aapke baare mein sochna mujhe bahut achha lagta hai. 💭",

  "Kyunki aap sirf khoobsurat nahi, dil ki bhi bahut achhi ho. ❤️",
  "Aap doosron ki feelings ko samajhti ho. 🫶",
  "Aapka achha dil mujhe bahut pasand hai. 💗",
  "Aap jis tarah apno ki fikr karti ho, woh bahut pyara hai. 🤗",
  "Aap doosron ki izzat karna jaanti ho. 🌷",
  "Aapki sachchai mujhe aap par bharosa karna sikhati hai. 🤝",
  "Aapke saath main apne dil ki baat keh sakta hoon. 💌",
  "Aap meri baaton ko ahmiyat deti ho. 🥹",
  "Aap meri baat poori tarah sun leti ho. 👂",
  "Aap meri khamoshi bhi samajhne ki koshish karti ho. 🤍",

  "Kyunki aap meri zindagi mein sirf ek insaan nahi, ek ehsaas ban chuki ho. 💞",
  "Aapke saath judi har yaad mere liye bahut khaas hai. 📷",
  "Aapki yaad kabhi bhi bina bataye aa jaati hai. 💭",
  "Aapki tasveer dekhkar bhi mere chehre par muskurahat aa jaati hai. 🥰",
  "Aapka naam mere liye baaki sabse alag hai. ❤️",
  "Mere dil mein aapke liye ek alag jagah hai. 💝",
  "Woh jagah koi aur kabhi nahi le sakta. 🔐",
  "Aapki ahmiyat mere lafzon se kahin zyada hai. 🥹",
  "Aapke baare mein jitna bolun, utna hi kam lagta hai. 📝",
  "Aap mere liye sirf khaas nahi, bahut zyada khaas ho. 💖",

  "Aapke saath apni chhoti-chhoti khushiyan baantna chahta hoon. 🎀",
  "Aapke saath apne achhe pal bitana chahta hoon. 🌸",
  "Aapke bure waqt mein aapke saath rehna chahta hoon. 🫂",
  "Aapki pareshani door na bhi kar paun, phir bhi aapko akela nahi chhodna chahta. 🤝",
  "Aapki muskurahat hamesha dekhna chahta hoon. 😊",
  "Aapko kabhi jaan-bujhkar dukh nahi dena chahta. 🥺",
  "Aapke saath hamesha pyaar aur izzat se rehna chahta hoon. ❤️",
  "Aapki feelings mere liye bahut maayne rakhti hain. 💗",
  "Aapko khush dekhna mere liye bahut badi baat hai. 🌻",
  "Aapki fikr karne ke liye mujhe kisi wajah ki zaroorat nahi hai. 🫶",

  "Kyunki aap meri sabse pasandida insaan ho. ❤️",
  "Aapse baat karna meri sabse pasandida baat hai. 💬",
  "Aap mere sabse pyare khayal ho. 💭",
  "Aap meri muskurahat ki sabse pyari wajah ho. 😍",
  "Aap mere dil ke sabse kareeb ho. ❤️",
  "Aapki har chhoti baat mujhe achhi lagti hai. 🌷",
  "Aapka thoda sa bhi dhyaan mere liye bahut khaas hai. 🥰",
  "Aapse baat karne ke liye mujhe kisi bahaane ki zaroorat nahi padti. 📱",
  "Aapke saath bina kisi khaas baat ke baat karna bhi achha lagta hai. 💞",
  "Aapke saath rehne ka khayal hi dil ko khush kar deta hai. 🌈",

  "Kyunki aap meri duaon ka sabse pyara hissa ho. 🤲❤️",
  "Main chahta hoon ki aapki zindagi mein hamesha sukoon rahe. 🕊️",
  "Main chahta hoon ki aapke saare sapne poore hon. 🌠",
  "Main chahta hoon ki aapki muskurahat kabhi kam na ho. 😊",
  "Main chahta hoon ki aapko kabhi apni keemat par shaq na ho. 💎",
  "Aap jitni khaas mere liye ho, kaash aap khud ko bhi utna hi khaas samjho. 🥹",
  "Aap meri zindagi mein aayi, iske liye main dil se shukraguzaar hoon. ❤️",
  "Aapne mere dil mein apni ek aisi jagah bana li hai jo koi aur nahi le sakta. 🔐",
  "Kyunki aap jaisi ho, waise hi mujhe bahut pyari ho. ❤️",
  "Aur sabse badi wajah… kyunki aap meri zindagi mein ho. Aapko khaas banane ke liye mujhe kisi wajah ki zaroorat hi nahi. Aapka hona hi mere liye sabse badi wajah hai. ❤️🫂"
];

let reasonIndex = 0;

const reasonCount = document.getElementById("reasonCount");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

function showReason() {
  if (!reasonCount || !reasonText) return;

  reasonCount.textContent =
    String(reasonIndex + 1).padStart(2, "0") + " / 100";

  reasonText.textContent = reasons[reasonIndex];
}

if (nextReason) {
  nextReason.addEventListener("click", () => {
    reasonIndex = (reasonIndex + 1) % reasons.length;
    showReason();
  });
}

showReason();


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
                          
/* =================================
   VINYL PLAYER AUDIO CONNECTION
================================= */

(() => {
  const audio = document.getElementById("birthdayAudio");
  const player = document.getElementById("vinylSection");
  const playButton = document.getElementById("vinylToggle");
  const status = document.getElementById("vinylStatus");

  if (!audio || !player || !playButton || !status) return;

  function updateVinyl() {
    const playing = !audio.paused && !audio.ended;

    player.classList.toggle("is-playing", playing);

    playButton.textContent = playing
      ? "Ⅱ Gaana Rokein"
      : "▶ Gaana Chalao";

    status.textContent = playing
      ? "Abhi aapke liye baj raha hai ♥"
      : "Gaana shuru karne ke liye play karein";
  }

  playButton.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        status.textContent = "Gaana shuru nahi hua, dobara try karein";
      }
    } else {
      audio.pause();
    }

    updateVinyl();
  });

  audio.addEventListener("play", updateVinyl);
  audio.addEventListener("pause", updateVinyl);
  audio.addEventListener("ended", updateVinyl);

  updateVinyl();
})();


/* LOVE LETTER OPEN AND CLOSE */
(() => {
  const letter = document.getElementById("loveLetter");
  const content = document.getElementById("letterContent");
  const button = document.getElementById("letterOpenBtn");

  if (!letter || !content || !button) return;

  button.addEventListener("click", () => {
    const opening = !letter.classList.contains("open");

    letter.classList.toggle("open", opening);
    content.hidden = !opening;

    button.textContent = opening
      ? "Khat band kijiye ♡"
      : "Khat kholiye ♡";
  });
})();
window.toggleLoveLetter = function () {
  const letter = document.getElementById("loveLetter");
  const content = document.getElementById("letterContent");
  const button = document.getElementById("letterOpenBtn");

  if (!letter || !content || !button) {
    console.error("Love Letter elements nahi mile");
    return;
  }

  const opening = content.hidden;

  content.hidden = !opening;
  letter.classList.toggle("open", opening);

  button.textContent = opening
    ? "Khat band kijiye ♡"
    : "Khat kholiye ♡";
};
/* BIRTHDAY CAKE INTERACTION */
(() => {
  const stage = document.getElementById("cakeStage");
  const candles = document.getElementById("cakeCandles");
  const blowButton = document.getElementById("blowCandles");
  const knife = document.getElementById("cakeKnife");
  const smoke = document.getElementById("cakeSmoke");
  const instruction = document.getElementById("cakeInstruction");
  const success = document.getElementById("cakeSuccess");

  if (!stage || !candles || !blowButton || !knife) return;

  let candlesBlown = false;
  let cakeCut = false;
  let dragging = false;
  let startX = 0;

  blowButton.addEventListener("click", () => {
    if (candlesBlown) return;

    candlesBlown = true;
    candles.classList.add("blown");
    smoke.classList.remove("show");

    void smoke.offsetWidth;
    smoke.classList.add("show");

    blowButton.textContent = "Candles Bujh Gayi ❤️";
    blowButton.disabled = true;

    instruction.textContent =
      "Ab knife ko finger se pakadkar cake par left se right le jaiye.";

    knife.classList.add("visible");
  });

  knife.addEventListener("pointerdown", event => {
    if (!candlesBlown || cakeCut) return;

    dragging = true;
    startX = event.clientX;
    knife.setPointerCapture(event.pointerId);
  });

  knife.addEventListener("pointermove", event => {
    if (!dragging || cakeCut) return;

    const rect = stage.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    knife.style.left = Math.max(
      0,
      Math.min(rect.width - knife.offsetWidth, x - 20)
    ) + "px";

    knife.style.top = Math.max(
      0,
      Math.min(rect.height - knife.offsetHeight, y - 20)
    ) + "px";

    const distance = Math.abs(event.clientX - startX);
    const overCake = y > rect.height * 0.40 && y < rect.height * 0.90;

    if (distance > 115 && overCake) {
      cutCake();
    }
  });

  knife.addEventListener("pointerup", () => {
    dragging = false;
  });

  knife.addEventListener("pointercancel", () => {
    dragging = false;
  });

  function cutCake() {
    if (cakeCut) return;

    cakeCut = true;
    dragging = false;

    stage.classList.add("cut");
    knife.classList.remove("visible");

    instruction.textContent = "Cake cut ho gaya! ❤️";

    setTimeout(() => {
      success.classList.remove("hidden");
      blowButton.classList.add("hidden");
      instruction.classList.add("hidden");

      for (let i = 0; i < 35; i++) {
        const piece = document.createElement("span");
        piece.textContent = ["💗", "✨", "🌸", "🎀"][
          Math.floor(Math.random() * 4)
        ];

        piece.style.position = "fixed";
        piece.style.left = Math.random() * 100 + "vw";
        piece.style.top = "-25px";
        piece.style.fontSize = "20px";
        piece.style.pointerEvents = "none";
        piece.style.zIndex = "99999";
        piece.style.animation = `fall ${3 + Math.random() * 2}s linear forwards`;

        document.body.appendChild(piece);
        setTimeout(() => piece.remove(), 5500);
      }
    }, 900);
  }
})();
