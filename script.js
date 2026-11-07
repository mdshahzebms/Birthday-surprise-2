const lock=document.getElementById('lockScreen'),page=document.getElementById('birthdayScreen'),pass=document.getElementById('password'),audio=document.getElementById('birthdayAudio'),music=document.getElementById('musicBtn');
function unlock(){if(pass.value.trim()==='1911'){lock.classList.add('hidden');page.classList.remove('hidden');scrollTo(0,0)}else{document.getElementById('error').textContent='Code sahi nahi hai, ek baar phir koshish karo ♡';pass.select()}}
document.getElementById('unlockBtn').onclick=unlock;pass.onkeydown=e=>{if(e.key==='Enter')unlock()};
const reasons=['Aapki muskurahat aam din ko bhi khaas bana deti hai.','Aap apne andaaz mein bilkul alag ho.','Aapki chhoti chhoti khushiyan bhi keemti hain.','Aapke sapne bahut khoobsurat hain.','Aap jis tarah apni baat kehti ho, woh khaas hai.','Aapki maujoodgi se pal yaadgaar ban jaate hain.','Aap hamesha apni roshni lekar aati ho.','Aapki hasi mein ek alag si mithaas hai.','Aapki har nayi shuruaat khoobsurat ho.','Aap bas aap ho — aur wahi kaafi khaas hai.','Aapki achhai aapki pyari pehchaan hai.','Aapke liye dher saari khushiyan honi chahiye.','Aap mushkil din mein bhi umeed dhoond leti ho.','Aapka andaaz apna aur khaas hai.','Aapke hone se yaadein haseen lagti hain.'];
let n=0;function showReason(){document.getElementById('reasonNumber').textContent=String(n+1).padStart(2,'0');document.getElementById('reasonText').textContent=reasons[n%reasons.length]}
document.getElementById('nextReason').onclick=()=>{n=(n+1)%100;showReason()};document.getElementById('prevReason').onclick=()=>{n=(n+99)%100;showReason()};
document.getElementById('letterBtn').onclick=()=>{let p=document.getElementById('letterPaper');p.classList.toggle('open');document.getElementById('letterBtn').textContent=p.classList.contains('open')?'Khat band karo':'Khat kholo ♡'};
music.onclick=async()=>{if(audio.paused){try{await audio.play();music.textContent='♫ Gaana band karo';document.getElementById('songStatus').textContent='Abhi gaana chal raha hai ♡'}catch(e){document.getElementById('songStatus').textContent='Gaane ki file ka naam aur jagah check karo.'}}else{audio.pause();music.textContent='♫ Gaana chalao';document.getElementById('songStatus').textContent='Gaana rok diya gaya hai.'}};
audio.onended=()=>{music.textContent='♫ Gaana chalao'};audio.ontimeupdate=()=>{if(audio.duration)document.querySelector('.track span').style.width=(audio.currentTime/audio.duration*100)+'%'};
function confetti(){let c=document.getElementById('confetti');['♡','✦','✿','•'].forEach((s,j)=>{for(let i=0;i<12;i++){let e=document.createElement('span');e.className='piece';e.textContent=s;e.style.left=Math.random()*100+'%';e.style.animationDelay=Math.random()+'s';e.style.color=['#e6a8c0','#d6b77d','#fff'][j%3];c.appendChild(e);setTimeout(()=>e.remove(),3500)}})}
document.getElementById('wishBtn').onclick=()=>{document.querySelector('.note').textContent='Aapki har achhi wish poori ho ✨';confetti()};
document.getElementById('envelopeBtn').onclick=()=>{let e=document.getElementById('envelopeBtn');e.classList.toggle('open');document.getElementById('envelopeHint').textContent=e.classList.contains('open')?'Aapke liye dil se ek paighaam ♡':'Lifafe par tap karke kholo'};
const wishes=['Aapke har din mein sukoon aur khushi ho.','Aapke sapne ek-ek karke poore hon.','Aapko hamesha achhe logon ka saath mile.','Aapki muskurahat kabhi kam na ho.','Har nayi subah ek nayi umeed laaye.','Aap apne aap par hamesha fakhr kar sako.','Aapki mehnat ko khoobsurat manzil mile.','Aapke dil ko hamesha sukoon mile.','Aapki zindagi yaadon se roshan rahe.','Aane wala saal aapke liye behtareen ho.'];
let lastWish=-1;document.getElementById('drawWish').onclick=()=>{let i;do{i=Math.floor(Math.random()*wishes.length)}while(i===lastWish);lastWish=i;document.getElementById('jarWish').textContent=wishes[i]+' ♡';document.getElementById('wishJar').classList.add('shake');setTimeout(()=>document.getElementById('wishJar').classList.remove('shake'),500);confetti()};
document.getElementById('blowCandle').onclick=()=>{document.getElementById('flame').classList.add('out');document.getElementById('candleMessage').textContent='Aapki har achhi wish ko poora hone ka mauka mile. ✨';document.getElementById('blowCandle').textContent='Wish bhej di ♡';confetti()};
function surprise(){document.getElementById('surpriseModal').classList.remove('hidden');confetti()}
document.getElementById('fireworkBtn').onclick=surprise;['closeModal','modalOk'].forEach(id=>document.getElementById(id).onclick=()=>document.getElementById('surpriseModal').classList.add('hidden'));document.getElementById('surpriseModal').onclick=e=>{if(e.target.id==='surpriseModal')e.currentTarget.classList.add('hidden')};showReason();
// FEATURE 6: STARS
document.querySelectorAll('.star-point').forEach(star => {
  star.onclick = () => {
    document.getElementById('starMessage').textContent =
      star.dataset.message;
  };
});

// FEATURE 7: OPEN WHEN LETTERS
document.querySelectorAll('.when-open').forEach(btn => {
  btn.onclick = () => {
    const message = btn.parentElement.querySelector('p');
    message.textContent = btn.dataset.message;
    btn.textContent = 'Paighaam khul gaya ♡';
  };
});

// FEATURE 8: POLAROID
document.querySelectorAll('.polaroid').forEach(card => {
  card.onclick = () => {
    document.getElementById('polaroidMessage').textContent =
      card.dataset.caption;
  };
});

// FEATURE 9: TREASURE HUNT
const treasureClues = [
  'Clue 1: Jahan gaana bajta hai, wahan agla raaz chhupa hai.',
  'Clue 2: Ab us jagah jao jahan ek khat aapka intezaar karta hai.',
  'Clue 3: Aakhri surprise isi page ke aakhri hisse mein hai.'
];

let treasureIndex = 0;

document.getElementById('treasureNext').onclick = () => {
  treasureIndex++;

  if (treasureIndex < treasureClues.length) {
    document.getElementById('treasureClue').textContent =
      treasureClues[treasureIndex];

    document.getElementById('treasureIcon').textContent =
      ['🗝️', '✉️', '⭐'][treasureIndex];
  } else {
    document.getElementById('treasureClue').textContent =
      'Aap hi is kahani ka sabse khoobsurat treasure ho. Janamdin mubarak, Bushra! ♡';

    document.getElementById('treasureIcon').textContent = '💝';
    document.getElementById('treasureResult').textContent =
      '✧ TREASURE FOUND ✧';

    document.getElementById('treasureNext').disabled = true;
    document.getElementById('treasureNext').textContent = 'Mil gaya ♡';

    confetti();
  }
};

// FEATURE 10: BIRTHDAY COUNTDOWN
const birthdayInput = document.getElementById('birthdayDate');
let countdownInterval;

function updateCountdown() {
  if (!birthdayInput.value) return;

  const now = new Date();
  const parts = birthdayInput.value.split('-').map(Number);

  let target = new Date(
    now.getFullYear(), parts[1] - 1, parts[2], 0, 0, 0
  );

  if (target <= now) {
    target = new Date(
      now.getFullYear() + 1, parts[1] - 1, parts[2], 0, 0, 0
    );
  }

  let diff = target - now;

  const days = Math.floor(diff / 86400000);
  diff %= 86400000;

  const hours = Math.floor(diff / 3600000);
  diff %= 3600000;

  const minutes = Math.floor(diff / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);

  document.getElementById('cdDays').textContent = days;
  document.getElementById('cdHours').textContent = hours;
  document.getElementById('cdMinutes').textContent = minutes;
  document.getElementById('cdSeconds').textContent = seconds;

  document.getElementById('countdownMessage').textContent =
    'Agle birthday tak ka intezaar shuru ♡';
}

birthdayInput.onchange = () => {
  clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
};

// FEATURE 11: VINYL MUSIC PLAYER
document.getElementById('vinylPlayBtn').onclick = async () => {
  if (audio.paused) {
    try {
      await audio.play();
      document.getElementById('vinylPlayBtn').textContent =
        '♫ Gaana band karo';
      document.getElementById('vinylDisc').classList.add('spinning');
    } catch (error) {
      document.getElementById('songStatus').textContent =
        'Gaane ki file ka naam aur jagah check karo.';
    }
  } else {
    audio.pause();
    document.getElementById('vinylPlayBtn').textContent =
      '♫ Gaana chalao';
    document.getElementById('vinylDisc').classList.remove('spinning');
  }
};

audio.addEventListener('play', () => {
  document.getElementById('vinylDisc').classList.add('spinning');
});

audio.addEventListener('pause', () => {
  document.getElementById('vinylDisc').classList.remove('spinning');
});

// FEATURE 12: VIRTUAL CAKE
document.getElementById('addCakeCandle').onclick = () => {
  const holder = document.getElementById('cakeCandles');

  if (holder.children.length >= 9) {
    document.getElementById('cakeMessage').textContent =
      'Cake par kaafi candles ho gayi hain! ♡';
    return;
  }

  const candle = document.createElement('span');
  candle.className = 'cake-candle';
  candle.innerHTML = '<i></i>';
  holder.appendChild(candle);
};

document.getElementById('blowCakeCandles').onclick = () => {
  document.querySelectorAll('.cake-candle').forEach(candle => {
    candle.classList.add('out');
  });

  document.getElementById('cakeMessage').textContent =
    'Aapki har achhi wish ko pankh milein! ✨';

  confetti();
};

// FEATURE 13: FORTUNE COOKIE
const fortunes = [
  'Aane wale dino mein ek khoobsurat mauka aapka intezaar kar raha hai.',
  'Aapki mehnat aur sabr ek din zaroor rang layenge.',
  'Aaj kisi apne ko muskurane ki wajah dena.',
  'Nayi shuruaat ke liye kabhi der nahi hoti.',
  'Aapki zindagi mein sukoon aur khushiyan badhti rahein.',
  'Ek chhoti si khushi aaj aapka din bana sakti hai.'
];

let lastFortune = -1;

document.getElementById('fortuneCookie').onclick = () => {
  let index;

  do {
    index = Math.floor(Math.random() * fortunes.length);
  } while (index === lastFortune);

  lastFortune = index;

  document.getElementById('fortuneMessage').textContent =
    fortunes[index] + ' ♡';
};

// FEATURE 14: MAGIC EFFECTS
document.getElementById('magicButton').onclick = () => {
  const layer = document.getElementById('magicLayer');
  const symbols = ['✿', '✧', '♡', '❀', '✦'];

  for (let i = 0; i < 28; i++) {
    const petal = document.createElement('span');

    petal.className = 'magic-petal';
    petal.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() + 's';
    petal.style.color = ['#d98dab', '#e5b7c8', '#d6b77d'][i % 3];

    layer.appendChild(petal);

    setTimeout(() => petal.remove(), 5000);
  }

  document.getElementById('magicMessage').textContent =
    'Aapke liye khushiyon ki baarish ♡';
};

// FEATURE 15: INTERACTIVE TIMELINE
document.querySelectorAll('.timeline-item').forEach(item => {
  item.onclick = () => {
    item.classList.toggle('active');

    const sign = item.querySelector('span');
    sign.textContent = item.classList.contains('active') ? '−' : '+';
  };
});
