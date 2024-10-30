import { Routes } from '@angular/router';
import { TableVoitureComponent } from './table-voiture/table-voiture.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: 'table-voiture', component: TableVoitureComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
];
