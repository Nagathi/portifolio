import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projetos = [
    { id: 1, imagem: './assets/projeto1.png' },
    { id: 2, imagem: './assets/em breve.webp' },
    { id: 3, imagem: './assets/em breve.webp' },
    { id: 4, imagem: './assets/em breve.webp' },
    { id: 5, imagem: './assets/em breve.webp' },
    { id: 6, imagem: './assets/em breve.webp' }
  ];

  texto1: string = 'Primeiro é necessário definir as tecnologias utilizadas nesse projeto que foram Angular com TypeScript, Spring Boot com Java 17 e MySQL. Nese projeto foram construídos <a>ggg</a>'

  projetoAtual: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  exibirProjetoAnterior() {
    if (this.projetoAtual > 1) {
      this.projetoAtual--;
    }
  }

  exibirProximoProjeto() {
    if (this.projetoAtual < this.projetos.length) {
      this.projetoAtual++;
    }
  }

  isPrimeiroProjeto() {
    return this.projetoAtual === 1;
  }

  isUltimoProjeto() {
    return this.projetoAtual === this.projetos.length;
  }
}
