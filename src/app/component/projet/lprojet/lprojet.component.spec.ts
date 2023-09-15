import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LprojetComponent } from './lprojet.component';

describe('LprojetComponent', () => {
  let component: LprojetComponent;
  let fixture: ComponentFixture<LprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
