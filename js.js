// this js file is linked to index.html
function closeMe() {
    // find the element
     x=document.getElementById("demo");
    // option 1: change the style attribute directly
    x.style.display="none";

    // option 2:
     x.className="closed";// dont know why this is not working
    
}

function openMe() {
    //find the element 
    x=document.getElementById("demo");
    // Option 1: change the style aattribute directly
     x.style.display ="block";

    // Option 2:
    x.className ="open";//dont know why this is not working
}