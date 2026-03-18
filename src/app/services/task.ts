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

  // Returns the current list of tasks
  getTasks() {
  const data = localStorage.getItem('tasks');
  return data ? JSON.parse(data) : [];
}

  // Adds a new task to the task list
  addTask(task: Task) {
  this.tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(this.tasks));
}

  // Deletes a task based on its id
  deleteTask(id: number) {
  const index = this.tasks.findIndex(task => task.id === id);
  if (index > -1) {
    this.tasks.splice(index, 1);
  }
}

  // Toggles the completed state of a task
  toggleTask(id: number) {
    const task = this.tasks.find(task => task.id === id);

    if (task) {
      task.completed = !task.completed;
    }
  }

}