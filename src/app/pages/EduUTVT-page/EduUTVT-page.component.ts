import { Component, effect, signal } from '@angular/core';
import { ICurso } from '../../core/interfaces/cursos';

@Component({
  selector: 'app-edu-utvt-page',
  standalone: true,
  imports: [],
  templateUrl: './EduUTVT-page.component.html',
})
export class EduUTVTPageComponent {

  // Variables reactivas
  title = 'EduUTVT Page';
  cursos = signal<ICurso[]>([]);
  name = signal('');
  duration = signal('');
  level = signal('');
  cuatrimestre = signal('');
  messageError = signal('');
  editId = signal<number | null>(null);

  // Llenar el formulario con los datos del curso a editar
  editCurso(curso: ICurso) {
    this.editId.set(curso.id);
    this.name.set(curso.nombre);
    this.duration.set(curso.duracion.toString());
    this.level.set(curso.nivel);
    this.cuatrimestre.set(curso.cuatrimestre);
    this.messageError.set('');
  }

  // Actualizar el curso editado
  updateCurso() {
    const id = this.editId();
    if (id === null) return;

    const nombre = this.name().trim();
    const duracion = Number(this.duration());
    const nivel = this.level().trim();
    const cuatrimestre = this.cuatrimestre().trim();

    if (!nombre || !duracion || !nivel || !cuatrimestre) {
      this.messageError.set('Todos los campos son obligatorios');
      return;
    }

    if (isNaN(duracion) || duracion <= 0) {
      this.messageError.set('La duración debe ser un número positivo');
      return;
    }

    this.cursos.update(cursos =>
      cursos.map(curso =>
        curso.id === id
          ? { ...curso, nombre, duracion, nivel, cuatrimestre }
          : curso
      )
    );
    this.editId.set(null);
    this.resetForm();
  }

  // Limpia solo los inputs y el mensaje de error
  resetForm() {
    this.name.set('');
    this.duration.set('');
    this.level.set('');
    this.cuatrimestre.set('');
    this.messageError.set('');
    this.editId.set(null);
  }

  // Elimina un curso
  deleteCurso(id: number) {
    this.cursos.update(cursos => cursos.filter(curso => curso.id !== id));
  }

  // Agrega un nuevo curso
  addCurso() {
    const nombre = this.name().trim();
    const duracion = Number(this.duration());
    const nivel = this.level().trim();
    const cuatrimestre = this.cuatrimestre().trim();

    if (!nombre || !duracion || !nivel || !cuatrimestre) {
      this.messageError.set('Todos los campos son obligatorios');
      return;
    }

    if (isNaN(duracion) || duracion <= 0) {
      this.messageError.set('La duración debe ser un número positivo');
      return;
    }

    const newCurso: ICurso = {
      id: this.cursos().length > 0 ? Math.max(...this.cursos().map(c => c.id)) + 1 : 1,
      nombre: nombre,
      duracion: duracion,
      nivel: nivel,
      cuatrimestre: cuatrimestre
    };

    this.cursos.update(cursos => [...cursos, newCurso]);

    // Solo limpia los inputs y mensaje de error
    this.resetForm();
  }
  // Guardar en localStorage y cargar desde localStorage
  constructor() {
    const savedCursos = localStorage.getItem('cursos');
    if (savedCursos) {
      this.cursos.set(JSON.parse(savedCursos));
    }
    effect(() => {
      console.log('Cursos changed: ', this.cursos());
      localStorage.setItem('cursos', JSON.stringify(this.cursos()));
    });
   }

 }
