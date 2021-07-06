let number = +prompt('Input a number');

for (i = 0; i < number; i++) {
    let space = "";
    let star = "";
    for (j = 0; j < number - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);    
}
