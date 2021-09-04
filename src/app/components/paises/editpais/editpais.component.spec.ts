import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpaisComponent } from './editpais.component';

describe('EditpaisComponent', () => {
  let component: EditpaisComponent;
  let fixture: ComponentFixture<EditpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
