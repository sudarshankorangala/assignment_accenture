import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentContentComponent } from './assignment-content/assignment-content.component';


const routes: Routes = [  { path: '', component: AssignmentContentComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
