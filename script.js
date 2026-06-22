// Ticker content
const tickerItems = [
  {pair:'EURUSD', val:'1.14725', chg:'-0.42%', dir:'down'},
  {pair:'GBPUSD', val:'1.26891', chg:'+0.18%', dir:'up'},
  {pair:'USDJPY', val:'148.32', chg:'+0.65%', dir:'up'},
  {pair:'XAUUSD', val:'2,418.50', chg:'+1.12%', dir:'up'},
  {pair:'BSL', val:'SWEPT', chg:'1.17900', dir:'down'},
  {pair:'SSL', val:'TARGET', chg:'1.14110', dir:'down'},
  {pair:'WIN RATE', val:'67%', chg:'CORE FRAMEWORK', dir:'up'},
];
const track = document.getElementById('tickerTrack');
function buildTicker(){
  let html = '';
  for(let r=0;r<2;r++){
    tickerItems.forEach(t=>{
      html += `<span class="ticker-item">${t.pair} <b>${t.val}</b> <span class="ticker-${t.dir}">${t.chg}</span></span>`;
    });
  }
  track.innerHTML = html;
}
buildTicker();

// Build vault spokes (gear-like radial lines around the vault door)
function buildVaultSpokes(){
  const container = document.getElementById('vaultSpokes');
  if(!container) return;
  const count = 8;
  let html = '';
  for(let i=0;i<count;i++){
    const angle = (360/count)*i;
    html += `<div class="vault-spoke" style="transform:rotate(${angle}deg);"></div>`;
  }
  container.innerHTML = html;
}
buildVaultSpokes();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
  });
}, {threshold:0.12});
revealEls.forEach(el=>io.observe(el));

// Smooth nav anchor offset (since fixed nav)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      window.scrollTo({top: target.offsetTop - 64, behavior:'smooth'});
    }
  });
});
