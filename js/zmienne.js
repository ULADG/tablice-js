'use strict'

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);
imiona[3] = 'Tania';
imiona [2] = 'Ela';
imiona.push('Geralt');
	
console.log(imiona);

imiona.pop();
imiona.pop();

console.log(imiona.unshift('Robert'));

console.log(imiona.shift());
console.log(imiona);

console.log(imiona.length);

for (var i = 0; i < imiona.length ; i++) {
	console.log( imiona[i] );
}


imiona.forEach(function (element, i) {
	console.log("Element nr " + i + '=' + element);
});
console.log( imiona.join("-") );

 imiona.sort();
imiona.reverse();
	console.log(imiona);
var imionaMeskie = ['Robert', "mariusz", "Krystain"];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz"));

console.log (Array isArray(zbiorImion) );
zbiorImion.splice(2, 3, "julek", "krzysiek");
console.log(zbiorImion);
console.log (zbiorImion, toString);



