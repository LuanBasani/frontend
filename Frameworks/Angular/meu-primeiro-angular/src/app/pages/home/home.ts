import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //exemplo de Interpolação (DataBinding)
  //Comunicação unidirecional entre TS -> Html
  // a Interpolação é dada usando  {{ elemento }}
  nome: string = 'Enzo';

  //Property Binding
  //Comunicação unidirecional entre TS -> Html
  //manipula propriedades de elementos HTML
  // a Property Binding é usada com [] em volta do Elemento
  imgUrl: string = 'https://pbs.twimg.com/profile_images/1646954235811045384/nRceWMyd_400x400.jpg';

  botaoDesabilitado: boolean = true;

  classeAlerta: string = 'alerta';
}
