import { Injectable } from '@angular/core';
import { Produto } from './produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  produtos: Produto[] = [];
  constructor() { }

  adicionar(produto: Produto){
    this.produtos.push(produto);
  }

  listar(): Produto[]{
    return(this.produtos);
  }
  
  deletar(id){
    const index = this.getIndice(id);
    console.log("Index",index);
    if(index >= 0){
      this.produtos.splice(index,1);
    }
  }

  buscarPorId(id: number): Produto{
    return this.produtos.find(prod => prod._id == id);
  }

  editar(id:number, prod:Produto){
    const index = this.getIndice(id);
    if(index >= 0){
      this.produtos[index] = prod;
    }
  }

  private getIndice(id){
    return this.produtos.findIndex(prod => prod._id == id);
  }
}