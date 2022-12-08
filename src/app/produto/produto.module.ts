import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
  
import { ProdutoRoutingModule } from './produto-routing.module';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
  
@NgModule({
  declarations: [IndexComponent, ViewComponent, CreateComponent, EditComponent, HomeComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule {}