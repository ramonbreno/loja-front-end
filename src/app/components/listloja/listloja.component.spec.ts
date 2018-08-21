import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListlojaComponent } from './listloja.component';

describe('ListuserComponent', () => {
  let component: ListlojaComponent;
  let fixture: ComponentFixture<ListlojaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListlojaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListlojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
