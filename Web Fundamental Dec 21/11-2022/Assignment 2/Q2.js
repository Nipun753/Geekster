let num = parseInt(prompt("Enter Number"));
let string = "";
for (let i = 0; i < num; i++) {
  for (let j = 0; j < i+1 ; j++) {
    string += "*";
  }
  string += "<br/>";
}
document.write(string);