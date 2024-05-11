import { Component, Input,inject } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Todo } from '../todo';
import { CommonModule } from '@angular/common';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [ButtonComponent,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  todoService: TodoService = inject(TodoService);
@Input() todoname: string = '';
@Input() id: number = 0;

isEdit: boolean = false;

toggleEdit(){
  this.isEdit = !this.isEdit;
}

save(){
let newValue = (document.getElementById(String(this.id)) as HTMLInputElement).value;
this.todoService.editTodo(this.id,newValue);
this.toggleEdit();
}


}
