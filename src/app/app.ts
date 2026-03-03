import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Home } from "./Pages/home/home";
import { StateDetail } from './Pages/state-detail/state-detail';
import { Footer } from "./Components/footer/footer";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, StateDetail, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('progetto-covid19');
}
