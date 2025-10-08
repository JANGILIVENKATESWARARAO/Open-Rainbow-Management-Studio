import { Component, input, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot',
  templateUrl: './dot.component.html',
  styleUrls: ['./dot.component.css'],
  standalone:true
})
export class DotComponent {
  @Input() label = "Text"
  @Input() labelColor: string = 'lightgreen'
  @Input() labelPosition: 'left' | 'right' = 'left';
  @Input() dotColor: string = "lightgreen"
  //  @Input() dotFirst: boolean = false;

}
