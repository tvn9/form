//////////  Getting a Node Value  /////////////

// logs null for DOCUMENT_TYPE_NODE, DOCUMENT_NODE, DOCUMENT_FRAGMENT_NODE, ELEMENT_NODE
console.log(document.doctype.nodeValue);
console.log(document.nodeValue);
console.log(document.createDocumentFragment().nodeValue);
console.log(document.querySelector("a").nodeValue);

// logs string of text
console.log(document.querySelector("a").firstChild.nodeValue); // logs Hello


//////////  Using JavaScript Method to Create Element and Text Nodes   //////////
let elementNode = document.createElement("div");
console.log(elementNode, elementNode.nodeType); // log <div> 1

let textNode = document.createTextNode("This is a text node");
console.log(textNode, textNode.nodeType); // logs Text {} 3


//////////  Using JavaScript Strings to Create and Add Element and Text Nodes to the DOM  //////////

// create a strong element and text node and add it to the DOM
document.getElementById("A").innerHTML = "<strong>This a strong element</strong>";

// create a div and text code to replace <span id="B"></span>
document.getElementById("B").outerHTML = "<div id='B' class='new'>Replaced span with div</div>";

// create a text node and update the div #C with the text node
document.getElementById("C").textContent = "textContent";

// NON standard extensions below i.e., innterText and outerText
// create a text node and update the div#D with text node
document.getElementById("D").innerText = "innerText element";

// create a text node and replace the div#E with the text node (notice div#E is done)
document.getElementById("E").outerText = ".outerText";

console.log(document.body.innerHTML);
