// this js file is linked to index.html
function closeMe() {
    // find the element
    x=document.getElementById("demo");
    // option 1: change the style attribute directly
    x.stle.display="none";

    // option 2:
    x.className ="closed";
    
}