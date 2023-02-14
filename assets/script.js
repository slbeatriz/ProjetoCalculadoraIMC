const calcular = document.getElementById ("calcular");

function imc() {
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== ''&& altura !== '' && peso !== ''){
        
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        resultado.textContent = valorIMC;

        let classificacao = "";

        if (valorIMC < 18.5){
            classificacao = "está abaixo do peso. Tome cuidado";
        }
        else if (valorIMC < 25){
            classificacao = "está com peso ideal. Parabéns!";
        
        }else if (valorIMC < 30){
                classificacao = "está um pouco acima do peso.";
        
        }else if (valorIMC < 35){
            classificacao = "está com obesidade grau I. Tome cuidado!";
        }
        else if (valorIMC < 40){
            classificacao = "está com obesidade grau II. Tome cuidado!";

        }else {
            classificacao = "está com obesidade grau III. Tome cuidado!";
        }
        
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você ${classificacao}`;
        }

else {
    resultado.textContent = "Por favor, preencha todos os campos!"
}
}
calcular.addEventListener("click", imc);  