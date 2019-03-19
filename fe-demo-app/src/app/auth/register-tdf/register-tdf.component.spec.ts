import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTdfComponent } from './register-tdf.component';

describe('RegisterTdfComponent', () => {
  let component: RegisterTdfComponent;
  let fixture: ComponentFixture<RegisterTdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterTdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterTdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
