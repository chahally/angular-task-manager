/* Task Model
 * This interface defines the structure of a Task object used throughout the application. 
 */

export interface Task {

  // Unique identifier for each task
  id: number;

  // Text description of the task
  title: string;

  // Indicates whether the task has been completed
  completed: boolean;

}