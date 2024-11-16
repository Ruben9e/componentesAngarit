import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { DetailProductsComponent } from '../detail-products/detail-products.component';

@Component({
  selector: 'app-view-detail-products',
  standalone: true,
  imports: [FooterComponent, NavComponent, DetailProductsComponent],
  templateUrl: './view-detail-products.component.html',
  styleUrl: './view-detail-products.component.css'
})
export class ViewDetailProductsComponent {

}
