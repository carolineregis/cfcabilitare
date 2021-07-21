import { ContactComponent } from './contact/contact.component';
import { SobreComponent } from './sobre/sobre.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { CursosComponent } from './cursos/cursos.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'cursos', component: CursosComponent},
  { path: 'matricula', component: MatriculaComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
