import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHomeComponent } from './page-home.component';
import { Component, Input } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager.service';
import { of } from 'rxjs';

describe('PageHomeComponent', () => {
  let component: PageHomeComponent;
  let fixture: ComponentFixture<PageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListDataMockComponent, PageHomeComponent],
      providers: [
        { provide: DataManagerService, useValue: { getList: () => of([]) } }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


@Component({
  selector: 'list-data',
  template: '<div>List data</div>'
})
export class ListDataMockComponent {
  @Input() data = [];
  constructor() { }
}
