var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/MatthewBerry1/MatthewBerry1.github.io/blob/main/Week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
}
ourRequest.send();
