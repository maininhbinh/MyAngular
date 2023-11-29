import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductServiceService } from 'src/app/service/product.service.service';
import { Iproduct } from 'src/app/interface/Iproduct';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  selected!:File;
  product!:Iproduct;
  mode:"create"|"update" = "create";
  files = '';
  fileName = '';

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
  })

  constructor(private formBuilder : FormBuilder, private productSevice : ProductServiceService, private router:ActivatedRoute){
  }

  async ngOnInit() {
    let {id} = this.router.snapshot.params;
    
    if(id){
      this.mode = 'update';
      this.product = await lastValueFrom(this.productSevice.getById(id));
      this.productForm.patchValue(this.product as any);
    }
  }

  onFileSelected(event:any){
    this.files = event.target.files[0];
  }

  async onhandleSubmit(){
    if(this.mode == 'create'){
      if(this.productForm.valid){
        try{
          lastValueFrom(this.productSevice.create(this.productForm.value as Iproduct, this.files as any)); 
          alert('thêm thành công');
          this.productForm.patchValue({name: "", price: 0});
        }catch(error){
          console.log(error);
        }
      }else{
        alert('không được để trống')
        return
      }
    }else{
      if(this.productForm.valid){
        try{
          lastValueFrom(this.productSevice.update({...this.product,...this.productForm.value as Iproduct})); 
          alert('edit thành công');
          window.location.replace('admin')
        }catch(error){
          console.log(error);
        }
      }else{
        alert('không được để trống')
        return
      }
    }
  }
}
