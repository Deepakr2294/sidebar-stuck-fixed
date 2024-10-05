// Select all section elements
const sections = document.querySelectorAll('.sectionnn');
// Select all sidebar links
const links = document.querySelectorAll('.sidebarrr ul li a');

// Function to remove active class from all links
function removeActiveClasses() {
    links.forEach(link => link.classList.remove('active'));
}

// Function to add active class to the current link
function addActiveClass(index) {
    removeActiveClasses();
    links[index].classList.add('active');
}

// Function to check which section is in view
function checkSectionsInView() {
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            addActiveClass(index);
        }
    });
}

// Add event listener for scrolling
window.addEventListener('scroll', checkSectionsInView);
