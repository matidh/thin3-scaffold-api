import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thin3ScaffoldApiComponent } from './thin3-scaffold-api.component';

describe('Thin3ScaffoldApiComponent', () => {
  let component: Thin3ScaffoldApiComponent;
  let fixture: ComponentFixture<Thin3ScaffoldApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thin3ScaffoldApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thin3ScaffoldApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
