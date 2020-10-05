import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Images } from 'src/app/models/fotos.models';
import { CrudService } from 'src/app/services/crud.service';


@Component({
  selector: 'app-imagem-list',
  templateUrl: './imagem-list.component.html',
  styleUrls: ['./imagem-list.component.css']
})
export class ImagemListComponent implements OnInit {

  imagemVista : Images;
 
  constructor(private imagemService : CrudService)
              
  { 
    this.getterImagens();
  }

  ngOnInit(): void {

    this.getterImagens();
  }
  getterImagens(){
    this.imagemService.getFotos().subscribe((data: Images) => {
      this.imagemVista = data;
      console.log('Os dados que recebemos', data)
      console.log('Variavel que preenchemos',this.imagemVista);
      });

  }


}
