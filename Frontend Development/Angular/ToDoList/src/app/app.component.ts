import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

// Task interface removed

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FontAwesomeModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  faTrash = faTrash;

  taskList: { id: number; task: string; }[] = []; 

  task: string = "";

  private readonly localStorageKey = 'mySimpleAngularToDoList';

  ngOnInit(): void {
    this.loadTasksFromLocalStorage();
  }

  private loadTasksFromLocalStorage(): void {
    const storedTasks = localStorage.getItem(this.localStorageKey);
    if (storedTasks) {
      try {
       
        const parsedTasks: { id: number; task: string; }[] = JSON.parse(storedTasks);
        
      
        if (Array.isArray(parsedTasks) && parsedTasks.every(item => typeof item.id === 'number' && typeof item.task === 'string')) {
          this.taskList = parsedTasks;
        } else {
          console.warn("Stored task data is not in the expected format. Resetting list.");
          this.taskList = [];
        }
      } catch (e) {
        console.error("Error parsing tasks from localStorage. Initializing with empty list.", e);
        this.taskList = [];
      }
    } else {
      this.taskList = [];
    }
  }

  private saveTasksToLocalStorage(): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.taskList));
  }

  addTask(): void {
    if (this.task && this.task.trim() !== "") {
      const newId = this.taskList.length > 0 
                    ? Math.max(0, ...this.taskList.map(t => t.id)) + 1 // Added Math.max(0, ...) for safety with empty arrays
                    : 1;
      
      const newTaskObject = { id: newId, task: this.task.trim() };
      this.taskList.push(newTaskObject);
      this.task = "";
      this.saveTasksToLocalStorage();
    }
  }

  deleteTask(id: number): void {
    this.taskList = this.taskList.filter(t => t.id !== id);
    this.saveTasksToLocalStorage();
  }
}