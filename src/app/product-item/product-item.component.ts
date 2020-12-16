import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';
import { Product } from '../product/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  OnSelected: EventEmitter<Product> =new EventEmitter();
    // productItem: any;

isSelected : boolean;
  constructor(){
  }
   

  ngOnInit() {}
  Select() {
    this.OnSelected.emit(this);
    
  }
}
