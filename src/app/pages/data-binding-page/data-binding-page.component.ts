import { Component, signal } from '@angular/core';
import { ITask } from '../../core/interfaces';

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {
  title = 'Data Binding Page';

  // Signals
  text_field = signal('');
  messageError = signal('');
  tasks = signal<ITask[]>([]);

  // Limpia solo el input y el mensaje de error
  resetTask() {
    this.text_field.set('');
    this.messageError.set('');
  }

  // Elimina una tarea
  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  // Agrega una nueva tarea
  addTask() {
    const name = this.text_field().trim();
    if (!name) {
      this.messageError.set('The task name is required');
      return;
    }

    const newTask: ITask = {
      id: this.tasks().length > 0 ? Math.max(...this.tasks().map(t => t.id)) + 1 : 1,
      name: name
    };

    this.tasks.update(tasks => [...tasks, newTask]);

    // Solo limpia el input y mensaje de error
    this.resetTask();
  }
}
