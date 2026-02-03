import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./component/login/login";
import { CommonModule } from '@angular/common';
import { Dashboard } from "./component/dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [CommonModule, Login, Dashboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('basicInterceptor');
}
