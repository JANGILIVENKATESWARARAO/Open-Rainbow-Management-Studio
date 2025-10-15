import { Component } from '@angular/core';
import { DotComponent } from "../../feature-components/dot/dot.component";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css',
  standalone: true,
  imports: [DotComponent],
})
export class AdminHeaderComponent {

}
