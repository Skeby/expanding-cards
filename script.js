// Uses querySelectorAll to select all the html elements with class 'panel' and adds them to a NodeList called 'panels'
const panels = document.querySelectorAll('.panel');

// A forEach loop that iterates over the NodeList 'panels'
/* New: Using arrow functions; 
(arguments) => {
    // function definition
}
*/
panels.forEach(panel => {
    // When a panel is clicked, 'active' class is added to the panel
    panel.addEventListener('click', () => {
        // Removes the panels that are already active
        removeActiveClasses()
        // Adding an active class gives the panel a flex value of '5'
        panel.classList.add('active');
    })

})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

