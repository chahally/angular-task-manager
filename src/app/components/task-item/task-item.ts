import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,           
  imports: [CommonModule],    
  template: `
    <!-- Task card -->
    <div class="task-item" [class.completed]="task.completed">

      <!-- Notebook icon for visual effect -->
      <span class="task-icon">📝</span>

      <!-- Checkbox toggles task completion -->
      <input type="checkbox" [checked]="task.completed" (change)="onToggle()" />

      <!-- Task title -->
      <span class="task-title">{{ task.title }}</span>

      <!-- Delete button -->
      <button class="delete-btn" (click)="onDelete()">❌</button>
    </div>
  `,
  styles: [`
    /* Container for each task */
    .task-item {
      display: flex;
      align-items: center;
      padding: 0.6rem 1rem;
      margin-bottom: 0.5rem;
      background: linear-gradient(135deg, #ffecd2, #fcb69f);
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    /* Hover effect */
    .task-item:hover {
      transform: scale(1.02);
    }

    /* Notebook icon */
    .task-icon {
      margin-right: 0.6rem;
      font-size: 1.4rem;
    }

    /* Checkbox style */
    input[type="checkbox"] {
      margin-right: 0.6rem;
      width: 18px;
      height: 18px;
      cursor: pointer;
    }

    /* Task title */
    .task-title {
      flex-grow: 1;
      font-size: 1.05rem;
      font-weight: 500;
      color: #333;
    }

    /* Strikethrough completed tasks */
    .task-item.completed .task-title {
      text-decoration: line-through;
      color: #888;
    }

    /* Delete button */
    .delete-btn {
      background: transparent;
      border: none;
      font-size: 1.1rem;
      cursor: pointer;
      transition: color 0.2s;
    }

    .delete-btn:hover {
      color: #d00000;
    }
  `]
})

export class TaskItemComponent {
  @Input() task!: Task; // Receive a task from parent
  @Output() toggle = new EventEmitter<number>(); // Emit toggle events
  @Output() delete = new EventEmitter<number>(); // Emit delete events

  // Emits toggle event to parent
  onToggle() { this.toggle.emit(this.task.id); }

  // Emits delete event to parent
  onDelete() { this.delete.emit(this.task.id); }
}