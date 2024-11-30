num1 = parseFloat(prompt("Entrez le premier nombre:"));
num2 = parseFloat(prompt("Entrez le deuxième nombre:"));
operation = prompt("Choisissez une opération (+, -, *, /):");
result;
switch (operation) {
  case "+":
    result = num1 + num2;
    break;
  case "-":
    result = num1 - num2;
    break;
  case "*":
    result = num1 * num2;
    break;
  case "/":
    if (num2 === 0) {
      alert("Erreur : Division par zéro impossible !");
      result = "Indéfini";
    } else {
      result = num1 / num2;
    }
    break;
  default:
    alert("Erreur : Opération invalide !");
    result = "Indéfini";
}
if (result !== "Indéfini") {
  alert(`Le résultat de ${num1} ${operation} ${num2} est ${result}`);
} else {
  alert("Le calcul n'a pas pu être effectué.");
}