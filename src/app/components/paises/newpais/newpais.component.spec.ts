import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpaisComponent } from './newpais.component';

describe('NewpaisComponent', () => {
  let component: NewpaisComponent;
  let fixture: ComponentFixture<NewpaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpaisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
