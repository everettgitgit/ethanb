function setupEventListeners() {
    let elements = document.querySelectorAll('.toggleHeader');

    elements.forEach((element) => {
        let originalBackgroundColor = window.getComputedStyle(element).backgroundColor;

        element.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'powderblue';
        });

        element.addEventListener('mouseout', function() {
            this.style.backgroundColor = originalBackgroundColor;
        });
    });
}

setupEventListeners();

let button = document.getElementById('educationButton');
let workingExperienceButton = document.getElementById('workingExperienceButton');
let interestButton = document.getElementById('interestButton');
let sections = document.querySelectorAll('article > section');

// Store the original content of each section
let originalContent = Array.from(sections).map(section => section.innerHTML);

let newContent = [
    `
        <h2>The Hong Kong University of Science and Technology</h2>
        <p class="toggleHeader"><strong>Bachelor of Science(Honors) with major Applied Physics – Management Science – 2nd Class (Div 1) Honors (2010)</strong><br>
        <br>
        <em>Subjects Highlight</em><br>
        - Independent Study Project (B+), Computational Physics (A), Time Series
            Analysis and Forecasting (B+)<br>
            ( All of the above course required me to use Stat Software or Programming to
            perform data analyzing and complicated calculation such as stock price
            analyzing)
            </p>
    `,
    `
    <h2>Bow Valley College</h2>
    <p class="toggleHeader"><strong>Studying in Diploma of Software Development</strong><br>
    <br>
    <em>Program Description</em><br>
    Gain practical experience in the cycles of software development through hands-on learning and real projects. <br>
    Gain an understanding of industry standards of planning, developing, and quality assurance testing. <br>
    Learn the fundamentals of computer logic, equip with a solid foundation in applying programming skills in a variety of situations.<br> 
    Also becoming familiar with emerging topics like user experience (UX) and the internet of things.<br>
        </p>
    `,
];

let newContentInterest = [
    `
        <h2>Quantitative research</h2>
        <p class="toggleHeader">Love to figure out the relationship between assets price<br> 
        such as stocks, bond, commodity, crypto currency etc, <br>
        and the numerical or non-numercial data, then try to use <br>
        mathematic methods combining with python to figure possible trading strategy.</p>
            `,
    `
        <h2>Basketball</h2>
        <p class="toggleHeader">Basketball loving since primary school. My favourite <br>
        team is Golden State Worriors. My favourite NBA stars are Step Curry and Labron James.</p>
        <img src="curry.jpg" "width="300" height="265">
        <img src="LeBron_James.jpg" width=400" height="330">

 
    `
    
];

button.addEventListener('click', function() {

    
    for (let i = 0; i < 2; i++) {
        sections[i].innerHTML = newContent[i];
        setupEventListeners();
    }

    for (let i = 2; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
});

interestButton.addEventListener('click', function() {

    
    for (let i = 0; i < 2; i++) {
        sections[i].innerHTML = newContentInterest[i];
        setupEventListeners();
    }

    for (let i = 2; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
});

workingExperienceButton.addEventListener('click', function() {
    sections.forEach((section, index) => {
        section.innerHTML = originalContent[index];
        setupEventListeners();
        section.style.display = 'block';
    });
});
