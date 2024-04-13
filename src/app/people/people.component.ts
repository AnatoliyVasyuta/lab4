import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Импорт FormsModule

import { CommonModule } from '@angular/common'; // Импорт CommonModule
/*interface Person {
  firstName: string;
  lastName: string;
  age: number;
  numberOfChildren: number;
  dogName: string;
}*/

interface Faculty {
  facultyName: string;
  deanFullName: string;
  phone: string;
  address: string;
}

@Component({
  selector: 'app-people',
  standalone: true,
  imports:[CommonModule, FormsModule],//Добавляем им
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
 /* public people: Person[] = [];
  public dogNameFilter: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{record: {[key: string]: Person}}>('https://api.jsonbin.io/v3/qs/661a6f65ad19ca34f8595e32')
      .subscribe({
        next: (response) => {
          this.people = Object.values(response.record); // Убедитесь, что вы используете правильный ключ для доступа к данным
          console.log(this.people); // Добавьте логирование для отладки
        },
        error: (error) => {
          console.error('Failed to fetch data:', error);
        }
      });
  }
  applyFilter() {
    // Пока пусто, так как фильтрация происходит на стороне шаблона
  }*/
  public faculties: Faculty[] = [];
  public facultyNameFilter: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<{record: {[key: string]: Faculty}}>('https://api.jsonbin.io/v3/qs/661a7fb8e41b4d34e4e3aebe')
      .subscribe({
        next: (response) => {
          this.faculties = Object.values(response.record);
        },
        error: (error) => {
          console.error('Failed to fetch data:', error);
        }
      });
  }
  applyFilter() {
    // Фильтрация уже происходит на стороне шаблона
  }
}
