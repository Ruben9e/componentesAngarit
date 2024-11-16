import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-view-home',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent,
    HomeComponent
  ],
  templateUrl: './view-home.component.html',
  styleUrl: './view-home.component.css'
})
export class ViewHomeComponent {

}
