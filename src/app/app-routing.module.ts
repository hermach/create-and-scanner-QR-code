import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatQrcodeComponent } from './creat-qrcode/creat-qrcode.component';
import { ReadQrcodeComponent } from './read-qrcode/read-qrcode.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'creat_qrcode', component: CreatQrcodeComponent },
  { path: 'read_qrcode', component: ReadQrcodeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
