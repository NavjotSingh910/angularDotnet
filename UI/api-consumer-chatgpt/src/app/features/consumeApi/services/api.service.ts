import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { categoryModel } from '../Models/createCategoryModel.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl="https://localhost:7024/api/Categories";
  constructor(private http:HttpClient) {
   }

   postCategory(categoryModelObj:categoryModel):Observable<categoryModel>{
    const url=`${this.apiUrl}`;
    return this.http.post<categoryModel>(url,categoryModelObj);
   }

}
