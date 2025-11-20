const papirHotspot = document.querySelector("#papirHotspot");
const emailHotspot = document.querySelector("#emailHotspot");
const benHotspot = document.querySelector("#benHotspot");

const infobox1 = document.querySelector("#ib1");
const infobox2 = document.querySelector("#ib2");

const darkmode = document.querySelector("#darkmode");
const html = document.querySelector("html");
// html.classList.add("dark");

function toggleTheme() {
  console.log("switching dark");
  html.classList.toggle("dark");
}

darkmode.addEventListener("click", toggleTheme);

/**ANIM CLEANUP **/
/***ANIMATION ****/
infobox1.addEventListener("animationend", fadedIn);
function fadedIn() {
  console.log("Has Faded");
  infobox1.classList.remove("fadeIn");
}

/***Fjerner lige border *******/
papirHotspot.style.stroke = "none";
benHotspot.style.stroke = "none";
emailHotspot.style.stroke = "none";

/************************ EKSLUSIVT PAPIR HOTSPOT **********************/

console.log(papirHotspot);

papirHotspot.addEventListener("mouseover", hotHover1);

function hotHover1() {
  console.log("musen er over papirHotspot");
  papirHotspot.style.fill = "var(--light-blue)";
  //
  //   papirHotspot.style.translate += "20px";
  //   papirHotspot.style.transition = "fill 1s";
}

papirHotspot.addEventListener("mouseout", hotNotHover1);
function hotNotHover1() {
  console.log("mouse er ikke laengere over papirHotspot");
  papirHotspot.style.fill = "var(--contrast-orange)";
  //   papirHotspot.style.transition = "all 1s";
}

papirHotspot.addEventListener("click", clickPapir);
function clickPapir() {
  infobox1.classList.add("hide");
  infobox2.classList.add("hide");
  infobox1.classList.add("fadeIn");
  infobox1.classList.remove("hide");
  infobox2.classList.add("fadeIn");
  infobox2.classList.remove("hide");
  console.log("I AM CLICKED PAPIR HOTSPOT");

  infobox1.innerHTML = `<details name="pjapir">
  <summary><h3>Hundens lektie-advarsel #1</h3></summary>
  <div>
<p class="ibp">
Hold øje med <strong>snusende snuder</strong> og <em>ivrig logren</em> omkring skoletasken.  
Hvis hunden stirrer intenst på dine papirer og slikker sig om munden,  
så planlægger den sandsynligvis en <strong>lektiefest</strong>!
</p></div>
</details>`;
  infobox2.innerHTML = `<details name="pjapir"><summary><h3>Hundens lektie-advarsel #2</h3></summary>
<p class="ibp">
Læg mærke til, hvis hunden begynder at <em>gø på matematikbogen</em>  
eller “hjælper” med danskstilen ved at tygge på blyanten.  
Det er klare tegn på, at den snart <strong>starter sin natlige snack-session</strong> – med dine lektier som hovedret.
</p>
</div>
</details>`;

  document.querySelector(".info-text > h2").textContent = "Kend tegnene";
  document.querySelector("article > p").textContent = "Lidt om din hund";
}
/***ANIMATION ****/
infobox1.addEventListener("animationend", fadedIn);
function fadedIn() {
  console.log("Has Faded");
  infobox1.classList.remove("fadeIn");
  infobox2.classList.remove("fadeIn");
}

/**********************EKSLUSIVT BEN HOTSPOT ********************/
console.log(benHotspot);

benHotspot.addEventListener("mouseover", hotHover2);

function hotHover2() {
  console.log("musen er over benHotspot");
  benHotspot.style.fill = "var(--light-blue)";

  //   benHotspot.style.translate += "20px";
  //   benHotspot.style.transition = "fill 2s";
}

benHotspot.addEventListener("mouseout", hotNotHover2);
function hotNotHover2() {
  console.log("mouse er ikke laengere over benHotspot");
  benHotspot.style.fill = "var(--contrast-orange)";
  //   benHotspot.style.transition = "all 2s";//
}
benHotspot.addEventListener("click", clickben);
function clickben() {
  console.log("I AM CLICKED ben HOTSPOT");
  infobox1.classList.add("hide");
  infobox2.classList.add("hide");
  infobox1.classList.add("fadeIn");
  infobox1.classList.remove("hide");
  infobox2.classList.add("fadeIn");
  infobox2.classList.remove("hide");

  infobox1.innerHTML = `<details name="tygge"><summary><h3>Giv hunden en tyggeven</h3></summary>
<div>
  <p class="ibp">
Udskift dine lektier med noget mere hundevenligt!  
Giv din hund et <strong>tyggeben, en bamse eller en gammel sok</strong>, før du begynder at lave lektier.  
Hvis den har noget bedre at gnave i, lader den oftere dine papirer være i fred.
</p>
</div>
</details>`;
  infobox2.innerHTML = `<details name="tygge"><summary><h3>Gør lektier kedelige (for hunden!)</h3></summary>
<div>
  <p class="ibp">
Sprøjt lidt <em>citronvand eller eddike</em> på hjørnet af dine papirer –  
hunde hader den lugt!  
Så smager dansk grammatik pludselig <strong>mindre som kylling</strong> og mere som “ad!”.
</p>
</div>
</details>`;
  document.querySelector(".info-text > h2").textContent = "Taktikker";
  document.querySelector("article > p").textContent = "Hvad du kan gøre";
}
/***************************EKSLUSIVT EMAIL HOTSPOT ***********************/
console.log(emailHotspot);

emailHotspot.addEventListener("mouseover", hotHover3);

function hotHover3() {
  console.log("musen er over emailHotspot");
  emailHotspot.style.fill = "var(--light-blue)";

  //   emailHotspot.style.translate += "30px";
  //   emailHotspot.style.transition = "fill 3s";
}

emailHotspot.addEventListener("mouseout", hotNotHover3);
function hotNotHover3() {
  console.log("mouse er ikke laengere over emailHotspot");
  emailHotspot.style.fill = "var(--contrast-orange)";
  //   emailHotspot.style.transition = "all 3s";//
}
emailHotspot.addEventListener("click", clickEmail);
function clickEmail() {
  console.log("I AM CLICKED email HOTSPOT");
  infobox1.classList.add("hide");
  infobox2.classList.add("hide");
  infobox1.classList.add("fadeIn");
  infobox1.classList.remove("hide");
  infobox2.classList.add("fadeIn");
  infobox2.classList.remove("hide");

  infobox1.innerHTML = `<details name="beskyt"><summary><h3>Beskyt dine lektier</h3></summary>
  <div>
<p class="ibp">
Opbevar dine lektier i en <strong>plastikmappe eller lynlåspose</strong> – helst lugtfri.  
Læg tasken højt oppe, hvor hunden ikke kan nå, og undgå at have madrester i nærheden.  
En sulten hund ser ingen forskel på et madpapir og et fysikprojekt!
</p></div>
</details>`;
  infobox2.innerHTML = `<details name="beskyt"><summary><h3>Hvis skaden ER sket...</h3></summary>
  <div>
  <img src="./img/laererGraf.svg" alt="graf over læreres response">
<p class="ibp">
Forklar læreren sandheden – men gør det med humor:  
<em>“Min hund troede, at min stil var en snack med ekstra kommaer.”</em>  
Vis evt. de <strong>tandmærkede sider</strong> som bevis.  
Det hjælper, hvis du har et billede af den skyldige med skyldige øjne.
</p></div>
</details>`;
  // document.querySelector(".info-text > h3").textContent = "Hvordan man beskytter lektierne eller forklarer læreren";
  document.querySelector(".info-text > h2").textContent = "Før og efter";
  document.querySelector("article > p").textContent = "Inden hunden fanger..";

  /*DOGTAIL ANIMATION*/
  // document.querySelector("#dogHead").addEventListener("click", tailWag);
  // function tailWag() {
  //   console.log("I AM WAGGIN");
  //   document.querySelector("#dogTail").classList.add("tailWag");
  // }
  // document.querySelector("#dogTail").addEventListener("animationend", wagEnded);
  // function wagEnded() {
  //   console.log("I AM STOPPED WAGGIN");
  //   document.querySelector("#dogTail").classList.remove("tailWag");
}
