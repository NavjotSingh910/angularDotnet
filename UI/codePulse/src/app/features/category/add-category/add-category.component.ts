import { Component } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
    
  model:AddCategoryRequest;

  constructor(private categoryservice:CategoryService){
    this.model={
      name:'',
      urlHandle:''
    }
  }
  onFormSubmit(){
    this.categoryservice.addCategory(this.model).subscribe({
      next:(response)=>{
        console.log("this is done")
      }
    })
    console.log(this.model);
  }
}
