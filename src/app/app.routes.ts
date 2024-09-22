import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { ReceitasListComponent } from './components/receitas-list/receitas-list.component';
import { ReceitaDetalhesComponent } from './components/receita-detalhes/receita-detalhes.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [
    { path: '', redirectTo: '/receitas', pathMatch: 'full' },
    { path: 'receitas', component: ReceitasListComponent },
    { path: 'receita/:id', component: ReceitaDetalhesComponent }, // Rota para os detalhes da receita
    { path: '', redirectTo: '/receitas', pathMatch: 'full' },
    { path: 'contato', component: ContatoComponent },
    { path: '**', redirectTo: '/receitas' }
];
