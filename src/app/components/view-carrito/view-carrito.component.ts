import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service'; // Importar el servicio
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { FooterComponent } from '../footer/footer.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-view-carrito',
  standalone: true,
  imports: [CommonModule,
    FooterComponent,
    NavComponent],  // Asegúrate de agregar CommonModule aquí
  templateUrl: './view-carrito.component.html',
  styleUrls: ['./view-carrito.component.css']
})
export class ViewCarritoComponent implements OnInit {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.obtenerCarrito();  // Obtener los productos del carrito
  }

  // Método para eliminar productos del carrito
  eliminarDelCarrito(productoId: number): void {
    this.carritoService.eliminarDelCarrito(productoId);
    this.carrito = this.carritoService.obtenerCarrito(); // Actualizar el carrito después de eliminar el producto
  }

  // Método para vaciar el carrito
  vaciarCarrito(): void {
    this.carritoService.vaciarCarrito();
    this.carrito = []; // Limpiar el carrito en la vista
  }
}
