/* ====== DONNÉES MODIFIABLES (valeurs de démonstration) ====== */
const CHIFFRES=[["Composants utilisés",0],["Fonctionnalités développées",2],["Tests réalisés",8],["Étapes du projet",1]];
const NEWS=[
 {id:1,date:"2026-11-10",cat:"Conception",titre:"Avancement de la conception mécanique",desc:"Le châssis passe en phase de validation.",texte:"La structure mécanique a été revue. Les dimensions et les points de fixation sont en cours de validation. (Texte de démonstration, à remplacer.)"},
 {id:2,date:"2026-11-03",cat:"Programmation",titre:"Nouvelle fonctionnalité : déplacement autonome",desc:"Premier programme de navigation.",texte:"Un premier algorithme de déplacement a été développé. (Texte de démonstration.)"},
 {id:3,date:"2026-10-27",cat:"Tests",titre:"Série de tests des capteurs",desc:"Vérification des mesures de distance.",texte:"Les capteurs ont été testés dans plusieurs conditions. Les résultats sont à compléter."},
 {id:4,date:"2026-10-20",cat:"Améliorations",titre:"Corrections de l'alimentation",desc:"Stabilisation de la tension.",texte:"Des corrections ont été apportées au circuit d'alimentation. (Démonstration.)"},
 {id:5,date:"2026-10-12",cat:"Conception",titre:"Choix de l'architecture électronique",desc:"Schéma général validé.",texte:"L'architecture électronique a été définie. (Démonstration.)"},
 {id:6,date:"2026-10-05",cat:"Tests",titre:"Tests des actionneurs",desc:"Essais des moteurs.",texte:"Les moteurs ont été testés à vide puis en charge. (Démonstration.)"},
 {id:7,date:"2026-09-28",cat:"Résultats",titre:"Présentation des premiers résultats",desc:"Point d'étape du projet.",texte:"Présentation intermédiaire du projet. (Démonstration.)"},
 {id:8,date:"2026-09-15",cat:"Programmation",titre:"Mise en place de l'environnement de développement",desc:"Outils et bibliothèques installés.",texte:"L'environnement logiciel est prêt. (Démonstration.)"}
];
const DOCS=[
 {cat:"Cahier des charges",titre:"Cahier des charges du projet",desc:"Besoins, contraintes et objectifs.",fmt:"PDF",f:"docs/cahier-des-charges.pdf"},
 {cat:"Schémas électroniques",titre:"Schéma électronique général",desc:"Câblage des composants.",fmt:"PDF",f:"docs/schema-electronique.pdf"},
 {cat:"Documentation technique",titre:"Documentation technique du robot",desc:"Description détaillée des sous-systèmes.",fmt:"PDF",f:"docs/documentation-technique.pdf"},
 {cat:"Programmes",titre:"Programme principal",desc:"Code de commande du robot.",fmt:"INO",f:"docs/programme-principal.ino"},
 {cat:"Notices des composants",titre:"Notice du microcontrôleur",desc:"Fiche constructeur.",fmt:"PDF",f:"docs/notice-microcontroleur.pdf"},
 {cat:"Comptes rendus de tests",titre:"Compte rendu des tests capteurs",desc:"Protocole et mesures.",fmt:"PDF",f:"docs/cr-tests-capteurs.pdf"},
 {cat:"Rapports de projet",titre:"Rapport d'avancement",desc:"Bilan intermédiaire.",fmt:"PDF",f:"docs/rapport-avancement.pdf"}
];
const TECH=[
 ["programmation","Programmation","Piloter le comportement du robot.","Le code lit les capteurs, applique une logique et commande les moteurs en boucle.","Programme de commande des déplacements.","Souplesse, mises à jour faciles.","Dépend de la qualité des tests."],
 ["electronique","Électronique","Relier et alimenter les composants.","Cartes, régulateurs et pilotes de puissance assurent le lien entre calcul et mouvement.","Câblage des moteurs, capteurs et alimentation.","Fiabilité, modularité.","Risque de court-circuit, câblage à soigner."],
 ["microcontroleurs","Microcontrôleurs","Unité de calcul embarquée.","Le microcontrôleur exécute le programme et gère les entrées/sorties.","Cerveau du robot (modèle à renseigner).","Faible coût et consommation.","Puissance de calcul limitée."],
 ["communication","Communication","Échanger des données.","Liaisons série, Bluetooth ou Wi-Fi selon le besoin.","Télécommande et retour d'informations.","Contrôle à distance.","Portée limitée, interférences."],
 ["capteurs","Capteurs","Percevoir l'environnement.","Un capteur convertit une grandeur physique en signal électrique.","Détection d'obstacles, mesures.","Autonomie accrue.","Bruit de mesure, étalonnage."],
 ["ia","Intelligence artificielle","Prendre des décisions adaptées.","Des algorithmes analysent les données pour choisir une action.","Piste d'amélioration (à préciser).","Adaptabilité.","Demande des ressources et des données."]
];
const ROBOT=[
 ["presentation","Présentation du robot","Vue d'ensemble : robot mobile pédagogique, conçu pour étudier la mécanique, l'électronique et la programmation."],
 ["structure","Structure mécanique","Châssis, roues et fixations assurant la rigidité et la mobilité."],
 ["electronique","Architecture électronique","Le microcontrôleur centralise les capteurs et pilote les actionneurs via des interfaces de puissance."],
 ["alimentation","Alimentation","Une source d'énergie et un régulateur fournissent les tensions nécessaires à chaque sous-système."],
 ["capteurs","Capteurs","Ils mesurent l'environnement (distance, ligne, etc.) et renvoient les données au microcontrôleur."],
 ["actionneurs","Actionneurs","Moteurs et dispositifs qui transforment les ordres en mouvements."],
 ["fonctionnement","Fonctionnement général","Cycle : acquisition des mesures, traitement, commande, vérification."]
];
const PROJET=[["presentation","Présentation générale"],["objectifs","Objectifs"],["cahier","Cahier des charges"],["problematique","Problématique"],["etapes","Étapes de développement"],["organisation","Organisation du travail"],["resultats","Résultats attendus"]];
const MENU=[
 ["ACCUEIL","index.html"],
 ["LE PROJET","projet.html",PROJET.map(r=>[r[1],"?p="+r[0]])],
 ["LE ROBOT","robot.html",ROBOT.map(r=>[r[1],"?p="+r[0]])],
 ["TECHNOLOGIES","technologies.html",TECH.map(t=>[t[1],"?p="+t[0]])],
 ["NOS RÉALISATIONS","realisations.html"],
 ["ACTUALITÉS","actualites.html"],
 ["DOCUMENTATION","documentation.html"],
 ["CONTACT","contact.html"]
];
const $=s=>document.querySelector(s);
const fdate=d=>new Date(d).toLocaleDateString("fr-FR",{day:"numeric",month:"long",year:"numeric"});
const page=(location.pathname.split("/").pop()||"index.html");

/* ====== HEADER / FOOTER ====== */
function header(){
 const li=MENU.map(m=>{
  const act=(m[1]===page||(page==="actualite.html"&&m[1]==="actualites.html"))?"active":"";
  const sub=m[2]?`<ul class="dropdown">${m[2].map(s=>`<li><a href="${m[1]+s[1]}">${s[0]}</a></li>`).join("")}</ul>`:"";
  return `<li><a class="${act}" href="${m[1]}">${m[0]}</a>${sub}</li>`}).join("");
 $("#site-header").outerHTML=`<header class="site-header"><div class="container header-in">
 <a class="logo" href="index.html"><strong>PROJET CLEOPARD</strong><span>Innovation, technologie et robotique</span></a>
 <button class="burger" aria-label="Menu">☰</button><nav class="nav"><ul>${li}</ul></nav></div></header>`;
 $(".burger").onclick=()=>$(".nav").classList.toggle("open");
 document.querySelectorAll(".nav>ul>li").forEach(l=>{
  const a=l.querySelector("a");
  if(l.querySelector(".dropdown"))a.addEventListener("click",e=>{
   if(innerWidth<=1000&&!l.classList.contains("open")){e.preventDefault();l.classList.add("open")}})});
}
function footer(){
 $("#site-footer").outerHTML=`<footer class="footer"><div class="container"><div class="fgrid">
 <div><h3>PROJECT CLEOPARD</h3><p>Projet pédagogique de conception, de montage et de programmation d'un robot intelligent.</p></div>
 <div><h3>Navigation</h3><ul><li><a href="projet.html">Le projet</a></li><li><a href="robot.html">Le robot</a></li><li><a href="technologies.html">Technologies</a></li><li><a href="realisations.html">Réalisations</a></li></ul></div>
 <div><h3>Liens utiles</h3><ul><li><a href="actualites.html">Actualités</a></li><li><a href="documentation.html">Documentation</a></li><li><a href="contact.html">Contact</a></li><li><a href="#" onclick="alert('Mentions légales : à compléter.');return false">Mentions légales</a></li></ul></div>
 <div><h3>Coordonnées</h3><p>Groupe : <em>Katharina Grare,Nolan Delaloy,Valentin Lorot Petit,Ilian Buchaniec</em><br>E-mail : <em>kgrare@lyceejacquesprevert.fr</em><br>Date projet : <em>2026-2028</em></p></div></div>
 <div class="copy">© ${new Date().getFullYear()} PROJECT CLEOPARD – Tous droits réservés</div></div></footer><button id="top" title="Haut de page">↑</button>`;
 const t=$("#top");t.onclick=()=>scrollTo({top:0,behavior:"smooth"});
 addEventListener("scroll",()=>t.style.display=scrollY>300?"block":"none");
}

/* ====== ACCUEIL ====== */
function newsCard(n){return `<article class="card"><div class="meta">${fdate(n.date)}<span class="tag">${n.cat}</span></div><h3>${n.titre}</h3><p>${n.desc}</p><a class="more" href="actualite.html?id=${n.id}">Consulter →</a></article>`}
function stats(){const e=$("#stats");if(!e)return;
 e.innerHTML=CHIFFRES.map(c=>`<div class="stat"><b data-n="${c[1]}">0</b>${c[0]}</div>`).join("");
 e.querySelectorAll("b").forEach(b=>{let v=0,n=+b.dataset.n;const i=setInterval(()=>{b.textContent=++v;if(v>=n)clearInterval(i)},60)})}
function home(){const e=$("#newsHome");if(e)e.innerHTML=NEWS.slice(0,3).map(newsCard).join("")}

/* ====== ACTUALITÉS ====== */
function news(){const e=$("#newsList");if(!e)return;
 const cats=["Toutes",...new Set(NEWS.map(n=>n.cat))];let cat="Toutes",p=1;const SIZE=3;
 function draw(){
  const L=NEWS.filter(n=>cat==="Toutes"||n.cat===cat),pages=Math.ceil(L.length/SIZE);
  $("#filters").innerHTML=cats.map(c=>`<button class="${c===cat?"on":""}">${c}</button>`).join("");
  $("#filters").querySelectorAll("button").forEach(b=>b.onclick=()=>{cat=b.textContent;p=1;draw()});
  e.innerHTML=L.slice((p-1)*SIZE,p*SIZE).map(newsCard).join("");
  $("#pager").innerHTML=Array.from({length:pages},(_, i)=>`<button class="${i+1===p?"on":""}">${i+1}</button>`).join("");
  $("#pager").querySelectorAll("button").forEach((b,i)=>b.onclick=()=>{p=i+1;draw()})}
 draw()}
function newsDetail(){const e=$("#newsDetail");if(!e)return;
 const n=NEWS.find(x=>x.id==new URLSearchParams(location.search).get("id"))||NEWS[0];
 document.title=n.titre;
 e.innerHTML=`<div class="meta">${fdate(n.date)}<span class="tag">${n.cat}</span></div><h1>${n.titre}</h1><p><strong>${n.desc}</strong></p><p>${n.texte}</p><a class="btn" href="actualites.html">← Retour aux actualités</a>`}

/* ====== DOCUMENTATION ====== */
function docs(){const e=$("#docs");if(!e)return;
 const cats=["Toutes",...new Set(DOCS.map(d=>d.cat))];let cat="Toutes";
 function draw(){
  const q=$("#q").value.toLowerCase();
  $("#dfilters").innerHTML=cats.map(c=>`<button class="${c===cat?"on":""}">${c}</button>`).join("");
  $("#dfilters").querySelectorAll("button").forEach(b=>b.onclick=()=>{cat=b.textContent;draw()});
  const L=DOCS.filter(d=>(cat==="Toutes"||d.cat===cat)&&(d.titre+d.desc+d.cat).toLowerCase().includes(q));
  e.innerHTML=L.length?L.map(d=>`<div class="doc"><div><h3>${d.titre}</h3><p>${d.desc}</p><span class="tag" style="margin:6px 0 0">${d.cat}</span><span class="tag">${d.fmt}</span></div><div><a class="btn" href="${d.f}" target="_blank">Consulter</a><a class="btn light" style="color:var(--blue);border-color:var(--blue)" href="${d.f}" download>Télécharger</a></div></div>`).join(""):"<p>Aucun document trouvé.</p>"}
 $("#q").oninput=draw;draw()}

/* ====== TECHNOLOGIES / ROBOT ====== */
function tech(){const e=$("#tech");if(!e)return;
 e.innerHTML=TECH.map(t=>`<section class="block" id="${t[0]}"><h2 class="section-title">${t[1]}</h2>
 <div class="grid two"><div class="card"><h3>Rôle dans le projet</h3><p>${t[2]}</p></div><div class="card"><h3>Fonctionnement</h3><p>${t[3]}</p></div>
 <div class="card"><h3>Utilisation sur le robot</h3><p>${t[4]}</p></div><div class="card"><h3>Avantages / Limites</h3><p><strong>+</strong> ${t[5]}<br><strong>−</strong> ${t[6]}</p></div></div></section>`).join("")}
function robot(){const e=$("#robotSections");if(!e)return;
 e.innerHTML=ROBOT.map(r=>`<section class="block" id="${r[0]}"><h2 class="section-title">${r[1]}</h2><p>${r[2]}</p>
 <div class="table-wrap"><table><tr><th>Composant</th><th>Caractéristiques</th><th>Fonction</th><th>Connexion</th></tr>
 <tr><td contenteditable>Référence à renseigner</td><td contenteditable>À renseigner</td><td contenteditable>À renseigner</td><td contenteditable>À renseigner</td></tr>
 <tr><td contenteditable>Référence à renseigner</td><td contenteditable>À renseigner</td><td contenteditable>À renseigner</td><td contenteditable>À renseigner</td></tr></table></div></section>`).join("")}

/* ====== SOUS-PAGES (?p=nom) : n'affiche que la section demandée ====== */
function sousPages(){
 const p=new URLSearchParams(location.search).get("p");if(!p)return;
 const all=document.querySelectorAll("main section.block");
 const cible=document.querySelector('main section.block[id="'+p+'"]');
 if(!all.length||!cible)return;
 all.forEach(s=>{if(s!==cible)s.style.display="none"});
 const t=cible.querySelector("h2");
 const bc=document.querySelector(".breadcrumb .container");
 if(t&&bc)bc.innerHTML+=` <span>›</span> ${t.textContent}`;
 if(t)document.title=t.textContent+" – ROBOT PROJECT";
 const c=document.querySelector("main .section .container");
 if(c)c.insertAdjacentHTML("afterbegin",`<p><a class="btn" href="${page}">← Voir toute la page</a></p>`);
}

/* ====== COLORATION CODE ====== */
function highlight(){document.querySelectorAll("pre code").forEach(c=>{
 let t=c.textContent.replace(/&/g,"&amp;").replace(/</g,"&lt;");
 t=t.replace(/(\/\/.*)|\b(void|int|if|else|while|for|return|const|float)\b|\b(\d+)\b|("[^"]*")/g,(m,a,b,n,s)=>a?`<span class="c">${a}</span>`:b?`<span class="k">${b}</span>`:n?`<span class="n">${n}</span>`:`<span class="s">${s}</span>`);
 c.innerHTML=t})}

/* ====== CONTACT ====== */
function contact(){const f=$("#contactForm");if(!f)return;
 f.onsubmit=e=>{e.preventDefault();let ok=true;
  f.querySelectorAll(".err").forEach(x=>x.textContent="");
  const err=(n,m)=>{f.querySelector(`[data-e=${n}]`).textContent=m;ok=false};
  ["nom","prenom","sujet","message"].forEach(n=>{if(!f[n].value.trim())err(n,"Champ obligatoire.")});
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.value))err("email","Adresse e-mail invalide.");
  if(!f.consent.checked)err("consent","Votre consentement est requis.");
  if(ok){$("#confirm").style.display="block";f.reset()}}}

document.addEventListener("DOMContentLoaded",()=>{header();footer();stats();home();news();newsDetail();docs();tech();robot();highlight();contact();sousPages()});