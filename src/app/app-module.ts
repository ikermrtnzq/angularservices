import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceComics } from './services/service.comic';
import { ComicComponent } from './components/comic-component/comic-component';
import { provideHttpClient } from '@angular/common/http';
import { ServicePersonas } from './services/service.personas';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ServiceCoches } from './services/service.coches';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillasFuncionSimpleComponent } from './components/plantillas-funcion-simple-component/plantillas-funcion-simple-component';
import { ServicePlantillas } from './services/service.plantillas';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    App,
    ComicComponent,
    PersonasApiComponent,
    MenuComponent,
    CochesApiComponent,
    PlantillasFuncionSimpleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ServiceComics,
    provideHttpClient(),
    ServicePersonas,
    ServiceCoches,
    ServicePlantillas
  ],
  bootstrap: [App],
})
export class AppModule {}
