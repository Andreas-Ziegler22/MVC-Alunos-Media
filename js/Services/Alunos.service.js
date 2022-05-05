class AlunosService {
  constructor() {
    this.alunos = [];
  }

  add(aluno) {
    if (!aluno instanceof AlunoModel) {
      throw TypeError("aluno must be an instance of AlunoModel");
    }
    this.alunos.push(aluno);
  }

  edit(aluno) {
    return aluno;
  }
  searchById(id) {
    return this.alunos.find((aluno) => aluno._id === id);
  }
}
