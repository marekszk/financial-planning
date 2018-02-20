import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableItemAddComponent } from './table-item-add.component';

describe('TableItemAddComponent', () => {
  let component: TableItemAddComponent;
  let fixture: ComponentFixture<TableItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
