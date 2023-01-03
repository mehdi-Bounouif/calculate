let error = document.getElementById("error");
let result = document.getElementById("input");

let Calc = (num) => {
  result.value += num;
};

function Clear() {
  result.value = "";
}
function Delete() {
  result.value = result.value.slice(0, -1);
}

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (err) {
    error.innerHTML = '" enter a valid number "';
  }
};
