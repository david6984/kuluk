import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//Import del archivo que tiene las rutas, se debe agregar a los imports
import { AppRoutingModule } from './app.routes.module';

// Componentes que deben ser agregados a los declarations
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDisplayComponent } from './productos/producto-display/producto-display.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProductoAgregarComponent } from './productos/producto-agregar/producto-agregar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuarioDisplayComponent } from './usuarios/usuario-display/usuario-display.component';
import { UsuarioAgregarComponent } from './usuarios/usuario-agregar/usuario-agregar.component';
import { UsuarioLoginComponent } from './usuarios/usuario-login/usuario-login.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugaresDisplayComponent } from './lugares/lugares-display/lugares-display.component';
import { LugaresAgregarComponent } from './lugares/lugares-agregar/lugares-agregar.component';

//servicios creados deben ser agregados en los providers 
import { ProductosService } from './services/productos.service';
import { UsuariosService } from './services/usuarios.service';
import { LugaresService } from './services/lugares.service';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';
import { TextContainsValidator } from './shared/text-contains.directive';



@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDisplayComponent,
    AboutComponent,
    NavComponent,
    HomeComponent,
    ProductoAgregarComponent,
    UsuariosComponent,
    UsuarioDisplayComponent,
    UsuarioAgregarComponent,
    UsuarioLoginComponent,
    TextContainsValidator,
    LugaresComponent,
    LugaresDisplayComponent,
    LugaresAgregarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProductosService,
    UsuariosService,
    LugaresService,
    DataService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
