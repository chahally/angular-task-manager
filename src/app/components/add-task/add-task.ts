import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task';
import { Task } from '../../models/task.model';

/**
 * AddTaskComponent
 * This component allows users to create new tasks.
 */

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.html',
  styleUrls: ['./add-task.css']
})
export class AddTaskComponent {

  // Stores the task title entered by the user
  title = '';

  constructor(private taskService: TaskService) {}

  /**
   * Creates a new task and sends it to the TaskService
   */
  addTask() {

    const task: Task = {

      // Using current timestamp as a simple unique id
      id: Date.now(),

      // Task title entered by the user
      title: this.title,

      // New tasks are initially incomplete
      completed: false

    };

    // Add the task through the service
    this.taskService.addTask(task);

    // Clear the input field after submission
    this.title = '';
  }

}