const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display");
const buttonsNumbers = document.querySelectorAll("[data-numero]");
const buttonsOperadores = document.querySelectorAll("[data-operador]");
var valorIngresado = "";
var valorMostrado = "";
var arrayNumeros = [];
var valorMostrado2 = "";
buttonsNumbers.forEach((button) => {
  button.addEventListener("click", (e) => {
    valorIngresado = e.target.innerHTML;
    valorMostrado = display2.innerHTML;
    console.log(valorMostrado);
    console.log("getValueNumber", valorIngresado);

    if (valorIngresado === "0") {
      if (valorMostrado === "0") {
        return;
      } else if (valorMostrado.includes(".")) {
        valorMostrado += valorIngresado;
      } else if (+valorMostrado > 0) {
        valorMostrado += valorIngresado;
      }
    } else if (valorIngresado === ".") {
      if (valorMostrado === "0") {
        valorMostrado = "0.";
      } else if (+valorMostrado > 0 && !valorMostrado.includes(".")) {
        valorMostrado += ".";
      }
    } else if (+valorIngresado > 0) {
      if (valorMostrado === "0") {
        valorMostrado = "";
        valorMostrado += valorIngresado;
      } else {
        valorMostrado += valorIngresado;
      }
    }
    display2.innerHTML = valorMostrado;
  });
});

buttonsOperadores.forEach((button) => {
  button.addEventListener("click", (e) => {
    const { operador } = button.dataset;
    valorMostrado2 = display1.innerHTML;

    if (operador === "sumar") {
      sumar();
    } else if (operador === "restar") {
      restar();
    } else if (operador === "borrar") {
      borrar();
    } else if (operador === "igual") {
      igual();
    }

    display1.innerHTML = valorMostrado2;
  });
});

const sumar = () => {
  console.log("sumar");
  let nSuma = 0;
  if (valorMostrado2 === "") {
    valorMostrado2 = valorMostrado + "+";
  } else if (valorMostrado2.length > 0) {
    valorMostrado2 += valorIngresado;
  }
  arrayNumeros.push(valorIngresado);

  let nArrayNumeros = arrayNumeros.length;
  if (nArrayNumeros > 0) {
    for (let i = 0; i < nArrayNumeros; i++) {
      nSuma += +arrayNumeros[i];
    }
  }
  display2.innerHTML = 0;
  valorMostrado = 0;
  console.log("-->", nSuma);
};
const restar = () => {
  console.log("restar");
};
const multiplicar = () => {
  console.log("multiplicar");
};
const dividir = () => {
  console.log("dividir");
};
const porcentaje = () => {
  console.log("porcentaje");
};
const borrar = () => {
  console.log("borrar");
  display2.innerHTML = "0";
  display1.innerHTML = "";
  arrayNumeros = [];
};
const igual = () => {
  console.log("igual");
};
