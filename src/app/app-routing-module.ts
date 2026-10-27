import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comic-component/comic-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';
import { CochesApiComponent } from './components/coches-api-component/coches-api-component';
import { PlantillasFuncionSimpleComponent } from './components/plantillas-funcion-simple-component/plantillas-funcion-simple-component';

const routes: Routes = [
  {path: "", component: ComicComponent},
  {path: "personas", component: PersonasApiComponent},
  {path: "coches", component: CochesApiComponent},
  {path: "plantilla", component: PlantillasFuncionSimpleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
