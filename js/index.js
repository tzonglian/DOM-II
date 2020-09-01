// Your code goes here

//#1 - Double-click -> Text: Signed up!
const signUp = document.querySelectorAll('.btn');

Array.from(signUp).forEach(function (butt) {
    butt.textContent="Double Click Here to Sign Up!";
    butt.style.border = 'thin solid darkred';
    butt.addEventListener('dblclick', function(event) {
        butt.setAttribute('href', "#signUpPage");
        butt.textContent = "Thank you for signing up!";
        butt.style.color = 'darkred';
    });
});

//#2 Mouseover -> Disappear 
const gonePic = document.querySelector( '[src= "img/destination.jpg"]');
gonePic.addEventListener('mouseover', (event) => {
    gonePic.style.opacity = "0.01";
})

//#3 Resize -> Text Italicizes
const textItalicize = document.querySelector('p');
textItalicize.addEventListener('resize', () => {
    textItalicize.style.fontStyle = 'italic';
});

// keydown
// wheel
// load
// focus
// resize
// scroll
// select
// dblclick
// drag / drop
// Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.

//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

//  Stop the navigation items from refreshing the page by using preventDefault()