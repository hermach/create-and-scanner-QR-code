import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creat-qrcode',
  templateUrl: './creat-qrcode.component.html',
  styleUrls: ['./creat-qrcode.component.css']
})
export class CreatQrcodeComponent implements OnInit {

  
  ngOnInit() {
  }
  public qrdata: string = null;

  constructor() {
    this.qrdata = "Initial QR code data string";


  }

  changeQrdata(newValue: string): void {
    this.qrdata = newValue;
  }
}
