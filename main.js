// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {  
    const container = document.querySelector('body');
    
    container.addEventListener('mousemove', (e) => {
    // Get the mouse's X and Y coordinates
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    // Calculate RGB values based on mouse coordinates
    const r = Math.floor(200 + mouseX * 10);
    const g = Math.floor(200 + mouseY * 35);
    const b = 230; // Adjust this value for the blue color

    // Update the background color with the calculated RGB values
    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  
    // add class navbarDark on navbar scroll
    const menu = document.querySelector('.menu-container');

    window.onscroll = function() {
        var top = window.scrollY;
        if(top >=40) {
            menu.classList.add('menu-container-dark');
        }
        else {
            menu.classList.remove('menu-container-dark');
        }
    }
  
    const projLink = document.getElementById('proj-link');
    const expLink = document.getElementById('exp-link');

    projLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (e.g., navigating to a different page)
        event.preventDefault();
        expLink.classList.remove('active');
        projLink.classList.add('active');

        // Get the target section element
        const targetSection = document.getElementById("projects");

        // Calculate the desired scroll position (adjust the value as needed)
        const offset = 20; // You can change this value to control how far past the section the scroll goes
        const scrollPosition = targetSection.offsetTop - offset;

        // Scroll to the target section with the desired position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });

    });

    expLink.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (e.g., navigating to a different page)
        event.preventDefault();
        expLink.classList.add('active');
        projLink.classList.remove('active');

        // Get the target section element
        const targetSection = document.getElementById("experience");

        // Calculate the desired scroll position (adjust the value as needed)
        const offset = 20; // You can change this value to control how far past the section the scroll goes
        const scrollPosition = targetSection.offsetTop - offset;

        // Scroll to the target section with the desired position
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
    });
  });
  