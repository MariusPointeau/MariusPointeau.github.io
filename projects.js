const projects = [
    {
        id: "ecoasis",
        image: "images/Ecoasis.png",
        page: "Projects/Ecoasis.html"
    },
    {
        id: "hw",
        image: "images/hw.png",
        page: "Projects/HorizonWeaver.html"
    },
    {
        id : "tps",
        image: "images/MultiUnreal.png",
        page: ""
    },
    {
        id : "gmp",
        image: "images/MenuGMTTP.png",
        page: "Projects/GuideMeToTheParadise.html"
    },
    {
        id : "irisengine",
        image: "images/irisengine.png",
        page: "Projects/IrisEngine.html"
    },
    {
        id : "rmj",
        image: "images/rmj.png",
        page: "Projects/ReviveMeJett.html"
    },
];

const previewProjects = [
    "ecoasis",
    "hw",
    "rmj"
];


function displayProjects(projectIds, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        return;
    }

    projectIds.forEach(id => {
        const project = projects.find(p => p.id === id);

        if (!project) return;

        container.innerHTML += `
            <div class="work">
                <img src="${project.image}" alt="">
                <div class="layer">
                    <h3 data-i18n="${project.id}.name"></h3>
                    <p data-i18n="${project.id}.description"></p>
                    <a href="${project.page}">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
        `;
    });
}

displayProjects(
    projects.map(project => project.id),
    "project-list"
);

displayProjects(
    previewProjects,
    "preview-list"
);