import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { name: 'Ibanez Alpha A527', price: 1899.99, available: true },
    { name: 'PRS SE CE24 Standard', price: 579.00, available: true },
    { name: 'Martin Super D-18', price: 2799.00, available: false },
    { name: 'Fender Vintera II Strat', price: 1149.99, available: true }
  ];

  cart: any[] = [];

  addToCart(product: any) {
    if (product.available) {
      this.cart.push(product);
    }
  }

  get totalCost() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  clearCart() {
    this.cart = [];
  }
}