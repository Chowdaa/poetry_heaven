// Add event listeners to buttons for basic interactivity
document.getElementById('search-poet').addEventListener('click', function() {
    alert('Search Poet feature coming soon!');
});

document.getElementById('subscribe-now').addEventListener('click', function() {
    alert('Subscribe Now feature coming soon!');
});

// Sample data to display on the console (for demonstration)
const poets = [
    { name: 'William Wordsworth', famousWork: 'The Prelude' },
    { name: 'Emily Dickinson', famousWork: 'Because I Could Not Stop for Death' },
    { name: 'Robert Frost', famousWork: 'The Road Not Taken' },
    { name: 'Maya Angelou', famousWork: 'I Know Why the Caged Bird Sings' },
    { name: 'Langston Hughes', famousWork: 'Harlem' },
    { name: 'Sylvia Plath', famousWork: 'Ariel' }
];

// Log poet information to the console
console.log('Featured Poets:');
poets.forEach(poet => {
    console.log(`${poet.name} - Famous Work: ${poet.famousWork}`);
});
