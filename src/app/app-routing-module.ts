import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comic-component/comic-component';
import { PersonasApiComponent } from './components/personas-api-component/personas-api-component';

const routes: Routes = [
  {path: "", component: ComicComponent},
  {path: "personas", component: PersonasApiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
