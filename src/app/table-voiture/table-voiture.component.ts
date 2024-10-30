import { Component } from '@angular/core';

@Component({
  selector: 'app-table-voiture',
  standalone: true,
  imports: [],
  templateUrl: './table-voiture.component.html',
  styleUrl: './table-voiture.component.scss'
})
export class TableVoitureComponent{

  vehicules = [
    { model: 'Model', marque: 'Toyota', dates: '12/02/22', types: 'Dépannage', voiture: 498 },
    { model: 'Model', marque: 'Toyota', dates: '12/02/22', types: 'Dépannage', voiture: 503 },
    { model: 'Model', marque: 'Toyota', dates: '12/02/22', types: 'Dépannage', voiture: 507 }
  ];
  
}
