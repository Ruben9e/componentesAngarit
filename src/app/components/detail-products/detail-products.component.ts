import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-products.component.html',
  styleUrl: './detail-products.component.css'
})
export class DetailProductsComponent implements OnInit {
  products= [
    { id: 1, nombre: 'estante cuadrado', precio: 150000, link:"https://industriascruzmr.com/wp-content/uploads/2021/10/estante-metal-madera-1.jpeg", descipcion:"Sencillez que impresiona: este estante metálico es una solución práctica y resistente para organizar tus pertenencias. Su diseño minimalista se adapta a cualquier espacio, ofreciendo estabilidad y durabilidad sin comprometer la estética."},
    { id: 2, nombre: 'estante escalonado', precio: 250000, link:"https://i.pinimg.com/236x/6b/c1/10/6bc110d082cf5100bd01b433b54d94d3.jpg",descipcion:"Un diseño versátil y moderno que combina funcionalidad y estilo. Este estante escalonado ofrece múltiples niveles para exhibir o almacenar objetos, añadiendo un toque decorativo único a cualquier ambiente, ya sea en el hogar o en el trabajo."},
    { id: 3, nombre: 'repisa', precio: 80000, link:"https://i.etsystatic.com/7888973/r/il/e94036/4091297358/il_570xN.4091297358_o5en.jpg",descipcion:"Ligera pero resistente, esta repisa metálica es ideal para maximizar el uso de tus paredes. Perfecta para libros, plantas u objetos decorativos, su diseño elegante y compacto se adapta a cualquier espacio, desde la sala hasta la oficina."},
    { id: 4, nombre: 'mesa', precio: 300000, link:"https://ambiant.com.mx/cdn/shop/products/Mesa-metalica-Nova-150-negro.jpg?v=1598477362&width=1000",descipcion:"Diseñada para resistir el uso diario, esta mesa metálica combina robustez y diseño contemporáneo. Es perfecta para cualquier entorno, ya sea como mesa de comedor, de trabajo o auxiliar, garantizando funcionalidad y estilo en una sola pieza."},
    { id: 5, nombre: 'escritorio', precio: 250000, link:"https://http2.mlstatic.com/D_NQ_NP_895258-MCO80313577621_102024-O.webp",descipcion:"Un escritorio hecho para durar, con una estructura metálica robusta y un diseño cómodo. Ideal para trabajar o estudiar, este mueble combina practicidad y elegancia, proporcionando un espacio organizado y moderno para cualquier actividad." },
  ];

  id: number | null = null;
  product: any = null;
  mostrarDetalle = true;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.product =  this.products.find(product => product.id === this.id);
    console.log("Id pasado producto ", this.id , this.product );
    
  }
  
  
}
