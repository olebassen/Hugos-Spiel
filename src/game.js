// ===== Canvas Setup =====
const cvs = document.getElementById("game");
const ctx = cvs.getContext("2d");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

// ===== Bossnamen (100 Stück) =====
const bossNames = [
  "Knochenfürst Morvain", "Seuchenkönig Dargoth", "Blutklinge Varros", "Gräfin der Finsternis Selvara",
  "Schattenlord Tharion", "Zerfleischer Kragmor", "Nekromag Azhural", "Pestbringer Varkun",
  "Leichenkaiser Droth", "Höllenritter Malrik",
  "Kettenbrecher Skorn", "Dunkelpriester Morvak", "Schlachtruf Gorrath", "Axt des Untergangs Throndar",
  "Schwarzseher Vulmoth", "Seelensammler Krynn", "Leidensbote Marvak", "Bestienfürst Zorath",
  "Knochensänger Ulgar", "Verwesungsherr Naroth",
  "Verderbnisfürst Malthar", "Schwarzklaue Dragan", "Flammengeißel Ruvak", "Todbringer Sarnok",
  "Eisenfaust Vorgar", "Seelenreißer Kravok", "Schattenschlag Lormar", "Blutwolf Vargrim",
  "Hassflamme Korvak", "Grimmfaust Thrakar",
  "Totensänger Volgrin", "Schädelspalter Drakor", "Seuchenschwinge Morgrath", "Verderbniskralle Skulgar",
  "Seelenwürger Vornak", "Höllenfaust Graskar", "Zerreißer Malgrim", "Fluchträger Azrok",
  "Grabräuber Volnoth", "Seelenpein Drovak",
  "Schattenpeitsche Lorvak", "Schwarzspeer Nargrim", "Leichenwurm Mokthar", "Seelenfaust Zarnok",
  "Gräberkönig Thrall", "Feuerklaue Morvak", "Seelenschinder Vulgor", "Schwarzblut Orvak",
  "Blutmaul Karnok", "Finsterschwinge Dragath",
  "Schattenspeer Torvak", "Schwarzschwinge Ulgar", "Seelenkrähe Morvak", "Flammenwolf Karoth",
  "Fäulnisklaue Vorgrath", "Knochenspalter Zolgar", "Schattenwolf Naroth", "Blutgeier Tharvak",
  "Schwarzgeißel Ulgrim", "Kettenwolf Skarvak",
  "Seuchenmaul Dravok", "Grimmkralle Vorthak", "Schattenschnabel Lorgar", "Pestklaue Marvak",
  "Blutklaue Skorn", "Flammenkralle Vrogath", "Schattenklaue Narkoth", "Schwarzzahn Vargrim",
  "Seelenspeer Korvak", "Dunkelklaue Thrakar",
  "Finsterspeer Molgar", "Seelenklaue Vorgrim", "Schwarzkrähe Drogath", "Knochenschnabel Sarnok",
  "Schattenschädel Zornak", "Flammenfaust Kravok", "Schattenschnitter Lornak", "Seelenwolf Thrakar",
  "Pestwolf Margrim", "Schattenschnabel Vulgar",
  "Schattenkralle Krathor", "Seelenpeitsche Volgar", "Schattenspeer Dragor", "Pestgeißel Kravath",
  "Blutgeißel Vornak", "Knochenwolf Skornar", "Seelenwolf Lorgath", "Finsterschwinge Narvak",
  "Schattenwolf Dragar", "Schattenspeer Volnoth",
  "Seelenpein Korgrim", "Schattenflamme Voknar", "Schattenschlag Throrn", "Schwarzwolf Kragnar",
  "Schattenwolf Vornak", "Schattenwolf Lorthar", "Schattenwolf Gragnar", "Letzter Feind"
];

// ===== Waffenliste (20 Stück, deutsch) =====
const weapons = [
  { name: "Kiesel", dmg: 5, rate: 300, spread: 0.05, color: "white", type: "melee", speed: 10 },
  { name: "Felsbrocken", dmg: 7, rate: 350, spread: 0.05, color: "gray", type: "melee", speed: 10 },
  { name: "Wurfmesser", dmg: 10, rate: 250, spread: 0.05, color: "silver", type: "melee", speed: 10 },
  { name: "Zwille", dmg: 15, rate: 300, spread: 0.03, color: "silver", type: "melee", speed: 10 },
  { name: "Wurfaxt", dmg: 20, rate: 400, spread: 0.03, color: "lightgray", type: "melee", speed: 10 },
  { name: "Pistole", dmg: 12, rate: 250, spread: 0.05, color: "yellow", type: "bullet", speed: 12 },
  { name: "Revolver", dmg: 15, rate: 300, spread: 0.04, color: "orange", type: "bullet", speed: 12 },
  { name: "Maschinenpistole", dmg: 8, rate: 100, spread: 0.08, color: "lightblue", type: "bullet", speed: 12 },
  { name: "Schrotflinte", dmg: 20, rate: 500, spread: 0.15, color: "brown", type: "shotgun", speed: 12, pellets: 5 },
  { name: "Doppelläufige Flinte", dmg: 25, rate: 700, spread: 0.18, color: "darkred", type: "shotgun", speed: 12, pellets: 6 },
  { name: "Sturmgewehr", dmg: 14, rate: 120, spread: 0.05, color: "green", type: "bullet", speed: 13 },
  { name: "Präzisionsgewehr", dmg: 30, rate: 800, spread: 0.01, color: "blue", type: "bullet", speed: 14 },
  { name: "Raketenwerfer", dmg: 50, rate: 1500, spread: 0.02, color: "red", type: "bullet", speed: 8 },
  { name: "Lasergewehr", dmg: 18, rate: 80, spread: 0.00, color: "cyan", type: "bullet", speed: 15 },
  { name: "Flammenwerfer", dmg: 5, rate: 50, spread: 0.2, color: "orange", type: "bullet", speed: 6 },
  { name: "Energiekanone", dmg: 40, rate: 1000, spread: 0.02, color: "purple", type: "bullet", speed: 12 },
  { name: "Kettensäge", dmg: 35, rate: 100, spread: 0.05, color: "orange", type: "melee", speed: 8 },
  { name: "Granatwerfer", dmg: 45, rate: 1200, spread: 0.05, color: "darkgreen", type: "bullet", speed: 9 },
  { name: "Armbrust", dmg: 22, rate: 700, spread: 0.01, color: "gold", type: "bullet", speed: 10 },
  { name: "Plasmagewehr", dmg: 28, rate: 300, spread: 0.03, color: "magenta", type: "bullet", speed: 13 }
];

// ===== Spielzustand =====
const state = {
  player: { x: cvs.width/2, y: cvs.height/2, speed: 3, hp: 100, maxHp: 100, weapon: 0, fireCd: 0, aim: {x:1,y:0} },
  bullets: [],
  zombies: [],
  boss: null,
  level: 1,
  kills: 0,
  inBossPhase: false
};
// ===== Sprite-Erstellung =====
function makeSprite(color){
  let c = document.createElement("canvas");
  c.width = 32; c.height = 32;
  let ct = c.getContext("2d");
  ct.fillStyle = color;
  ct.beginPath();
  ct.arc(16, 16, 14, 0, Math.PI*2);
  ct.fill();
  return c;
}
const Sprites = {
  player: makeSprite("white"),
  zombie: makeSprite("green"),
  bosses: bossNames.map((n,i)=> makeSprite(`hsl(${(i*37)%360},70%,50%)`))
};

// ===== Steuerung =====
const keys = new Set();
document.addEventListener("keydown", e => keys.add(e.key.toLowerCase()));
document.addEventListener("keyup", e => keys.delete(e.key.toLowerCase()));

const stick = document.getElementById("stick");
const nub = document.getElementById("nub");
let stickActive = false;
let stickOrigin = {x:0,y:0};
let stickVector = {x:0,y:0};

stick.addEventListener("touchstart", e=>{
  e.preventDefault();
  stickActive = true;
  const t = e.touches[0];
  stickOrigin = {x:t.clientX, y:t.clientY};
});
stick.addEventListener("touchmove", e=>{
  e.preventDefault();
  if(!stickActive) return;
  const t = e.touches[0];
  const dx = t.clientX - stickOrigin.x;
  const dy = t.clientY - stickOrigin.y;
  const dist = Math.min(30, Math.hypot(dx,dy));
  const ang = Math.atan2(dy, dx);
  stickVector.x = Math.cos(ang) * (dist/30);
  stickVector.y = Math.sin(ang) * (dist/30);
  nub.style.transform = `translate(${30 + stickVector.x*30}px, ${30 + stickVector.y*30}px)`;
});
stick.addEventListener("touchend", e=>{
  e.preventDefault();
  stickActive = false;
  stickVector = {x:0,y:0};
  nub.style.transform = "translate(30px, 30px)";
});

// ===== Schusslogik =====
function shoot(){
  const weapon = weapons[state.player.weapon];
  if(state.player.fireCd > 0) return;
  state.player.fireCd = weapon.rate;

  if(weapon.type === "bullet" || weapon.type === "melee"){
    let angle = Math.atan2(state.player.aim.y, state.player.aim.x);
    angle += (Math.random()-0.5) * weapon.spread * 2;
    state.bullets.push({
      x: state.player.x, y: state.player.y,
      vx: Math.cos(angle) * weapon.speed,
      vy: Math.sin(angle) * weapon.speed,
      dmg: weapon.dmg, color: weapon.color, life: 60
    });
  } else if(weapon.type === "shotgun"){
    for(let i=0; i<weapon.pellets; i++){
      let angle = Math.atan2(state.player.aim.y, state.player.aim.x);
      angle += (Math.random()-0.5) * weapon.spread * 2;
      state.bullets.push({
        x: state.player.x, y: state.player.y,
        vx: Math.cos(angle) * weapon.speed,
        vy: Math.sin(angle) * weapon.speed,
        dmg: weapon.dmg, color: weapon.color, life: 60
      });
    }
  }
}
// ===== Gegner-Spawn =====
function spawnZombie(){
  const side = Math.floor(Math.random()*4);
  let x, y;
  if(side===0){ x=0; y=Math.random()*cvs.height; }
  else if(side===1){ x=cvs.width; y=Math.random()*cvs.height; }
  else if(side===2){ x=Math.random()*cvs.width; y=0; }
  else { x=Math.random()*cvs.width; y=cvs.height; }

  state.zombies.push({
    x, y,
    hp: 10 + state.level * 2,
    speed: 1.0,
    sprite: Sprites.zombie
  });
}

function spawnBoss(){
  const side = Math.floor(Math.random()*4);
  let x, y;
  if(side===0){ x=0; y=Math.random()*cvs.height; }
  else if(side===1){ x=cvs.width; y=Math.random()*cvs.height; }
  else if(side===2){ x=Math.random()*cvs.width; y=0; }
  else { x=Math.random()*cvs.width; y=cvs.height; }

  state.boss = {
    x, y,
    hp: 50 + state.level * 5,
    speed: 1.2,
    sprite: Sprites.bosses[state.level-1] || Sprites.bosses[Sprites.bosses.length-1],
    name: bossNames[state.level-1] || bossNames[bossNames.length-1]
  };
  state.inBossPhase = true;
}

// ===== Nächstes Level =====
function nextLevel(){
  state.level++;
  state.zombies = [];
  state.boss = null;
  state.inBossPhase = false;
  if(state.level > 100){
    alert("Herzlichen Glückwunsch. Du hast alle Zombies getötet.");
    return;
  }
  if(state.level % 5 === 0 && state.player.weapon < weapons.length-1){
    state.player.weapon++;
  }
  for(let i=0; i<state.level + 5; i++){
    spawnZombie();
  }
}
function update(dt){
  // === Bewegung Spieler ===
  let dx = 0, dy = 0;
  if(keys.has('w')) dy -= 1;
  if(keys.has('s')) dy += 1;
  if(keys.has('a')) dx -= 1;
  if(keys.has('d')) dx += 1;

  if(stickActive){
    dx = stickVector.x;
    dy = stickVector.y;
  }

  const len = Math.hypot(dx,dy);
  if(len>0){
    dx /= len; dy /= len;
    state.player.x += dx * state.player.speed * dt * 0.1;
    state.player.y += dy * state.player.speed * dt * 0.1;
  }

  // === Auto-Aim: nächster Gegner ===
  let target = null;
  let minDist = Infinity;
  
  for (const z of state.zombies) {
  const dist = Math.hypot(z.x - state.player.x, z.y - state.player.y);
  if (dist < minDist) {
  minDist = dist;
  target = z;
  }
  }
  
  if (state.boss) {
  const dist = Math.hypot(state.boss.x - state.player.x, state.boss.y - state.player.y);
  if (dist < minDist) {
  target = state.boss;
  }
  }
  
  if(target){
    const ang = Math.atan2(target.y - state.player.y, target.x - state.player.x);
    state.player.aim.x = Math.cos(ang);
    state.player.aim.y = Math.sin(ang);
    shoot();
  }

  // === Cooldown Waffen ===
  if(state.player.fireCd > 0) state.player.fireCd -= dt;

  // === Bewegung Kugeln ===
  for(let i=state.bullets.length-1; i>=0; i--){
    const b = state.bullets[i];
    b.x += b.vx;
    b.y += b.vy;
    b.life--;
    if(b.life <= 0) state.bullets.splice(i,1);
  }

  // === Bewegung Zombies ===
  for(let i=state.zombies.length-1; i>=0; i--){
    const z = state.zombies[i];
    const ang = Math.atan2(state.player.y - z.y, state.player.x - z.x);
    z.x += Math.cos(ang) * z.speed;
    z.y += Math.sin(ang) * z.speed;

    // Treffer Spieler
    if(Math.hypot(z.x - state.player.x, z.y - state.player.y) < 20){
      state.player.hp -= 0.05 * dt;
      if(state.player.hp <= 0){
        alert("Game Over");
        document.location.reload();
      }
    }
  }

  // === Bewegung Boss ===
  if(state.boss){
    const ang = Math.atan2(state.player.y - state.boss.y, state.player.x - state.boss.x);
    state.boss.x += Math.cos(ang) * state.boss.speed;
    state.boss.y += Math.sin(ang) * state.boss.speed;
    if(Math.hypot(state.boss.x - state.player.x, state.boss.y - state.player.y) < 30){
      state.player.hp -= 0.1 * dt;
      if(state.player.hp <= 0){
        alert("Game Over");
        document.location.reload();
      }
    }
  }

  // === Kollision Kugeln -> Gegner ===
  for(let i=state.bullets.length-1; i>=0; i--){
    const b = state.bullets[i];
    let hit = false;
    for(let j=state.zombies.length-1; j>=0; j--){
      const z = state.zombies[j];
      if(Math.hypot(z.x - b.x, z.y - b.y) < 20){
        z.hp -= b.dmg;
        state.bullets.splice(i,1);
        if(z.hp <= 0){
          state.zombies.splice(j,1);
          state.kills++;
        }
        hit = true;
        break;
      }
    }
    if(hit) continue;
    if(state.boss && Math.hypot(state.boss.x - b.x, state.boss.y - b.y) < 30){
      state.boss.hp -= b.dmg;
      state.bullets.splice(i,1);
      if(state.boss.hp <= 0){
        state.kills++;
        state.boss = null;
        state.inBossPhase = false;
        nextLevel();
      }
    }
  }

  // === Boss spawnen, wenn alle Zombies tot ===
  if(!state.inBossPhase && state.zombies.length === 0 && !state.boss){
    spawnBoss();
  }
}
// ===== Rendering =====
function render(){
  ctx.clearRect(0,0,cvs.width,cvs.height);

  // Kugeln
  for(const b of state.bullets){
    ctx.fillStyle = b.color;
    ctx.beginPath();
    ctx.arc(b.x, b.y, 4, 0, Math.PI*2);
    ctx.fill();
  }

  // Zombies
  for(const z of state.zombies){
    ctx.drawImage(z.sprite, z.x-32, z.y-32, 64, 64);
  }

  // Boss
  if(state.boss){
    ctx.drawImage(state.boss.sprite, state.boss.x-80, state.boss.y-80, 160, 160);
    ctx.fillStyle = "red";
    ctx.fillRect(state.boss.x - 20, state.boss.y - 30, 40, 4);
    ctx.fillStyle = "lime";
    ctx.fillRect(state.boss.x - 20, state.boss.y - 30, (state.boss.hp/state.boss.maxHp)*40, 4);
    ctx.fillStyle = "white";
    ctx.font = "bold 48px sans-serif";
    ctx.fillText(state.boss.name, state.boss.x - ctx.measureText(state.boss.name).width/2, state.boss.y - 40);
  }

  // Spieler
  ctx.drawImage(Sprites.player, state.player.x-32, state.player.y-32, 64, 64);

  // HUD
  document.getElementById("hudLevel").textContent = `Level: ${state.level}`;
  document.getElementById("hudPhase").textContent = state.inBossPhase ? "Bossphase" : "Zombiephase";
  document.getElementById("hudHealth").textContent = `Leben: ${Math.ceil(state.player.hp)}/${state.player.maxHp}`;
  document.getElementById("hudWeapon").textContent = `Waffe: ${weapons[state.player.weapon].name}`;
  document.getElementById("hudKills").textContent = `Kills: ${state.kills}`;
}

// ===== Game Loop =====
let lastTime = performance.now();
function gameLoop(time){
  const dt = time - lastTime;
  lastTime = time;
  update(dt);
  render();
  requestAnimationFrame(gameLoop);
}

// ===== Start Spiel =====
for(let i=0; i<5; i++){
  spawnZombie();
}
gameLoop(lastTime);