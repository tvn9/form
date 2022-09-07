// Extracting Parts of the DOM Tree as JavaScript Strings

console.log(document.getElementById("A").innerHTML);

console.log(document.getElementById("A").outerHTML);

// notice that all text is returned even if it's in child elements nodes
console.log(document.getElementById("B").textContent);

// NON standard extensions below i.e., innerText and outerText
console.log(document.getElementById("B").innerText);

console.log(document.getElementById("B").outerText);