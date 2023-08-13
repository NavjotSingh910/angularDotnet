import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAppComponent } from './features/consumeApi/componentsForApi/blog-app/blog-app.component';

const routes: Routes = [
  // ...
  { path: 'create', component: BlogAppComponent },
  // ...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
