import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule,NgForm } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';  // Importa Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';  

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    FormsModule, 
    MatFormFieldModule,  // Importa componentes do Angular Material
    MatInputModule,
    MatButtonModule,
    MatCard,
    NgIf,
    MatCardTitle,
    CommonModule
  ],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  successMessage: string | null = null;  // Variável para armazenar a mensagem de sucesso
  errorMessage: string | null = null;    // Variável para armazenar a mensagem de erro

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm): void {  // Tipagem para NgForm
    // Verifica se o formulário é válido
    if (!form.valid) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      this.successMessage = null;
      return;
    }

    
    const formData = form.value;
    console.log('Dados do formulário:', formData);

    // Envia os dados do formulário para a API
    this.http.post('http://localhost:3000/receitas', formData)
      .subscribe(
        response => {
          console.log('Resposta da API:', response);
          this.successMessage = 'Receita enviada com sucesso!';
          this.errorMessage = null;

          // Reseta o formulário
          form.reset();

          // Limpa a mensagem após 5 segundos
          setTimeout(() => {
            this.successMessage = null;
          }, 5000);
        },
        error => {
          console.error('Erro ao enviar dados:', error);
          this.errorMessage = 'Ocorreu um erro ao enviar a receita. Tente novamente.';
          this.successMessage = null;
        }
      );
  }
}