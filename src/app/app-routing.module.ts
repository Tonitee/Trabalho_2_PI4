import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { FormProdutosComponent } from './form-produtos/form-produtos.component';

const appRoutes: Routes = [
  { path: "tabela", component: TabelaProdutosComponent },
  { path: "novo", component: FormProdutosComponent },
  { path: "edit/:id", component: FormProdutosComponent},
  { path: "", redirectTo:"/tabela", pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
