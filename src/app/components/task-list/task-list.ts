import { Component } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    <div class="task-list">
      <!-- Title -->
      <h2>🗒️ My To-Do List</h2>

      <!-- Loop over tasks -->
      <ng-container *ngFor="let task of tasks">
        <app-task-item
          [task]="task"
          (toggle)="toggleTask($event)"
          (delete)="deleteTask($event)">
        </app-task-item>
      </ng-container>
    </div>
  `,
  styles: [`
    /* Container for all tasks */
    .task-list {
      max-width: 500px;
      margin: 3rem auto;
      padding: 1.5rem;
      background: #fff9f4;
      border-radius: 16px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    }

    /* Title styling */
    h2 {
      text-align: center;
      margin-bottom: 1.5rem;
      color: #ff6f61;
    }
  `]
})

export class TaskListComponent {
  // Example task data
  tasks: Task[] = [
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk Bruno', completed: true },
    { id: 3, title: 'Finish Angular project', completed: false }
  ];

  // Toggle task completion
  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
  }

  // Delete a task
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }
}