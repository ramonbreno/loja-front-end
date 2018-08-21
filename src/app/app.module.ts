import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule, Routes}   from '@angular/router';
import{HttpModule}   from '@angular/http';
import{FormsModule}   from '@angular/forms';
import { AppComponent } from './app.component';
import { ListlojaComponent } from './components/listloja/listloja.component';
import { LojaFormComponent } from './components/loja-form/loja-form.component';
import{LojaService}   from './shared-service/loja.service';
const appRoutes:Routes=[
  {path:'', component:ListlojaComponent},
    {path:'op', component:LojaFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListlojaComponent,
    LojaFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [LojaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
