import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientHttpService } from '../../services/client-http.service';

import { Router } from 'express';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: any;

  constructor(private clientHttp: ClientHttpService){

  }

  ngOnInit(): void {
    this.clientHttp.get(`/productos`)
    .subscribe({
      next: (response: any) => {
        this.products = response.data;        
      },
      error: (error) => console.error('Error:', error)
    });
    
  }



}
