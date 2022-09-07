////////////   Indentifying the Type and Name of a Node   //////////////////////////

// Get reference to element node object
let nodeAnchor = document.querySelector("a");

// create props array to store property keys for elements node boject
let props = [];

// loop over element node object to get all properties and methods (inherited too)
for (let key in nodeAnchor) {
  props.push(key);
}

// log alpherbetcial list of properties and methods
console.log(props.sort());

// This is DOCUMENT_TYPE_NODE or nodeType 10 because Node.DOCUMENT_TYPE_NODE === 10
console.log(document.doctype.nodeName, document.doctype.nodeType);

// This is DOCUMENT_NODE or nodeType 9 because Node.DOCUMENT_NODE === 9
console.log(document.nodeName, document.nodeType);

// This is DOCUMENT_FRAGMENT_NODE or nodeType 11 because Node.DOCUMENT_FRAGMENT_NODE === 11
console.log(document.createDocumentFragment().nodeName, document.createDocumentFragment().nodeType);

// This is ELEMENT_NODE or nodeType 1 because Node. ELEMENT_NODE === 1
console.log(document.querySelector("a").nodeName, document.querySelector("a").nodeType);

// This is TEXT_NODE or nodeType 3 because Node.TEXT_NODE === 3
console.log(document.querySelector("a").firstChild.nodeName, document.querySelector("a").firstChild.nodeType);

/////////////   Getting a Node's Value     //////////////////////

// is <a> an ELEMENT_NODE?
console.log(document.querySelector("a").nodeType === 1); // => true

// or use Node.ELEMENT_NODE which is a properties containing the numeric value of 1
console.log(document.querySelector("a").nodeType === Node.ELEMENT_NODE); // => true
