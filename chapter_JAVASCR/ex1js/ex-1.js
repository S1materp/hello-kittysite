let n= prompt("Enter count of persons");
let a=prompt("Enter the tip percentage");
let bill= prompt("Enter the bill amount");

n= Number(n);
a= Number(a);
bill= Number(bill);


let result = (bill + (bill/100)*a)/n ;

alert(result  );