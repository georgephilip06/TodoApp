import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from './card/card.component';
import {ButtonComponent} from './button/button.component';
import { TodoService } from './todo.service';
import { CommonModule } from '@angular/common';
import { DeclareComponentTemplateInfo } from '@angular/compiler';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CardComponent,ButtonComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';

                            //using Inject we can access methods
  todoService: TodoService = inject(TodoService);
  
  constructor(){
    this.todoService.todos=JSON.parse(localStorage.getItem('todos') || '') as Todo[];
  }
}
