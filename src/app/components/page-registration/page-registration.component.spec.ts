import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRegistrationComponent } from './page-registration.component';
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { of } from 'rxjs';

describe('PageRegistrationComponent', () => {
  let component: PageRegistrationComponent;
  let fixture: ComponentFixture<PageRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormComponent, PageRegistrationComponent],
      providers: [
        { provide: AuthService, useValue: { registrarate: () => of(null) } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'registration-form',
  template: '<div>registration-form</div>'
})
export class RegistrationFormComponent {
  @Output() save = new EventEmitter<any>();
  constructor() { }
}