import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-angular-shop');

  products = signal<Product[]>([
    { id: 1, name: 'Ibanez Alpha A527', price: 1899.99, image: 'Ibanez Alpha A527.jpg', isNew: true },
    { id: 2, name: 'PRS SE CE24 Standard', price: 579.00, image: 'PRS SE CE24 Standard.jpg' },
    { id: 3, name: 'Martin Super D-18', price: 2799.00, image: 'Martin Super D-18.jpg' },
    { id: 4, name: 'Fender Vintera II Strat', price: 1149.99, image: 'Fender Vintera II Strat.jpg' }
  ]);

  cart = signal<Product[]>([]);

  cartCount = computed(() => this.cart().length);

  addToCart(product: Product) {
    this.cart.update(cart => [...cart, product]);
    alert(`${product.name} added to cart!`);
  }
}
