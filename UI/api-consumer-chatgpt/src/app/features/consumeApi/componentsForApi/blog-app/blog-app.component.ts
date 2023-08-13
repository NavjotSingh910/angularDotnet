import { Component } from '@angular/core';
import { categoryModel } from '../../Models/createCategoryModel.model';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-blog-app',
  templateUrl: './blog-app.component.html',
  styleUrls: ['./blog-app.component.css']
})
export class BlogAppComponent {
  categoryModelInComponet:categoryModel={
    name:'',
    urlHandle:''
  }
  constructor(private apiService:ApiService){}
  ngOnInti():void{}

  createBlogNameUrl():void{
    this.apiService.postCategory(this.categoryModelInComponet).subscribe(response =>{
      console.log('done successfully'+ response)
    })
  }
}
