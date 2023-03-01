var fruits =['banana', 'mango', 'avocado', 'apple']
function loadfruits(params) {
    document.getElementById('fruits').innerHTML=fruits;
}

function myFunction(){
    var fruit = prompt('what is your favourite fruit?');
    fruits[fruits.length]=fruit;
    document.getElementById('fruits').innerHTML=fruits;
}