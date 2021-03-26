import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'blog', component: BlogComponent
  } 
  // add travels incl. travelId later 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
