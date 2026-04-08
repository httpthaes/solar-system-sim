const astrosDivs = document.querySelectorAll('.planet, #sun, #moon');
const sidebar = document.getElementById('sidebar');
const sidebarContent = document.getElementById('sidebarContent');
const closeSidebar = document.getElementById('closeSidebar');

//Dados sistema solar
const astros = [
    {
        id: "sun",
        displayName: "Sol",
        image: "astro01.jpeg",
        type: "star",
        diameter: 1392000,
        distanceSun: 0,
        gravity: 274,
        temperature: 5505,
        moons: 0,
    },
    {
        id: "mercury",
        displayName: "Mercúrio",
        image: "astro02.jpeg",
        type: "rocky",
        diameter: 4879,
        distanceSun: 0.39,
        gravity: 3.7,
        temperature: 167,
        moons: 0,
    },
    {
        id: "venus",
        displayName: "Vênus",
        image: "astro03.jpg",
        type: "rocky",
        diameter: 12104,
        distanceSun: 0.72,
        gravity: 8.87,
        temperature: 464,
        moons: 0,
    },
    {
        id: "earth",
        displayName: "Terra",
        image: "astro04.jpeg",
        type: "rocky",
        diameter: 12742,
        distanceSun: 1.00,
        gravity: 9.81,
        temperature: 15,
        moons: 1,
    },
    {
        id: "moon",
        displayName: "Lua",
        image: "astro05.jpg",
        type: "moon",
        diameter: 3474,
        distanceSun: 1.00,
        gravity: 1.62,
        temperature: -53,
        moons: 0,
    },
    {
        id: "mars",
        displayName: "Marte",
        image: "astro06.jpg",
        type: "rocky",
        diameter: 6779,
        distanceSun: 1.52,
        gravity: 3.72,
        temperature: -60,
        moons: 2,
    },
    {
        id: "jupiter",
        displayName: "Júpiter",
        image: "astro07.png",
        type: "gaseous",
        diameter: 139822,
        distanceSun: 5.20,
        gravity: 24.79,
        temperature: -108,
        moons: 95,
    },
    {
        id: "saturn",
        displayName: "Saturno",
        image: "astro08.jpg",
        type: "gaseous",
        diameter: 116464,
        distanceSun: 9.54,
        gravity: 10.44,
        temperature: -138,
        moons: 146,
    },
    {
        id: "uranus",
        displayName: "Urano",
        image: "astro09.png",
        type: "icy",
        diameter: 50724,
        distanceSun: 19.22,
        gravity: 8.87,
        temperature: -195,
        moons: 28,
    },
    {
        id: "neptune",
        displayName: "Netuno",
        image: "astro10.png",
        type: "icy",
        diameter: 49244,
        distanceSun: 30.06,
        gravity: 11.15,
        temperature: -200,
        moons: 16,
    }
]

//eventos
closeSidebar.addEventListener('click', () => {
    sidebar.classList.remove('active')
})

astrosDivs.forEach(astro => {
    astro.addEventListener('click', async () => {

        const astroInfo = astros.find(a => a.id === astro.id)

        sidebarContent.innerHTML = `
            <img src="./images/${astroInfo.image}">
            <h1>${astroInfo.displayName}</h1>
            <p>Tipo: ${astroInfo.type}</p>
            <p>Diâmetro: ${astroInfo.diameter} km</p>
            <p>Distância do sol: ${astroInfo.distanceSun} UA</p>
            <p>Gravidade: ${astroInfo.gravity} m/s²</p>
            <p>Temperatura: ${astroInfo.temperature}°C</p>
            <p>Luas: ${astroInfo.moons}</p>
        `

        sidebar.classList.add('active')
    })
})

//cria as estrelas
function createStars() {
    const container = document.querySelector('body');
    for (let i = 0; i < 1000; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = Math.random() * 100 + "%";
        star.style.left = Math.random() * 100 + "%";
        
        const duration = Math.random() * 4 + 1;
        const delay = Math.random() * 5;

        star.style.animation = `twinkle ${duration}s infinite`;
        star.style.animationDelay = `${delay}s`;
        
        container.appendChild(star);
    }
}

createStars();