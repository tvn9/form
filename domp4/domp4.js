// Using insertAdjacentHTML() on Element nodes to precisely insert nodes before 
// the begin tag, after the beginning tag, before the end tag, and after the eng 
// tag. 

const aEl = document.getElementById("A");

aEl.insertAdjacentHTML("afterbegin", "<span>After-begin--</span>");
aEl.insertAdjacentHTML("beforebegin", "<span>Before-begin--</span>");
aEl.insertAdjacentHTML("afterend", "<span>--after-end--</span>");
aEl.insertAdjacentHTML("beforeend", "<span>--before-end--</span>");

console.log(document.body.innerHTML);