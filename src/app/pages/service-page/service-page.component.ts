import { Component, inject } from '@angular/core';
import { TaskService } from '../../core/services/task.service';
import { ITask } from '../../core/interfaces/index';
import { TaskComponent } from "../../shared/components/task/task.component";
import { TaskListComponent } from '../../shared/components/task-list/task-list.component';

@Component({
  selector: 'app-service-page',
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent { 
  taskService = inject(TaskService);
  addNewTask(task: ITask) {
    this.taskService.addTask(task);
  }
  removeTask(taskId: number) {
    this.taskService.removeTask(taskId);
  }
}
