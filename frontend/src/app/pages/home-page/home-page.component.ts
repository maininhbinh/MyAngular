import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Iproduct } from 'src/app/interface/Iproduct';
import { ProductServiceService } from 'src/app/service/product.service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  products!:Iproduct[];

  constructor(private service: ProductServiceService){

  }

  async ngOnInit() {
    this.products = await lastValueFrom(this.service.getAll());
  }
}
