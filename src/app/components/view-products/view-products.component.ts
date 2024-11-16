import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { ProductsComponent } from '../products/products.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-view-products',
  standalone: true,
  imports: [NavComponent, FooterComponent, ProductsComponent],
  templateUrl: './view-products.component.html',
  styleUrl: './view-products.component.css'
})
export class ViewProductsComponent {

}
