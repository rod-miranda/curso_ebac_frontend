const alunos = [
    {nome: 'Rodrigo', nota: 8},
    {nome: 'Ana', nota: 5},
    {nome: 'João', nota: 7},
    {nome: 'Maria', nota: 4},
    {nome: 'Pedro', nota: 6}
];

const filtrarAlunosAprovados = (alunos) => 
    alunos.filter(aluno => aluno.nota >= 6);

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);