import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imgCollection: Array<object> = [
    {
      image: '../../assets/img/Rectangle 185.png',
      thumbImage: '../../assets/img/Rectangle 179.png',
      alt: 'Image 1',
      title: 'Image 1'
    }
  ];

}
