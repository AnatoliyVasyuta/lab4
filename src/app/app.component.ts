import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

// Убедитесь, что PeopleComponent объявлен как standalone
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, // Для использования ngFor, ngIf и прочих директив
    HttpClientModule, // Для выполнения HTTP-запросов
    RouterOutlet, // Для маршрутизации внутри компонента
    PeopleComponent // Только если PeopleComponent также объявлен как standalone
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Исправлено на styleUrls
})
export class AppComponent {
  title = 'lab4lastTry';
}
