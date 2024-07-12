import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input() quantity!: number;
  @Input() max!: number;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();


  increment(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    };
  }

  decrement(): void {
    if (this.quantity > 0) {
      this.quantity -= 1;
      this.quantityChange.emit(this.quantity);
    }
  }
  
  changeQuantity(event: KeyboardEvent): void {
    this.quantityChange.emit(this.quantity);
  }

}
