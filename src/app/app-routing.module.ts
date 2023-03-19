import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { PredictionsComponent } from './predictions/predictions.component';

const routes: Routes = [
{path:"", component:HomeComponent}
  ,{path:"About",component:AboutUsComponent},
  {path:"Contact", component:ContactUsComponent},
  {path:"Predictions", component:PredictionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
