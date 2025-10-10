import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-count-widget',
  templateUrl: './count-widget.component.html',
  styleUrl: './count-widget.component.css',
  standalone:true
})
export class CountWidgetComponent {
  @Input() label: string = "Total"
  @Input() labelColor: string = "gray"
  @Input() value: number = 20
  @Input() valueColor: string = "skyblue"
  @Input() borderColor: string = "gray"
  @Input() backgroundColor: string = "white"
  @Input() showBorder: boolean = true;
}
