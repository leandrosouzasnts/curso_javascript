class contaBancaria {
    constructor(agencia, numero, tipo){  
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor) {
        if (this._saldo < valor) {
            return 'Operação negada';
        }
        this._saldo -= valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo += valor;
        
        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = "Conta-Corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(cartaoCredito){
        this._cartaoCredito = cartaoCredito;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero)
        this.tipo = "Conta-Poupança";
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = "Conta-Universitária";
    }
    sacar(valor){
       if (valor > 500){
           return "Operacao negada!";
       }
       
       this._saldo -= valor;
    }
}

const minhaConta = new contaBancaria(1, 123, "Conta-Master", 100);
const minhaContaCorrente = new contaCorrente(1, 123, true);

console.log(minhaContaCorrente.saldo);
minhaContaCorrente.depositar(300);
console.log(minhaContaCorrente.saldo);