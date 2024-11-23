import { Component } from '@angular/core';
import { Router } from 'express';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {} // Certifique-se de injetar o Router corretamente

  onSubmit() {
    const validEmail = 'user@example.com';
    const validPassword = '123456';
  
    if (this.formData.email === validEmail && this.formData.password === validPassword) {
      console.log('Redirecionando para /dashboard'); // Log para depuração
      (<any>this.router).navigate(['/dashboard'])// Redireciona para /dashboard
    } else {
      alert('Email ou senha incorretos!');
    }
  }
}
