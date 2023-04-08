const display1 = document.querySelector(".display1");
const display = document.querySelector(".display");
const buttonsNumbers = document.querySelectorAll("[data-numero]");
const buttonsOperadores = document.querySelectorAll("[data-operador]");
let number1 = 0;
let number2 = 0;
let respuesta = 0;
let operacionPendiente = "";

buttonsNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    printDisplay(e.target.innerHTML);
  });
});

buttonsOperadores.forEach((button) => {
  button.addEventListener("click", (e) => {
    const { operador } = button.dataset;
    if (operador === "C") {
      deleteAll();
    }
    if (operador === "+") {
      number1 = display.innerHTML;
      operacionPendiente = "+";

      if (operacionPendiente === "+") {
        let valorprevious = +(display1.innerHTML.slice(0, -1));

        display1.innerHTML = +valorprevious + number1 * 1;
        display.innerHTML = display1.innerHTML;
        display1.innerHTML = display1.innerHTML.toString() + operacionPendiente;
      }
      
    }
    if (operador === "=") {
      number2 = display.innerHTML;

      if (operacionPendiente === "+") {
        sumar(number1, number2);
        operacionPendiente='='
        display.innerHTML = respuesta;
        display1.innerHTML = `${number1}+${number2}=`;
      } else {
        sumar(number1, number2);
        display1.innerHTML = `${number1}+${number2}=`;
        display.innerHTML = respuesta;
      }
    }
  });
});

const printDisplay = (value) => {
  if (value === "." && display.innerHTML.includes(".")) {
    return;
  }

  if (operacionPendiente) {
    display.innerHTML = value;
    operacionPendiente = null;
  } else if (display.innerHTML === "0" && value !== ".") {
    display.innerHTML = value;
  } else if (operacionPendiente === null) {
    display.innerHTML = value;
    operacionPendiente = false;
  } else {
    display.innerHTML += value;
  }
};

const sumar = (number1, number2) => {
  respuesta = Number(number1) + Number(number2);
};

const deleteAll = () => {
  operacionPendiente = null;
  display1.innerHTML = "";
  display.innerHTML = "0";
};
