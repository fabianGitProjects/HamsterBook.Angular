import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HamstercardComponent } from './hamstercard/hamstercard.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HamstercardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
hamsterArray = [
  'Hallo, mein Name ist Fabian und ich bin hier, um neue Freunde zu finden!',
  'Freut mich, dass ihr hier seid!',
  'My name is Alyona and i like cakes!',
  'Ich Teste gerne neue Software',
  'Ich bin hier der Schönste Hamster!'
];

hamsterbild = [
  './hamster/hamster1.png',
  './hamster/hamster2.jpg',
  './hamster/hamster3.jpg',
  './hamster/hamster4.jpg',
  './hamster/hamster5.png'
];


}

