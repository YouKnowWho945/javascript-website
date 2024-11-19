function onPress(imputName) {
    const name = "john"
    let age = 10
    age = 11
    age = add()

  myAlert(age);
  document.getElementById("output").innerHTML = "Now I am in control! Mwahahaha!!!";
}
function add() {
    return 1 + 1;
}

function myAlert(imputName) {
    alert("You are a fool, " + imputName + "!");
}

