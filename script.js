function ConverterDolarReal() {
  const valorElemento = document.getElementById("valor");
  const valor = valorElemento.value;
  const valorEmDolar = parseFloat(valor);
  const valorDolarEmReal = valorEmDolar * 5;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = "O Resultado da conversão é R$ " + valorDolarEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterEuroReal() {
  const valorElemento = document.getElementById("valor");
  const valor = valorElemento.value;
  const valorEmEuro = parseFloat(valor);
  const valorEuroEmReal = valorEmEuro * 6;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = "O Resultado da conversão é R$ " + valorEuroEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterLibraReal() {
  const valorElemento = document.getElementById("valor");
  const valor = valorElemento.value;
  const valorEmLibra = parseFloat(valor);
  const valorLibraEmReal = valorEmLibra * 7;

  const elementoValorConvertido = document.getElementById("valorConvertido");
  const valorConvertido = "O Resultado da conversão é R$ " + valorLibraEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
