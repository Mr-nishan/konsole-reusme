document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('input');
    const outputDiv = document.getElementById('output');
    const imageElement = document.getElementById('cvImage'); // Image element
    // New function to handle project details
    function projectDetail(description) {
        // Clear existing output
        outputDiv.innerHTML = '';

        // Create a paragraph element for the project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = description;

        // Append the description to the outputDiv
        outputDiv.appendChild(projectDescription);

        // Scroll to the bottom of the output
        outputDiv.scrollTop = outputDiv.scrollHeight;
    }
    // Function to create grid items
    function createGridItems(items) {
        // Clear existing output
        outputDiv.innerHTML = '';

        // Create a container for the grid
        const gridContainer = document.createElement('div');
        gridContainer.className = 'grid-container';

        // Create and append items to the grid
        items.forEach(item => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.textContent = item;
            gridContainer.appendChild(gridItem);
        });

        outputDiv.appendChild(gridContainer);
        outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom
    }

    // Function to clear the output and reset the image
    function clearOutput() {
        outputDiv.innerHTML = ''; // Clear the output area
        imageElement.src = 'images/default.jpg'; // Reset image to default
    }

    // Function to display the input text
    function displayInputText(text) {
        const outputLine = document.createElement('p');

        // Loop through the input text and apply styles
        for (let i = 0; i < text.length; i++) {
            const styledChar = styleCharacter(text[i]);
            outputLine.appendChild(styledChar);
        }

        outputDiv.appendChild(outputLine);
        outputDiv.scrollTop = outputDiv.scrollHeight; // Scroll to bottom
    }

    // Function to determine character type and return styled span element
    function styleCharacter(char) {
        const span = document.createElement('span');

        if (/[a-zA-Z]/.test(char)) {
            span.classList.add('alpha');
        } else if (/[0-9]/.test(char)) {
            span.classList.add('number');
        } else if (/[!@#$%^&*(),.?":{}|<>]/.test(char)) {
            span.classList.add('symbol');
        } else {
            span.classList.add('special-char'); // Spaces, punctuation
        }

        span.textContent = char;
        return span;
    }

    // Event listener for handling input on Enter key
    inputField.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const inputText = inputField.value.toLowerCase(); // Get input and convert to lowercase

            // Display the input text
            displayInputText(inputText);

            inputField.value = ''; // Clear the input

            // Command-based actions
            if (inputText === 'ls') {
                createGridItems([
                    'Introduction',
                    'Skills',
                    'Education',
                    'Projects',
                    'Eligibility',
                    'My_Objective'
                ]);
            } else if (inputText === 'clear') {
                clearOutput(); // Clear the output and reset image
            } else if (inputText === 'project') {
                createGridItems([
                    'Book_riffle',
                    'NetnexHUB',
                    'Zoom_mart'
                ]); // project list  
            } else if (inputText === 'book_riffle') {
                imageElement.src = 'images/book_riffle.jpg'
                projectDetail([
                    "This project was dynamically note sharing project website where the concept was to share lecture note it was created on (HTML, CSS, JS, php )"
                ]);; // Change to book_riffle image and give detail  
            } else if (inputText === 'netnexhub') {
                imageElement.src = 'images/netnexhub.jpg'
                projectDetail([
                    "This project was a school management website where the concept was no teacher and student was to exploit their social life it was created on (HTML, CSS, JS, php )"
                ]);; // Change to book_riffle image and give detail
            } else if (inputText === 'zoom') {
                imageElement.src = 'images/zoom.jpg'
                projectDetail([
                    "This for shopping mart with delivery option for mart owner it was created on (React.js, Node.js, Next.JS, php )"
                ]);; // Change to zoom image and give detail            
            } else if (inputText === 'profile') {
                imageElement.src = 'images/profile.jpg'; // Change to profile image
            } else if (inputText === 'experience') {
                imageElement.src = 'images/experience.jpg'; // Change to experience image
            } else if (inputText === 'skills') {
                imageElement.src = 'images/skills.jpg'; // Change to skills image
            } else if (inputText === 'education') {
                imageElement.src = 'images/education.jpg'; // Change to education image
            } else if (inputText === 'eligibility') {
                imageElement.src = 'images/eligiblity.jpg'; // Change to education image
            } else if (inputText === 'objective') {
                projectDetail([
                    "always start help confused people decide goal"
                ]);; // Change to book_riffle image and give detail
            } else {
                imageElement.src = 'images/default.jpg'; // Default image
            }
        }
    });
});
