import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hamstercard',
  imports: [],
  standalone:true,
  templateUrl: './hamstercard.component.html',
  styleUrl: './hamstercard.component.scss'
})
export class HamstercardComponent {

  @Input() text: string = '';
  @Input() bild: string = '';

}


