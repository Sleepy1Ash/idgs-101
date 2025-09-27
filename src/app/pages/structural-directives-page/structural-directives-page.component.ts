import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent {
  //Condicional If
  isVisible = signal(true);
  toggleVisibility() {
    this.isVisible.update((current) => !current);
  }
  //Condicional Switch
  viewMode=signal<'none'|'list'|'grid'>('none');
  setViewMode(mode:'none'|'list'|'grid'){
    this.viewMode.set(mode);
  }
  //Condicional For
  users = signal([
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
    { id: 3, name: 'Charlie', role: 'user' },
  ]);
 }
