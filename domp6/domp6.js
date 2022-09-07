// Using appendChild() and insertBefore() to Add Node Objects to the DOM

// Create a blink element node and text node
const eleNode = document.createElement("strong");
const textNode = document.createTextNode(" dog");

// appand these nodes to the DOM
document.querySelector("p").appendChild(eleNode);
document.querySelector("strong").appendChild(textNode);

// logs <p>Hello<strong> Dog</strong></p>
console.log(document.body.innerHTML);