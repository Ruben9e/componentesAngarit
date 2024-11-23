import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { ContactoComponent } from '../contacto/contacto.component';

@Component({
  selector: 'app-view-contacto',
  standalone: true,
  imports: [NavComponent,FooterComponent,ContactoComponent],
  templateUrl: './view-contacto.component.html',
  styleUrl: './view-contacto.component.css'
})
export class ViewContactoComponent {

}
