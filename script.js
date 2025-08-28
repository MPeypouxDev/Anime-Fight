const characters = [
    { name: "Naruto Uzumaki", force: 85, magie: 90, vitesse: 99, technique: "Rasengan", type: "Tank", image: "image/naruto.jpg" },
    { name: "Ichigo Kurosaki", force: 97, magie: 90, vitesse: 96, technique: "Getsugatenshao", type: "Dps", image: "image/ichigo.jpg"},
    { name: "Monkey D Luffy", force: 95, magie: 70, vitesse: 87, technique: "Gear Fourth", type: "Tank", image: "image/luffy.jpg"},
    { name: "Edward Elric", force: 75, magie: 98, vitesse: 80, technique: "Alchimie", type: "Support", image: "image/edward.png"},
    { name: "Saitama", force: 100, magie: 50, vitesse: 95, technique: "Serious Punch", type: "DPS", image: "image/saitama.jpg"},
    { name: "Goku", force: 100, magie: 100, vitesse: 100, technique: "Kamehameha", type: "Support", image: "image/goku.jpg"},
    { name: "Kid Buu", force: 90, magie: 98, vitesse: 100, technique: "Kamehameha rose", type: "Support", image: "image/buu.jpg"},
    { name: "Aizen", force: 90, magie: 95, vitesse: 100, technique: "Cerceuil Noir", type: "DPS", image: "image/aizen.jpg"},
    { name: "Barbe Noire", force: 100, magie: 100, vitesse: 70, technique: "Black Hole", type: "Tank", image: "image/barbenoire.jpg"},
    { name: "Bradley", force: 85, magie: 90, vitesse: 90, technique: "Ultimate eye", type: "Support", image: "image/bradley.jpg"},
    { name: "Obito", force: 80, magie: 100, vitesse: 95, technique: "Kamui", type: "DPS", image: "image/obito.jpg"},
    { name: "Meruem", force: 100, magie: 100, vitesse: 100, technique: "Photon", type: "Tank", image: "image/meruem.jpg"}
]

let mulplicateurSpecial = 1.5;

const power = (c) => (c.force + c.magie + c.vitesse) * mulplicateurSpecial;

function createCard(c) {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('data-type', c.type);
    card.innerHTML = `<div class = "thumb">
    <span class = "badge">${c.type}</span>
    <img src = "${c.image}" alt = "${c.name}"/>
    </div>
    <div class = "content">
    <h3 class = "name">${c.name}</h3>
    <p class = "tech">${c.technique}</p>
    <div class = "stat"> Force: ${c.force}</div>
    <div class = "stat"> Magie: ${c.magie}</div>
    <div class = "stat"> Vitesse: ${c.vitesse}</div>
    </div>`;
    card.addEventListener('click', () => selectFighter(c,card));
    return card;
}

const grid = document.getElementById('grid');
characters.forEach(c => grid.appendChild(createCard(c)));

const controls = document.getElementById('filters');
controls.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (!btn) return;
    document.querySelectorAll('.btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
        const show = (f === "all") || (card.dataset.type.toLowerCase() === f.toLowerCase());
        card.style.outline = show ? '': 'none';
    });
});

let selectedFighters = [];

function selectFighter(c, card) {
    if (selectedFighters.length < 2 && !selectedFighters.includes(c)) {
        selectedFighters.push(c);
        card.style.outline = '3px solid var (--accent)';
    }
    if (selectedFighters.length === 2) {
        document.getElementById('fightButton').disabled = false;
    }
}

function showSelected() {
    const div = document.getElementById('selected');
    div.innerHTML = selectedFighters.map (f => `<b>${f.name}</b>`).join (' VS ');
}

document.getElementById('fightButton').addEventListener('click', () => {
    const [f1, f2] = selectedFighters;
    const p1 = power(f1);
    const p2 = power(f2);
    let result;
    if (p1 > p2) result = `${f1.name} gagne le combat !`;
    else if (p2 > p1) result = `${f2.name} gagne le combat !`;
    else result = `Match nul ! La terre explose !!!`;

    document.getElementById('battleResult').textContent = result;

    selectedFighters = [];
    document.querySelectorAll('.card').forEach(c => c.style.outline = 'none');
    document.getElementById('fightButton').disabled = true;
    showSelected();
});

showSelected();