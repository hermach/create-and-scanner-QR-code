import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatQrcodeComponent } from './creat-qrcode.component';

describe('CreatQrcodeComponent', () => {
  let component: CreatQrcodeComponent;
  let fixture: ComponentFixture<CreatQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
