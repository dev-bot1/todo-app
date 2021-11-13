import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotableComponent } from './totable.component';

describe('TotableComponent', () => {
  let component: TotableComponent;
  let fixture: ComponentFixture<TotableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
