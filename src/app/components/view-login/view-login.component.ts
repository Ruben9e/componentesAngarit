import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { LoginComponent } from '../login/login.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-view-login',
  standalone: true,
  imports: [
    NavComponent,
    LoginComponent,
    FooterComponent
  ],
  templateUrl: './view-login.component.html',
  styleUrl: './view-login.component.css'
})
export class ViewLoginComponent {

}
