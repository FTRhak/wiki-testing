import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDataComponent } from './list-data.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuickFilterPipe } from 'src/app/pipes/quick-filter.pipe';
import { DolarSignPipe } from 'src/app/pipes/dolar-sign.pipe';
import { ExportFileDirective } from 'src/app/directives/export-file.directive';

describe('ListDataComponent', () => {
  let component: ListDataComponent;
  let fixture: ComponentFixture<ListDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [QuickFilterPipe, DolarSignPipe, ExportFileDirective, ListDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
