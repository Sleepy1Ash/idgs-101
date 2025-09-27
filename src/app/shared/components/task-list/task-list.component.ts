import { Component, input, output } from '@angular/core';
import { ITask } from '../../../core/interfaces';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent { 
  outputTaskId = output<number>();
  tasks = input.required<ITask[]>();
  deleteTask(id: number) {
    this.outputTaskId.emit(id);
  }
}
