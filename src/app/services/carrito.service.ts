import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = []; // Lista de productos en el carrito

  constructor() { }

  // Método para agregar un producto al carrito
  agregarAlCarrito(producto: any): void {
    this.carrito.push(producto); // Añade el producto al carrito
    console.log('Producto añadido al carrito', producto);
  }

  // Método para obtener los productos del carrito
  obtenerCarrito(): any[] {
    return this.carrito; // Devuelve los productos en el carrito
  }

  // Método para eliminar un producto del carrito
  eliminarDelCarrito(productoId: number): void {
    this.carrito = this.carrito.filter(producto => producto.id !== productoId); // Elimina el producto por ID
    console.log('Producto eliminado del carrito', productoId);
  }

  // Método para limpiar el carrito
  vaciarCarrito(): void {
    this.carrito = [];
    console.log('Carrito vaciado');
  }
}
