import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

// RouterOutlet

export const routes: Routes = [
    { path: 'login', component: LoginComponent}, // Pagina Inicial
    { path: 'dashboard', component: DashboardComponent }, // Pagina da Dashboard
    { path: '**', redirectTo: 'login', pathMatch: 'full' } // Redirecionar para login
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configuração das rotas
    exports: [RouterModule]
})

export class AppRoutingModule { }