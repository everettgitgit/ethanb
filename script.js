// Function to set up event listeners
function setupEventListeners() {
    // Select the elements with the class 'toggleHeader'
    let elements = document.querySelectorAll('.toggleHeader');

    // Add event listeners to each element
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

// Set up event listeners at the start
setupEventListeners();

// Select the buttons
let button = document.getElementById('educationButton');
let workingExperienceButton = document.getElementById('workingExperienceButton');
let interestButton = document.getElementById('interestButton');

// Select all sections within the article
let sections = document.querySelectorAll('article > section');

// Store the original content of each section
let originalContent = Array.from(sections).map(section => section.innerHTML);

// Define the new content for each section
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

// Define the new content for each section
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
        team is Golden State Worriors. My favourite NBA stars are Step Curry and <br>
        Labron James.</p>
        <img src="images/curry.jpg" "width="300" height="265">
        <img src="images/LeBron_James.jpg" width=400" height="500">

 
    `,
    // Add more content here for each section...
];

// Add click event listener to the button
button.addEventListener('click', function() {

    
    for (let i = 0; i < 2; i++) {
        // Replace the content of the section with the corresponding new content
        sections[i].innerHTML = newContent[i];

        // Set up event listeners for the new elements
        setupEventListeners();
    }

    // Hide the fourth section and beyond
    for (let i = 2; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
});

// Add click event listener to the button
interestButton.addEventListener('click', function() {

    
    for (let i = 0; i < 2; i++) {
        // Replace the content of the section with the corresponding new content
        sections[i].innerHTML = newContentInterest[i];

        // Set up event listeners for the new elements
        setupEventListeners();
    }

    // Hide the fourth section and beyond
    for (let i = 2; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }
});

// Add click event listener to the 'Working Experience' button
workingExperienceButton.addEventListener('click', function() {
    // Loop through each section
    sections.forEach((section, index) => {
        // Change the content of the section back to the original content
        section.innerHTML = originalContent[index];

        // Set up event listeners for the new elements
        setupEventListeners();
        
        // Show the section
        section.style.display = 'block';
    });
});
