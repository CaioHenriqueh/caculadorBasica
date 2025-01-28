const primary = document.getElementById("primary-number");
const operador = document.getElementById("operacao");
const segundary = document.getElementById("segundary-number");
const retorneCalculo = document.getElementById("calculo");
const historico = document.getElementById("historico");
const btn_submit = document.getElementById("btn-conta");


const operatorCalc = (numero_one, operador, numero_two) => {
    if (operador == "*") {
        return numero_one * numero_two
    } else if (operador == "/") {
        return numero_one / numero_two
    } else if (operador == "-") {
        return numero_one - numero_two
    }else if (operador == "+") {
        return numero_one + numero_two
    }

}

const validateNumeber = (numero_one , numero_two) => {

    if(numero_one == "" || numero_two == "") {
        return alert("Digite ao menos um numero");
    }

}

const list_calcs = [];




btn_submit.addEventListener("click", () => {

    let primeiro_valor = Number(primary.value);
    const operador_func =  operador.value;
    let segundo_valor = Number(segundary.value);
    validateNumeber(primeiro_valor, segundo_valor)


    const result = operatorCalc(primeiro_valor, operador_func, segundo_valor)





    retorneCalculo.innerHTML = `${primeiro_valor} ${operador_func} ${segundo_valor} = ${result}`

    list_calcs.push(`${primeiro_valor} ${operador_func} ${segundo_valor} = ${result}`)



    historico.innerHTML = list_calcs.join("<br>");
    localStorage.setItem("resultados" , list_calcs.join("<br>"))


})
historico.innerHTML = localStorage.getItem("resultados")



