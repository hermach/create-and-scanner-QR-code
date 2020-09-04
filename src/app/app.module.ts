import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

// import for QRCode
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { CreatQrcodeComponent } from './creat-qrcode/creat-qrcode.component';
import { ReadQrcodeComponent } from './read-qrcode/read-qrcode.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { NgQrScannerModule } from 'angular2-qrscanner';




@NgModule({
  declarations: [
    AppComponent,
    CreatQrcodeComponent,
    ReadQrcodeComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    QRCodeModule,
    AppRoutingModule,
    NgQrScannerModule
    
    // RouterModule,



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
