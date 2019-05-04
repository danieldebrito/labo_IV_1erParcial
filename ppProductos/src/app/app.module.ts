import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpRouteBaseService } from './services/http-route-base.service';
import { ProductosService } from './services/productos.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavComponent } from './components/nav/nav.component';
import { FootComponent } from './components/foot/foot.component';
import { ListadoComponent } from './components/listado/listado.component';
import { BotonBorrarComponent } from './components/boton-borrar/boton-borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavComponent,
    FootComponent,
    ListadoComponent,
    BotonBorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    HttpRouteBaseService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
