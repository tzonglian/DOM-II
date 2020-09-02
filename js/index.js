// 10 Unique Events

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
});

//#3 Move Mouse Out -> Text Italicizes
const textItalicize = document.querySelector('p');
textItalicize.addEventListener('mouseout', (event) => {
    textItalicize.style.fontStyle = 'italic';
});

//#4 Move Mouse on First Paragraph -> Text bolds
const textMove = document.querySelector('p');
textMove.addEventListener('mousemove', (event) => {
    textMove.style.fontWeight = 'bold';
});

//#5 Right click -> Text blues
const textBlued = document.querySelector('p');
textBlued.addEventListener('contextmenu', (event) => {
    textBlued.style.color = 'darkblue';
});

//#6 Click with non-standard button -> Text greens
const textGreened = document.querySelector('p');
textGreened.addEventListener('auxclick', (event) => {
    textGreened.style.color = "green";
});

//#7 Mousedown -> Text reds
const textRed = document.querySelector('h1');
textRed.addEventListener('mousedown', (event) => {
    textRed.style.color = 'darkred';
});

//#8 Mouseup -> Text purples
const textPurples = document.querySelector('h1');
textPurples.addEventListener('mouseup', (event) => {
    textPurples.style.color = 'purple';
});

//#9 Select Text -> Text becomes boxed
const textBoxed = document.querySelector('h1');
textBoxed.addEventListener('select', (event) => {
    textBoxed.style.border = 'thin dotted slategray'
});

//#10 Wheel over picture -> Changes Opacity
const faded2 = document.querySelector('[src= "img/adventure.jpg"]');
faded2.addEventListener('wheel', (event) => {
    faded2.style.opacity = "0.4";
});


//  Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.

//mouseout bubbles, mouseleave does not
const bubbleFuchsia = document.querySelector('h2'); //selects 'Welcome to the Fun Bus!'
const noBubblePink = document.querySelector('.intro'); //selects 'intro class'
bubbleFuchsia.addEventListener('mouseleave', (event) => {
    bubbleFuchsia.style.color = 'fuchsia'; //dark-pink
    if (true) {
        noBubblePink.addEventListener('mouseout', (event) => {
            noBubblePink.style.color = 'pink'; //light-pink
        });
    }
});

//This prevents mouseout from bubbling properly


//  Stop the navigation items from refreshing the page by using preventDefault()
Array.from(document.links).forEach(element => {
    element.addEventListener('click', event => {
        event.preventDefault() ;
    })
  })

