document.getElementById('roadmapForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const course = document.getElementById('courseSelect').value;
    const year = document.getElementById('yearSelect').value;
    
    if (course && year) {
        generateRoadmap(course, year);
    }
});

function generateRoadmap(course, year) {
    const roadmapContainer = document.getElementById('roadmapOutput');
    roadmapContainer.innerHTML = ''; // Clear previous output
    
    let roadmapContent = '';
    const resources = getResources(course, year);

    roadmapContent = `
        <div class="col-md-8">
            <div class="card roadmap-card">
                <div class="card-body">
                    <h4 class="card-title">Roadmap for ${capitalize(course)} - Year ${year}</h4>
                    <ul class="list-group">
                        ${resources.map(item => `<li class="list-group-item">${item}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `;
    roadmapContainer.innerHTML = roadmapContent;
}

function getResources(course, year) {
    const roadmaps = {
        webDev: {
            1: ['HTML & CSS Basics', 'JavaScript Introduction', 'Version Control (Git)'],
            2: ['Advanced JavaScript', 'Responsive Web Design', 'Backend Development (Node.js)'],
            3: ['Databases (SQL, NoSQL)', 'Frameworks (React, Angular)', 'Deployment'],
            4: ['Advanced Web Technologies', 'Full-stack Projects', 'Capstone Project']
        },
        gameDev: {
            1: ['C++ Basics', 'Game Design Principles', 'Introduction to Unity'],
            2: ['Advanced C++', 'Game Physics', 'Game AI Concepts'],
            3: ['Multiplayer Game Development', '3D Modeling & Animation', 'Game Optimization'],
            4: ['Game Monetization', 'Publishing Games', 'Game Development Portfolio']
        },
        dataScience: {
            1: ['Python Basics', 'Statistics', 'Data Visualization'],
            2: ['Data Cleaning & Preprocessing', 'Machine Learning Algorithms', 'SQL'],
            3: ['Deep Learning', 'Big Data Technologies', 'Data Engineering'],
            4: ['Capstone Project', 'Advanced Machine Learning', 'Data Science Portfolio']
        },
        mlDataScience: {
            1: ['Python Basics', 'Linear Algebra', 'Intro to Machine Learning'],
            2: ['Supervised Learning', 'Unsupervised Learning', 'Data Wrangling'],
            3: ['Deep Learning', 'Natural Language Processing', 'AI Ethics'],
            4: ['AI Project', 'Advanced ML Techniques', 'Research in ML']
        }
    };

    return roadmaps[course][year] || [];
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
