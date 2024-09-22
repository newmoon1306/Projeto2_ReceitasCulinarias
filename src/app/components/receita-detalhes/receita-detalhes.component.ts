import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from '../../services/receita.service';
import { CommonModule } from '@angular/common';
import { MatCardContent } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-receita-detalhes',
  standalone: true,
  imports: [CommonModule,MatCardTitle,MatCardHeader,MatCard,MatCardContent],
  templateUrl: './receita-detalhes.component.html',
  styleUrl: './receita-detalhes.component.css'
})

export class ReceitaDetalhesComponent implements OnInit {
  receita: any;

  // Injetar HttpClient no construtor
  constructor(
    private http: HttpClient, 
    private route: ActivatedRoute,
    private router: Router // Para navegação
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getReceita(id);
  }

  getReceita(id: string | null) {
    this.http.get(`http://localhost:3000/receitas/${id}`)
      .subscribe({
        next: (data: any) => {
          this.receita = data;
        },
        error: (error) => {
          console.error('Erro ao buscar receita:', error);
        }
      });
  }

  voltar(): void {
    this.router.navigate(['/receitas']);
  }
}