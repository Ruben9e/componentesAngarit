import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientHttpService } from '../../services/client-http.service';
import { CarritoService } from '../../services/carrito.service';

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

  constructor(
    private clientHttp: ClientHttpService,
    private carritoService: CarritoService){
  }

  ngOnInit(): void {
    this.clientHttp.get('http://localhost:3000/productos')  // Cambia la ruta relativa por la URL completa
    .subscribe({
      next: (response: any) => {
        this.products = response.data;        
      },
      error: (error) => console.error('Error:', error)
    });
  }
  
  agregarAlCarrito(producto: any): void {
    this.carritoService.agregarAlCarrito(producto); // Llamamos al servicio para agregar el producto
    alert(`${producto.nombre} ha sido añadido al carrito.`);
  }

}
