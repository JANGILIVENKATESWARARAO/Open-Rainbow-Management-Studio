import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './modules/application-layer/layout/home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],
})
export class AppComponent {

  
}
