import { Component, OnInit } from '@angular/core';
import { CartsService } from '../carts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _cartsService: CartsService) { }

  ngOnInit(): void {
    this.cartitems = this._cartsService.getcartitems();
  }
  items = [
{ name:'item1' ,imag:'assets/img/pr1.jpg',id:'pr1',cost : '18'},
{ name:'item2' ,imag:'assets/img/pr2.jpeg',id:'pr2',cost : '12'},
{ name:'item3' ,imag:'assets/img/pr3.jpg',id:'pr3',cost : '17'},
{ name:'item4' ,imag:'assets/img/pr4.jpg',id:'pr4',cost : '21'},
{ name:'item5' ,imag:'assets/img/pr5.jpg',id:'pr5',cost : '23'},
{ name:'item6' ,imag:'assets/img/pr6.jpg',id:'pr6',cost : '15'},
{ name:'item7' ,imag:'assets/img/pr7.jpg',id:'pr7',cost : '25'},
{ name:'item8' ,imag:'assets/img/pr8.jpeg',id:'pr8',cost : '24'}
];

fullopen(evt:any)
{
  var v=evt.target.parentElement.childNodes[2].style.display="block";
}
fullclose(evt:any){
  var v=evt.target.parentElement.parentElement.style.display="none";
}
cartitems:any=[];

  addtocart(image:any,cost:any){

   var ele={imag:image,price:cost}
    this._cartsService.addcartitems(ele);
//   console.log(this.cartitems)

  }

 

}
