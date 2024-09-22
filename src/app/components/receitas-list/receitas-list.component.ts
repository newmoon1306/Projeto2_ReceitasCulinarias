import { Component, OnInit } from '@angular/core';
import { ReceitaService } from '../../services/receita.service';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCard } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatCardTitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { Router } from '@angular/router';
import { Receita } from '../../models/receita.model';

@Component({
  selector: 'app-receitas-list',
  standalone: true,
  imports: [MatCard,MatCardTitle, MatCardContent, MatListModule,CommonModule,RouterModule,],
  templateUrl: './receitas-list.component.html',
  styleUrl: './receitas-list.component.css'
})
export class ReceitasListComponent implements OnInit {
  receitas: Receita[] = [];
  isLoading = true; // Estado de carregamento
  constructor(private receitaService: ReceitaService, private router: Router) {}
  ngOnInit(): void {
    this.receitaService.getReceitas().subscribe(
      (data: Receita[]) => {
        this.receitas = data;
        this.isLoading = false;
      },
      error => {
        console.error('Erro ao buscar receitas:', error);
        this.isLoading = false;
      }
    );
  }
  

  // Método para redirecionar para a página de detalhes da receita
  verDetalhes(id: number) {
    this.router.navigate(['/receita', id]);
  }

}