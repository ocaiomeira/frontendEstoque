import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'produto', redirectTo: 'produto/home', pathMatch: 'full'},
  { path: 'produto/index', component: IndexComponent },
  { path: 'produto/:postId/view', component: ViewComponent },
  { path: 'produto/create', component: CreateComponent },
  { path: 'produto/:postId/edit', component: EditComponent },
  { path: 'produto/home', component: HomeComponent },
];
  
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }