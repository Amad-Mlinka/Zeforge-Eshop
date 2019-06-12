import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KompComponent } from '../Komp/komp.component';

describe('KompComponent', () => {
  let component: KompComponent;
  let fixture: ComponentFixture<KompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
