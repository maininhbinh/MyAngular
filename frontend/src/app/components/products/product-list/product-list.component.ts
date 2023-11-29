import { Component } from '@angular/core';
import { Iproduct } from 'src/app/interface/Iproduct';
import { ProductServiceService } from 'src/app/service/product.service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Iproduct[] = [];
  searchText:string = '';

  constructor(private productSevice:ProductServiceService){}

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.productSevice.getAll().subscribe(
      {
        next: (data)=> this.products = data
        ,
        error: (error)=>console.log(error)
      }
    )
  }

  onhandleDelete(id:number|string){
    
    if(confirm('are you fucking sure')){ 
      this.productSevice.delete(id).subscribe((data)=>{
        this.products = this.products.filter(item => item._id !== id);
      });
    }
  }
}
