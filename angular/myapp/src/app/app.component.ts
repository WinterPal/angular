import { Component } from '@angular/core';
import { KalkulatorService } from './kalkulator.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [KalkulatorService]
})
export class AppComponent {
  title = 'myapp';
  dodawanie: number = 0;
  constructor(kalkulator: KalkulatorService){
    this.dodawanie = kalkulator.dodaj(3,6,7,9,20);
  }
}
