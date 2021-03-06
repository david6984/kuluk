import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { LoginComponent } from './login/login.component';
import { LugaresComponent } from './lugares/lugares.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { NavComponent } from './nav/nav.component';


export const ROUTES: Routes = [
    { 
        path: '',  
        component: HomeComponent
    },
    { 
        path: 'productos',  
        component: ProductosComponent
    },
    { 
        path: 'usuarios',  
        component: UsuariosComponent
    },
    { 
        path: 'lugares',  
        component: LugaresComponent
    },
    { 
        path: 'usuariologin',  
        component: LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    { 
        path: 'slider',  
        component: SliderComponent
    },
        { 
        path: 'nav',  
        component: NavComponent
    },
    { 
        path: 'footer',  
        component: FooterComponent
    },
    { 
        path: '**', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            ROUTES,
            { 
                preloadingStrategy: PreloadAllModules, 
                useHash: true
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }