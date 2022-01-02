function app(){
	
	var msg1;
	var msg2;

	let n1 = prompt("Informe o primeiro número: ");
	let n2 = prompt("Informe o segundo número: ");

	function comparar(n1, n2){
		msg1 = n1 === n2 ? `O número ${n1} e ${n2} são iguais. ` :  `O número ${n1} e ${n2} não são iguais.`;
	}

	comparar(n1, n2);

	let soma = Number(n1) + Number(n2);
	if (soma > 10 && soma < 20){
		msg2 = `Sua soma é ${soma} que é maior que 10 e menor que 20`;
	} else if (soma < 10) {
		msg2 = `Sua soma é ${soma} que é menor que 10 e menor que 20`; 
	} else if (soma > 20) {
		msg2 = `Sua soma é ${soma} que é maior que 10 e maior que 20`;
	}

	console.log(msg1 + msg2);
}

app();
