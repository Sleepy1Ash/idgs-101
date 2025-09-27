import { Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent { 
  text_field = signal('');
  messageError = signal('');
  outputTask = output<ITask>();
  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }
  addTask() {
      const name = this.text_field().trim();
      if (!name) {
        this.messageError.set('The task name is required');
        return;
      }
      const newTask: ITask = {
        id: Math.floor(Math.random() * 10000),
        name: name
      };
      this.outputTask.emit(newTask);
      this.resetTask();
    }
}
