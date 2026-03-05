import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

/**
 * TaskListComponent
 * Responsible for displaying all tasks in the application.
 */

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.css']
})
export class TaskListComponent {

  // Local array of tasks retrieved from the service
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {

    // Retrieve the tasks from the shared service
    this.tasks = this.taskService.getTasks();

  }

  /**
   * Removes a task from the list
   */
  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  /**
   * Toggles completion status of a task
   */
  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

}