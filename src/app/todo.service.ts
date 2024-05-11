import { Injectable } from '@angular/core';
import { Todo } from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todos: Todo[]=[] as Todo[];
  constructor() { }

  addTodo()
  {
    //  debugger
     let todo=(document.getElementById('inputData') as HTMLInputElement).value;
      let   id=Math.round(Math.random()*100);
       let  obj={id:id,todoName:todo};
       (document.getElementById('inputData') as HTMLInputElement).value='';
         this.todos.push(obj);
         localStorage.setItem('todos',JSON.stringify(this.todos));
        // console.log("Array is......",this.todos);
  
    }

  deteleTodo(id: number)
  {
    // debugger
    let newname=this.todos.filter(obj=>obj.id!==id);
    this.todos=newname;
    localStorage.setItem('todos',JSON.stringify(this.todos));
        
  }

  editTodo(id: number ,val: string)
  {
    this.todos.forEach((obj)=>{
      if(obj.id === id){
           obj.todoName = val;
      }
    });
    localStorage.setItem('todos',JSON.stringify(this.todos));
    
  }
}
