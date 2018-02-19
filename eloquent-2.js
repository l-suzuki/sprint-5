//exercise 1
  for (var i="#"; i.length<8; i+="#")
    console.log(i);
//exercise 2
for (var num=1; num<101; num++)
  if (num % 3 == 0 && num % 5 == 0){
  console.log("FizzBuzz");}
  else if (num % 3 == 0) {
  console.log("Fizz");}
else if (num % 5 == 0) {
console.log("Buzz");}
else  console.log(num);
//exercise 3
var size = 8;

var total = "";

for (var i = 0; i < size; i++) {
  for (var line = 0; line < size; line++) {
    if ((i + line) % 2 == 0)
      total += " ";
    else
      total += "#";
  }
  total += "\n";
}

console.log(total);
