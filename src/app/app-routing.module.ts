import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// ....... seccions ....... //
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListadoComponent } from './components/listado/listado.component';
import { ProductosBoardComponent } from './components/productos-board/productos-board.component';
import { AltaComponent } from './components/alta/alta.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
 // { path: 'listado', component: ListadoComponent },
  {
    path: 'productos', component: ProductosBoardComponent,
    children:
      [{ path: '', component: ListadoComponent },
      { path: 'alta', component: AltaComponent }]
    },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
