var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://MatthewBerry1.github.io/MatthewBerry1/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
}
ourRequest.send();
