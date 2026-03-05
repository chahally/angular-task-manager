import { Component } from '@angular/core';
import { AddTaskComponent } from './components/add-task/add-task';
import { TaskListComponent } from './components/task-list/task-list';

/**
 * Root Application Component
 * This component acts as the main container for the task manager application.
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AddTaskComponent, TaskListComponent],
  template: `
    <app-add-task></app-add-task>
    <app-task-list></app-task-list>
  `
})
export class AppComponent {}