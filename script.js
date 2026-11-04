const lockScreen=document.getElementById('lockScreen');
const birthdayScreen=document.getElementById('birthdayScreen');
const password=document.getElementById('password');
const error=document.getElementById('error');
const audio=document.getElementById('birthdayAudio');
const musicBtn=document.getElementById('musicBtn');

function unlock(){
  if(password.value.trim()==='1911'){
    lockScreen.classList.add('hidden');
    birthdayScreen.classList.remove('hidden');
    document.body.classList.add('unlocked');
    window.scrollTo(0,0);
  }else{
    error.textContent='Password sahi nahi hai. Dobara try karo 💗';
    password.select();
  }
}
document.getElementById('unlockBtn').addEventListener('click',unlock);
password.addEventListener('keydown',e=>{if(e.key==='Enter')unlock();});

musicBtn.addEventListener('click',async()=>{
  if(audio.paused){
    try{await audio.play();musicBtn.textContent='♫ Music: ON';}
    catch(e){musicBtn.textContent='♫ Audio file add karo';}
  }else{audio.pause();musicBtn.textContent='♫ Music: OFF';}
});
document.getElementById('wishBtn').addEventListener('click',()=>{
  document.querySelector('.small-note').textContent='Wish maang li? Ab candles blow karne ka time! ✨';
  document.querySelector('.candle i').style.display='none';
  burstHearts();
});
document.getElementById('fireworkBtn').addEventListener('click',()=>{
  const fw=document.getElementById('fireworks');
  fw.classList.remove('hidden');
  setTimeout(()=>fw.classList.add('hidden'),4500);
});
function burstHearts(){
  const symbols=['♡','✦','✿','✨'];
  for(let i=0;i<18;i++){
    const el=document.createElement('span');
    el.textContent=symbols[i%symbols.length];
    el.style.cssText=`position:fixed;left:${Math.random()*100}%;top:${55+Math.random()*35}%;font-size:${18+Math.random()*22}px;color:${i%2?'#ff9dc6':'#ffe0a0'};z-index:5;pointer-events:none;transition:all 1.4s ease-out`;
    document.body.appendChild(el);
    requestAnimationFrame(()=>{el.style.transform=`translateY(-${100+Math.random()*180}px) rotate(${Math.random()*90}deg)`;el.style.opacity='0';});
    setTimeout(()=>el.remove(),1500);
  }
}
