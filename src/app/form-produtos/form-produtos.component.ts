import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';
import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ProdutoApiService } from '../produto-api.service';

@Component({
  selector: 'app-form-produtos',
  templateUrl: './form-produtos.component.html',
  styleUrls: ['./form-produtos.component.css']
})
export class FormProdutosComponent implements OnInit {
  mensagem = '';
  produto = new Produto();
  id: number;

  constructor(private apiService: ProdutoApiService,
    private service: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      if(this.id){
        this.apiService.buscarPorId(this.id).subscribe(res => {
          this.produto = res;
          console.log(this.produto);
        }, err => { 
          console.error("Erro: "+err);
        });
      } else{
          console.log("não possui id");
          this.produto = new Produto();
        }
    }

    salvarProduto(){
      if(this.id){
        this.apiService.editar(this.id, this.produto).subscribe(res => {
          console.log(this.produto);
          this.router.navigate(['/tabela']);
        }, err => { 
          console.error("Erro: "+err);
        });
      } else{
            this.apiService.adicionar(this.produto).subscribe(res => {
              alert(this.produto.nome+" cadastrado com sucesso!");
              this.router.navigate(['/tabela']);
            }, err => { 
              alert("Erro: "+err);
            });
          }
        }
  
    cancelar(){
      this.router.navigate(['/tabela']);
    }
}
