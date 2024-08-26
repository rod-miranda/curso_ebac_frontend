// Função Construtora: Veículo
function Veiculo(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

Veiculo.prototype.descricao = function() {
    return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
};

// Função Construtora: Carro
function Carro(marca, modelo, ano, portas) {
    Veiculo.call(this, marca, modelo, ano);
    this.portas = portas;
}

Carro.prototype = Object.create(Veiculo.prototype);
Carro.prototype.constructor = Carro;

Carro.prototype.descricao = function() {
    return `${Veiculo.prototype.descricao.call(this)}, Portas: ${this.portas}`;
};

// Função Construtora: Moto
function Moto(marca, modelo, ano, tipo) {
    Veiculo.call(this, marca, modelo, ano);
    this.tipo = tipo;
}

Moto.prototype = Object.create(Veiculo.prototype);
Moto.prototype.constructor = Moto;

Moto.prototype.descricao = function() {
    return `${Veiculo.prototype.descricao.call(this)}, Tipo: ${this.tipo}`;
};

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const carro2 = new Carro("Honda", "Civic", 2019, 4);
const moto1 = new Moto("Yamaha", "MT-07", 2021, "Naked");

// Exibindo descrições dos veículos
console.log(carro1.descricao());
console.log(carro2.descricao());
console.log(moto1.descricao());