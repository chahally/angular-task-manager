import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

/**
 * TaskService
 * This service acts as a central data store for tasks, and allows multiple components to access and modify the same task list.
 */

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // In-memory list of tasks
  tasks: Task[] = [];

  /**
   * Returns the current list of tasks
   */
  getTasks() {
    return this.tasks;
  }

  /**
   * Adds a new task to the task list
   */
  addTask(task: Task) {
    this.tasks.push(task);
  }

  /**
   * Deletes a task based on its id
   */
  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  /**
   * Toggles the completed state of a task
   */
  toggleTask(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

}